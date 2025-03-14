import React, { ChangeEvent, RefObject } from "react";

interface InputData {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  required: boolean;
  autoFocus: boolean;
  ref: RefObject<HTMLInputElement | null>;
  className?: string;
}

interface InputGeneratorProps {
  inputData: InputData[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputGenerator: React.FC<InputGeneratorProps> = ({
  inputData,
  handleChange,
}) => {
  return inputData.map(
    ({
      name,
      type,
      value,
      placeholder,
      required,
      autoFocus,
      ref,
      className,
    }) => (
      <div className="input-field" key={name}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          autoFocus={autoFocus}
          placeholder={placeholder}
          ref={ref}
          className={className || ""}
        />
      </div>
    )
  );
};

export default InputGenerator;
