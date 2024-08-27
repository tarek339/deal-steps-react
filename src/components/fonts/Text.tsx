import { IText } from "../../types/interfaces/components";

const Text = ({ text, center }: IText) => {
  return <p className={`text-xl ${center ? "text-center" : ""}`}>{text}</p>;
};

export default Text;
