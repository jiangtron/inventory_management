import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
// import MainMenu from "./components/MainMenu";
// import Header from "./components/Header";
import { InventoryProvider } from "./context/InventoryContext";

const inter = Inter({ subsets: ["latin"] });

// Dynamic import to handle potential SSR issues
const MainMenu = dynamic(() => import("./components/MainMenu"), { ssr: false });
const Header = dynamic(() => import("./components/Header"), { ssr: false });
export const metadata = {
  title: "Pantry Helper",
  description: "For all your pantry needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InventoryProvider>
          <div className="flex w-screen h-screen">
            <MainMenu />
            <div className="flex flex-col flex-1 pl-64">
              <Header />
              <div className="p-4 mt-16">{children}</div>
            </div>
          </div>
        </InventoryProvider>
      </body>
    </html>
  );
}
