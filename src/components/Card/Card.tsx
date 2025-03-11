import img from "../../assets/images/banner.jpg";

const Card = () => {
  return (
    <div className="border border-green-400 w-64 h-96">
      <img src={img} alt="card image" className="h-1/2 w-full" />
      <div className="flex flex-col gap-4">
        <h3 className="text-center text-3xl font-bold">title</h3>
        <p className="text-lg leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          dicta
        </p>
        <button className="bg-green-800 text-white text-lg w-20 h-10 rounded-full">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
