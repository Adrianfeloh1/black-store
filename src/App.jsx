import { Sidebar } from "./components/shared/Sidebar";
import {RiMenuFill, RiUser3Line, RiAddLine} from "react-icons/ri";

export const App = () => {
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar />
      {/* menu mobile */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0">
        <button>
          <RiUser3Line/>
        </button>
        <button>
          <RiAddLine/>
        </button>
        <button>
          <RiMenuFill/>
        </button>
        <button>
          <RiMenuFill/>
        </button>
        
      </nav>
    </div>
  );
};
