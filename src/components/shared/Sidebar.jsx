import {
  RiHome5Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings3Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";

export const Sidebar = ({showMenu}) => {


  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col
     justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"} `}
    >
      <div>
        <ul className=" pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#EC7C6A] p-4 flex justify-center rounded-lg"
            >
              <RiHome5Line className="text-2xl text-white" />
            </a>
          </li>
          <li
            className="p-4 rounded-tl-xl rounded-bl-xl
           hover:bg-[#262837] group transition-colors"
          >
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-lg 
            text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-2xl " />
            </a>
          </li>
          <li
            className="p-4 rounded-tl-xl rounded-bl-xl
           hover:bg-[#262837] group transition-colors"
          >
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-lg 
            text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl " />
            </a>
          </li>
          <li
            className="p-4 rounded-tl-xl rounded-bl-xl
           hover:bg-[#262837] group transition-colors"
          >
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-lg 
            text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl " />
            </a>
          </li>
          <li
            className="p-4 rounded-tl-xl rounded-bl-xl
           hover:bg-[#262837] group transition-colors"
          >
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-lg 
            text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl " />
            </a>
          </li>
          <li
            className="p-4 rounded-tl-xl rounded-bl-xl
           hover:bg-[#262837] group transition-colors"
          >
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-lg 
            text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiSettings3Line className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li
            className="p-4 rounded-tl-xl rounded-bl-xl
           hover:bg-[#262837] group transition-colors"
          >
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-lg 
            text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiLogoutBoxRLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
