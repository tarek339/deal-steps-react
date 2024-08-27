import { IFormText } from "../../types/interfaces/components";

const FormText = ({ text }: IFormText) => {
  return <p className="mb-0 mt-2 pt-1 text-sm font-semibold">{text}</p>;
};

export default FormText;
