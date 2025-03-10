import { Phone } from "../../icons";

const HeaderTop = () => {
  return (
    <div className="bg-green-800 w-full h-10 text-white flex justify-between items-center px-30">
      <div className="flex items-center">
        <div className="w-5 h-5">
          <Phone />
        </div>
        <p className="ml-4">+989301234567</p>
      </div>
      <p>Get 50% Off On Selected Items | Shop Now</p>
      <div className="flex justify-between items-center">
        <select>
          <option value="English" selected className="text-black">
            English
          </option>
          <option value="Persian" className="text-black">
            Persian
          </option>
        </select>
      </div>
    </div>
  );
};

export default HeaderTop;
