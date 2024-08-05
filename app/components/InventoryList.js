import { useState } from "react";
import AddItemModal from "./AddItemModal";

const InventoryList = ({ inventory, addItem, removeItem }) => {
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="overflow-auto p-4 space-y-2">
      {open && <AddItemModal itemName={itemName} setItemName={setItemName} handleClose={handleClose} addItem={addItem} />}
      <button class="w-40 bg-blue-500 text-white p-2 rounded-lg" onClick={() => handleOpen()}>
        Add New Item
      </button>
      {inventory.map(({ name, quantity }) => (
        <div
          key={name}
          className="w-full min-h-[150px] bg-gray-100 p-4 flex items-center justify-between">
          <h2 className="text-xl text-gray-800">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
          <h2 className="text-xl text-gray-800">{quantity}</h2>
          <div className="flex gap-2">
            <button
              className="bg-green-500 text-white p-2 rounded-lg"
              onClick={() => addItem(name)}>
              Add
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-lg"
              onClick={() => removeItem(name)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryList;
