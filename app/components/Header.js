"use client"
import React from "react";
import SearchIcon from "./icons/SearchIcon";
import { useInventory } from "../context/InventoryContext";

const Header = () => {
  const { setSearchQuery } = useInventory();
  return (
    <div>
      <header class="w-full fixed flex h-16 items-center bg-[#f8f9fa] px-4">
        {/*Absolute child will take to nearest relative parent, so its parent has to be relative*/}
        <div class="relative flex-1">
          <SearchIcon class="absolute left-2.5 top-2.5 h-4 w-4 text-[#7b8c9a]" />
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
            class="w-[83%] rounded-md bg-[#dfe6e9] pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6c5ce7]"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
