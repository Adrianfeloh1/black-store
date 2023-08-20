import { useState } from "react";

import {
  RiMenuFill,
  RiUser3Line,
  RiPieChartLine,
  RiAddLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";

//Components
import { Header } from "./components/shared/Header";
import { Car } from "./components/shared/Car";
import { Sidebar } from "./components/shared/Sidebar";
import { Card } from "./components/shared/Card";

export const App = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)

  }

  const toggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car
        showOrder={showOrder}
        setShowOrder={setShowOrder}
      />
      {/* menu mobile */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-500
        py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrder} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenuFill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">

          <Header />

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

            <Card
              img="plato1.png"
              description="Speacy seasoned seafood noodles"
              price="$2.29"
              stock="20 Bowls available"
            />
            <Card
              img="plato2.png"
              description="Speacy seasoned seafood noodles"
              price="$2.29"
              stock="20 Bowls available"
            />
            <Card
              img="plato1.png"
              description="Speacy seasoned seafood noodles"
              price="$2.29"
              stock="20 Bowls available"
            />
            <Card
              img="plato2.png"
              description="Speacy seasoned seafood noodles"
              price="$2.29"
              stock="20 Bowls available"
            />
            <Card
              img="plato1.png"
              description="Speacy seasoned seafood noodles"
              price="$2.29"
              stock="20 Bowls available"
            />
            <Card
              img="plato2.png"
              description="Speacy seasoned seafood noodles"
              price="$2.29"
              stock="20 Bowls available"
            />
            <Card
              img="plato1.png"
              description="Speacy seasoned seafood noodles"
              price="$2.29"
              stock="20 Bowls available"
            />
            <Card
              img="plato2.png"
              description="Speacy seasoned seafood noodles"
              price="$2.29"
              stock="20 Bowls available"
            />
            <Card
              img="plato1.png"
              description="Speacy seasoned seafood noodles"
              price="$2.29"
              stock="20 Bowls available"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
