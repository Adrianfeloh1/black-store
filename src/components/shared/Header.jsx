import {
    RiSearchLine,
} from "react-icons/ri";

export const Header = () => {
    return (
        <header>
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
    )
}
