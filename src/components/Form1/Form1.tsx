import { useState, useRef, ChangeEvent } from "react";
import InputGenerator from "../InputGenerator/InputGenerator";

const Form1 = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const inputData = [
    {
      name: "title",
      type: "text",
      value: formData.title,
      placeholder: "Enter title",
      required: true,
      autoFocus: true,
      ref: titleRef,
      className: "border-b border-white text-lg outline-none",
    },
    {
      name: "price",
      type: "number",
      value: formData.price,
      placeholder: "Enter price",
      required: true,
      autoFocus: false,
      ref: priceRef,
      className: "border-b border-white text-lg outline-none",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center text-white mt-52">
      <div className="w-1/3 h-96 bg-green-800 rounded-2xl">
        <form className="w-full h-full flex flex-col justify-around items-center">
          <h2 className="text-3xl font-bold">Submit Product</h2>
          <InputGenerator inputData={inputData} handleChange={handleChange} />
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Enter description"
            rows={4}
            ref={descriptionRef}
            className="border border-white text-lg outline-none"
          />

          <button type="submit" className="bg-blue-500 px-8 py-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form1;
