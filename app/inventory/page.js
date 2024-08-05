"use client"
import InventoryList from "../components/InventoryList";
import { useInventory } from "../context/InventoryContext";
export default function InventoryPage() {
  const { inventory, addItem, removeItem } = useInventory();
  return (
    <InventoryList inventory={inventory} addItem={addItem} removeItem={removeItem}></InventoryList>
  );
}
