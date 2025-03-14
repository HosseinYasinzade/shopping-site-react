import { useState, useRef, ChangeEvent } from "react";
import InputGenerator from "../InputGenerator/InputGenerator";

const Form2 = () => {
  const [formData, setFormData] = useState({
    off: "",
    color: "",
  });

  const offRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const inputData = [
    {
      name: "off",
      type: "number",
      value: formData.off,
      placeholder: "Enter Off",
      required: true,
      autoFocus: true,
      ref: offRef,
      className: "border-b border-white text-lg outline-none",
    },
    {
      name: "color",
      type: "text",
      value: formData.color,
      placeholder: "Enter Color",
      required: true,
      autoFocus: false,
      ref: colorRef,
      className: "border-b border-white text-lg outline-none",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center text-white mt-52">
      <div className="w-1/3 h-96 bg-green-800 rounded-2xl">
        <form className="w-full h-full flex flex-col justify-around items-center">
          <h2 className="text-3xl font-bold">Submit Product</h2>
          <InputGenerator inputData={inputData} handleChange={handleChange} />
          <button type="submit" className="bg-blue-500 px-8 py-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
