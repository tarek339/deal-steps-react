import { ITitle } from "../../types/interfaces/components";

const Title = ({ title }: ITitle) => {
  return <h1 className="text-5xl font-semibold">{title}</h1>;
};

export default Title;
