import { ITitle } from "../../types/interfaces/components";

const SubTitle = ({ title }: ITitle) => {
  return <h2 className="text-4xl font-semibold">{title}</h2>;
};

export default SubTitle;
