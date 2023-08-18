
import { useState } from "react";
import { Sidebar } from "./components/shared/Sidebar";
import {
  RiMenuFill,
  RiUser3Line,
  RiPieChartLine,
  RiAddLine,
  RiCloseLine,
  RiSearchLine,
  RiArrowDownSLine
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
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-32">
        <div className=" lg:col-span-6 md:p-8">
          {/* Header */}
          <header className="">
            {/* Title and search */}
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
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
            <nav className="text-gray-300 flex items-center justify-between border-b my-6
            md:justify-start md:gap-8">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#EC7C6A]
              before:left-0 before:rounded-full before:-bottom-[1px] text-[#EC7C6A]">Hot Dishes</a>
              <a href="#" className="py-2 pr-4">Cold Dishes</a>
              <a href="#" className="py-2 pr-4">soup</a>
              <a href="#" className="py-2 pr-4">Gill</a>
            </nav>
          </header>
          {/* Title Content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="px-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center
            text-gray-300">
              <img src="plato1.png" className="w-40 h-40 object-cover -mt-20 shadow-xl rounded-full"
                alt="plato img" />

              <h3 className="font-bold text-2xl">Speacy seasoned seafood noodles</h3>

              <p className="">$2.29</p>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center
            text-gray-300">
              <img src="plato1.png" className="w-40 h-40 object-cover -mt-20 shadow-xl rounded-full"
                alt="plato img" />

              <h3 className="font-bold text-2xl">Speacy seasoned seafood noodles</h3>

              <p className="">$2.29</p>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center
            text-gray-300">
              <img src="plato1.png" className="w-40 h-40 object-cover -mt-20 shadow-xl rounded-full"
                alt="plato img" />

              <h3 className="font-bold text-2xl">Speacy seasoned seafood noodles</h3>

              <p className="">$2.29</p>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center
            text-gray-300">
              <img src="plato1.png" className="w-40 h-40 object-cover -mt-20 shadow-xl rounded-full"
                alt="plato img" />

              <h3 className="font-bold text-2xl">Speacy seasoned seafood noodles</h3>

              <p className="">$2.29</p>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center
            text-gray-300">
              <img src="plato1.png" className="w-40 h-40 object-cover -mt-20 shadow-xl rounded-full"
                alt="plato img" />

              <h3 className="font-bold text-2xl">Speacy seasoned seafood noodles</h3>

              <p className="">$2.29</p>
              <p className="text-gray-500">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center
            text-gray-300">
              <img src="plato1.png" className="w-40 h-40 object-cover -mt-20 shadow-xl rounded-full"
                alt="plato img" />

              <h3 className="font-bold text-2xl">Speacy seasoned seafood noodles</h3>

              <p className="">$2.29</p>
              <p className="text-gray-500">20 Bowls available</p>
            </div>

          </div>
        </div>
        {/* Shopping Cart */}
        <div className="bg-[#1F1D2B] fixed right-0 top-0 w-full lg:static lg:col-span-2 h-full">
          {/* Orders */}
          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300
             bg-[#262837] rounded-full text-xl"/>
            <h1 className="text-2xl my-4 mt-4">Orders #151416</h1>

            {/* Pills */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#EC7C6A] text-white py-2 px-4 rounded-xl">
                Dine in
              </button>
              <button className=" text-[#EC7C6A] py-2 px-4 rounded-xl border border-gray-500">
                To Go
              </button>
              <button className=" text-[#EC7C6A] py-2 px-4 rounded-xl border border-gray-500">
                Delivery
              </button>
            </div>
            {/* Cart */}
            <div>
              <div className="grid grid-cols-6">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Product */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
