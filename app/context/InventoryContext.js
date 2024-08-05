"use client"
import { createContext, useState, useContext, useEffect } from "react";
import { firestore } from "../../firebase";
import { collection, deleteDoc, getDoc, getDocs, query, setDoc, doc } from "firebase/firestore";
const InventoryContext = createContext();

export function InventoryProvider({ children }) {
  const [inventory, setInventory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //Prevent website from freezing when fetching
  const updateInventory = async () => {
    const snapshot = query(collection(firestore, "inventory"));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      });
      setInventory(inventoryList);
    });
  };

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    } else {
      await setDoc(docRef, { quantity: 1 });
    }
    await updateInventory();
  };

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity == 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }
    await updateInventory();
  };

  const filteredInventory =
    searchQuery.trim() === ""
      ? inventory
      : inventory.filter((item) =>
          item.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
        );
  useEffect(() => {
    updateInventory();
  }, []);

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);
  return (
    <InventoryContext.Provider
      value={{
        inventory: filteredInventory,
        setInventory,
        addItem,
        removeItem,
        searchQuery,
        setSearchQuery,
      }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  return useContext(InventoryContext);
}
