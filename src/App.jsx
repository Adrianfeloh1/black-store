
import { useState } from "react";
import { Sidebar } from "./components/shared/Sidebar";
import {
  RiMenuFill,
  RiUser3Line,
  RiPieChartLine,
  RiAddLine,
  RiCloseLine,
  RiSearchLine
} from "react-icons/ri";

export const App = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* menu mobile */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-500
       py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenuFill />}
        </button>

      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 ">
        <div className=" lg:col-span-6">
          {/* Header */}
          <header className="p-4">
            {/* Title and search */}
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">20 de agosto 2023</p>
              </div>
              <form action="">
                <div className="w-full relative">
                  <RiSearchLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 text-2xl" />
                  <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg
                 text-gray-300 outline-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* Menu */}
            <nav className="text-gray-300 flex items-center justify-between border-b">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#EC7C6A]
              before:left-0 before:rounded-full before:-bottom-[1px] text-[#EC7C6A]">Hot Dishes</a>
              <a href="#" className="py-2 pr-4">Cold Dishes</a>
              <a href="#" className="py-2 pr-4">soup</a>
              <a href="#" className="py-2 pr-4">Gill</a>
            </nav>
          </header>
        </div>
        <div className=" lg:col-span-2 fixed right-0 lg:static ">carrito</div>
      </main>
    </div>
  );
};
