

export const Card = ({img, description, price, stock}) => {
    return (
        <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center
            text-gray-300">
            <img src={img} className="w-40 h-40 object-cover -mt-20 shadow-xl rounded-full"
                alt="plato img" />

            <p className="text-xl">{description}</p>
            <span className="text-gray-400">{price}</span>
            <p className="text-gray-600">{stock}</p>
        </div>
    )
}
