import { IFormTitle } from "../../types/interfaces/components";

const FormTitle = ({ title }: IFormTitle) => {
  return (
    <div className="flex mb-5 flex-row items-center justify-center lg:justify-start">
      <p className="mb-0 mr-4 text-lg">{title}</p>
    </div>
  );
};

export default FormTitle;
