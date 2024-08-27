import { TEInput } from "tw-elements-react";
import { IInput } from "../../types/interfaces/components";

const Input = ({ label, type, value, onChange }: IInput) => {
  return (
    <TEInput
      type={type}
      label={label}
      size="lg"
      className="mb-6"
      value={value}
      onChange={onChange}
    ></TEInput>
  );
};

export default Input;
