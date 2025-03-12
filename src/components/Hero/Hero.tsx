import banner from "/images/banner.jpg";

const Hero = () => {
  return (
    <div className="px-0 md:px-30">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="w-full h-[30rem] flex flex-col justify-center gap-5 pl-20 md:pl-50"
      >
        <h2 className="text-green-600 text-4xl lg:text-7xl font-bold">
          Get 50% Off <br /> On Selected Items
        </h2>
        <button className="bg-green-800 text-white text-xl w-32 h-12 rounded-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
