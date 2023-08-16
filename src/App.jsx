
import { useState } from "react";
import { Sidebar } from "./components/shared/Sidebar";
import { RiMenuFill, RiUser3Line, RiPieChartLine, RiAddLine, RiCloseLine } from "react-icons/ri";

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
          { showMenu ? <RiCloseLine/> : <RiMenuFill />}
        </button>

      </nav>
    </div>
  );
};
