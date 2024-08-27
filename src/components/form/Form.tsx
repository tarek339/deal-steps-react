import { IForm } from "../../types/interfaces/components";

const Form = ({ onSubmit, children }: IForm) => {
  return (
    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

export default Form;
