interface CardProps {
  img_src: string;
  title: string;
  description: string;
  off: string;
}

const Card = ({ img_src, title, description, off }: CardProps) => {
  console.log(img_src);
  console.log(title);

  return (
    <div className="border border-green-400 w-64 h-96 p-4 flex flex-col justify-between mx-0 md:mx-10 mt-10">
      <img
        src={img_src}
        alt="product image"
        className="h-1/2 w-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-center text-2xl font-bold">{title}</h3>
        <p className="text-lg leading-6 text-gray-700">{description}</p>
        <span className="text-red-500 font-semibold">{off} OFF</span>
        <button className="bg-green-800 text-white text-lg w-20 h-10 rounded-full self-center">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
