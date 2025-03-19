import { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  name?: string;
  age?: number;
  title?: string;
  price?: string;
  description?: string;
  off?: string;
  color?: string;
}

type FormContextType = {
  formData: Partial<FormData>;
  updateFormData: (data: Partial<FormData>) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("no context");
  }
  return context;
};
