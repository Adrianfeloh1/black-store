import {
    RiCloseLine,
    RiDeleteBin6Line
} from "react-icons/ri";

export const Car = ({ showOrder, setShowOrder }) => {


    return (

        <div className={`bg-[#1F1D2B] fixed top-0 w-full lg:col-span-2 lg:right-0 lg:w-96 h-full
         transition-all z-50
         ${showOrder ? "right-0" : "-right-full"}`}>
            {/* Orders */}
            <div className="relative pt-16 lg:pt-4 text-gray-300 p-8 h-full">
                <RiCloseLine onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300
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
                {/* Car */}
                <div>
                    <div className="grid grid-cols-6 mb-4 p-4">
                        <h5 className="col-span-4">Item</h5>
                        <h5>Qty</h5>
                        <h5>Price</h5>
                    </div>
                    {/* Products */}
                    <div className="h-[400px] overflow-scroll md:h-[700px] lg:h-[500px]">
                        {/* Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-4">
                                {/* Product Description */}
                                <div className=" col-span-4 flex items-center gap-3">
                                    <img src="plato1.png" alt="plato1 img" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Speacy seaso...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                {/* QTY */}
                                <div>
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className="grid grid-cols-6 items-center">
                                <form className="col-span-5">
                                    <input
                                        type="text"
                                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                                        placeholder="Order note..." />
                                </form>
                                <div>
                                    <button className="border border-red-600 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-4">
                                {/* Product Description */}
                                <div className=" col-span-4 flex items-center gap-3">
                                    <img src="plato1.png" alt="plato1 img" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Speacy seaso...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                {/* QTY */}
                                <div>
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className="grid grid-cols-6 items-center">
                                <form className="col-span-5">
                                    <input
                                        type="text"
                                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                                        placeholder="Order note..." />
                                </form>
                                <div>
                                    <button className="border border-red-600 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-4">
                                {/* Product Description */}
                                <div className=" col-span-4 flex items-center gap-3">
                                    <img src="plato1.png" alt="plato1 img" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Speacy seaso...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                {/* QTY */}
                                <div>
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className="grid grid-cols-6 items-center">
                                <form className="col-span-5">
                                    <input
                                        type="text"
                                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                                        placeholder="Order note..." />
                                </form>
                                <div>
                                    <button className="border border-red-600 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Product */}
                        <div className="bg-[#262837] p-4 rounded-xl mb-4">
                            <div className="grid grid-cols-6 mb-4">
                                {/* Product Description */}
                                <div className=" col-span-4 flex items-center gap-3">
                                    <img src="plato1.png" alt="plato1 img" className="w-10 h-10 object-cover" />
                                    <div>
                                        <h5 className="text-sm">Speacy seaso...</h5>
                                        <p className="text-xs text-gray-500">$2.29</p>
                                    </div>
                                </div>
                                {/* QTY */}
                                <div>
                                    <span>2</span>
                                </div>
                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className="grid grid-cols-6 items-center">
                                <form className="col-span-5">
                                    <input
                                        type="text"
                                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                                        placeholder="Order note..." />
                                </form>
                                <div>
                                    <button className="border border-red-600 p-2 rounded-lg">
                                        <RiDeleteBin6Line className="text-red-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Submit payment */}
                <div className="bg-[#262837] w-full p-4 absolute bottom-0 left-0">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400">Discount</span>
                        <span>$0</span>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-gray-400">Sub total</span>
                        <span>$21.03</span>
                    </div>
                    <div>
                        <button className="bg-[#EC7C6A] w-full py-2 px-4 rounded-lg">
                            Continue to payment
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}
