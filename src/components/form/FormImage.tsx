import { IFormImage } from "../../types/interfaces/components";

const FormImage = ({ children, image }: IFormImage) => {
  return (
    <div className="g-6 flex flex-wrap items-center justify-center lg:justify-between mx-5">
      <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img src={image} className="w-full" alt="Sample image" />
      </div>
      {children}
    </div>
  );
};

export default FormImage;
