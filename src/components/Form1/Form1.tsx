import { useState, ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../Context/FormContext";
import InputGenerator from "../InputGenerator/InputGenerator";

const Form1 = () => {
  const navigate = useNavigate();
  const { updateFormData } = useFormContext();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateFormData(formData);
    navigate("/form-two");
  };

  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const inputData = [
    {
      name: "title",
      type: "text",
      value: formData.title,
      placeholder: "Enter title",
      required: true,
      autoFocus: true,
      className: "border-b border-white text-lg outline-none",
      ref: titleRef,
    },
    {
      name: "price",
      type: "number",
      value: formData.price,
      placeholder: "Enter price",
      required: true,
      autoFocus: false,
      className: "border-b border-white text-lg outline-none",
      ref: priceRef,
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
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            rows={4}
            className="border border-white text-lg outline-none"
          />
          <button type="submit" className="bg-blue-500 px-8 py-2 rounded-lg">
            Go To Second Page
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form1;
