import Link from "next/link";
import LayoutGridIcon from "./icons/LayoutGridIcon";
import PackageIcon from "./icons/PackageIcon";
import BookOpenIcon from "./icons/BookOpenIcon";
import ListIcon from "./icons/ListIcon";
import SettingsIcon from "./icons/SettingsIcon";

const MainMenu = () => {
  return (
    <div class="fixed flex h-full w-64 flex-col border-r bg-[#f8f9fa]">
      <div class="flex h-16 items-center px-4 bg-[#6c5ce7] text-white">
        <Link href="/" class="font-bold" prefetch={false}>
          Pantry Helper
        </Link>
      </div>
      <nav class="px-2 py-4">
        <Link
          href="#"
          //   activeClassName="bg-[#a29bfe] text-white"
          class="flex gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#dfe6e9] hover:text-[#2d3436] data-[active=true]:bg-[#a29bfe] data-[active=true]:text-white"
          prefetch={false}>
          <LayoutGridIcon class="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/inventory"
          className="flex gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#dfe6e9] hover:text-[#2d3436] data-[active=true]:bg-[#a29bfe] data-[active=true]:text-white"
          activeClassName="bg-[#a29bfe] text-white"
          prefetch={false}>
          <PackageIcon className="h-4 w-4" />
          Inventory
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#dfe6e9] hover:text-[#2d3436] data-[active=true]:bg-[#a29bfe] data-[active=true]:text-white"
          activeClassName="bg-[#a29bfe] text-white"
          prefetch={false}>
          <BookOpenIcon className="h-4 w-4" />
          Recipes
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#dfe6e9] hover:text-[#2d3436] data-[active=true]:bg-[#a29bfe] data-[active=true]:text-white"
          activeClassName="bg-[#a29bfe] text-white"
          prefetch={false}>
          <ListIcon className="h-4 w-4" />
          Grocery List
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#dfe6e9] hover:text-[#2d3436]"
          prefetch={false}>
          <SettingsIcon className="h-4 w-4" />
          Settings
        </Link>
      </nav>
    </div>
  );
};
export default MainMenu;
