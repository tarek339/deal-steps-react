import { ITitle } from "../../types/interfaces/components";

const SubTitle = ({ title, center }: ITitle) => {
  return (
    <h2 className={`text-4xl font-semibold  ${center ? "text-center" : ""}`}>
      {title}
    </h2>
  );
};

export default SubTitle;
