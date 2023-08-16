import { Sidebar } from "./components/shared/Sidebar";
import { RiMenuFill, RiUser3Line, RiPieChartLine, RiAddLine } from "react-icons/ri";

export const App = () => {
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar />
      {/* menu mobile */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-500
       py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button>
          <RiUser3Line />
        </button>
        <button>
          <RiAddLine />
        </button>
        <button>
          <RiPieChartLine />
        </button>
        <button className="text-white">
          <RiMenuFill />
        </button>

      </nav>
    </div>
  );
};
