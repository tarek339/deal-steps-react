import { IText } from "../../types/interfaces/components";

const Text = ({ text }: IText) => {
  return <p className="text-xl">{text}</p>;
};

export default Text;
