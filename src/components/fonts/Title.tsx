import { ITitle } from "../../types/interfaces/components";

const Title = ({ title, center }: ITitle) => {
  return (
    <h1 className={`text-5xl font-semibold ${center ? "text-center" : ""}`}>
      {title}
    </h1>
  );
};

export default Title;
