const AddItemModal = ({ addItem, itemName, setItemName, handleClose }) => {
  return (
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white border-2 border-black shadow-xl p-4 rounded-lg flex flex-col gap-4">
        <h2 class="text-xl font-semibold">Add Item</h2>
        <div class="flex gap-2">
          <input
            type="text"
            class="border border-gray-300 rounded-lg p-2 flex-1"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button
            class="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => {
              addItem(itemName);
              setItemName("");
              handleClose();
            }}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
