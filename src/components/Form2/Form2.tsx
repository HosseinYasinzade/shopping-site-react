import { useState, ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormContext } from "../../Context/FormContext";
import InputGenerator from "../InputGenerator/InputGenerator";

const Form2 = () => {
  const navigate = useNavigate();
  const { formData } = useFormContext();

  const [FormData, setFormData] = useState({
    brand: "",
    off: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3000/cards");
      const cards = response.data;
      const newId = cards.length + 1;

      const finalData = {
        id: newId,
        img_src: "images/banner.jpg",
        title: formData.title,
        description: formData.description,
        price: formData.price,
        brand: FormData.brand,
        off: FormData.off,
      };

      await axios.post("http://localhost:3000/cards", finalData);
      navigate("/card-list");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const brandRef = useRef<HTMLInputElement>(null);
  const offRef = useRef<HTMLInputElement>(null);

  const inputData = [
    {
      name: "brand",
      type: "text",
      value: FormData.brand,
      placeholder: "Enter brand",
      required: true,
      autoFocus: true,
      className: "border-b border-white text-lg outline-none",
      ref: brandRef,
    },
    {
      name: "off",
      type: "text",
      value: FormData.off,
      placeholder: "Enter Off",
      required: true,
      autoFocus: false,
      className: "border-b border-white text-lg outline-none",
      ref: offRef,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center text-white mt-52">
      <div className="w-1/3 h-96 bg-green-800 rounded-2xl">
        <form
          className="w-full h-full flex flex-col justify-around items-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold">Submit Product</h2>
          <InputGenerator inputData={inputData} handleChange={handleChange} />
          <button type="submit" className="bg-blue-500 px-8 py-2 rounded-lg">
            Add to Cards
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
