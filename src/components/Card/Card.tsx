interface CardProps {
  title: string;
  description: string;
  brand: string;
  off: string;
  price: number;
}

const Card = ({ title, description, brand, off, price }: CardProps) => {
  return (
    <div className="border border-green-400 w-64  p-4 flex flex-col justify-between mx-0 md:mx-10 mt-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-center text-2xl font-bold">{title}</h3>
        <p className="text-lg leading-6 text-gray-700">{description}</p>
        <h3 className="font-bold">{brand}</h3>
        <div className="flex gap-8 items-center">
          <span className="text-red-500 font-semibold">{off} OFF</span>
          <span className="text-green-500 text-xl font-semibold">
            {price} $
          </span>
        </div>
        <button className="bg-green-800 text-white text-lg w-20 h-10 rounded-full self-center">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
