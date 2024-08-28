import { TERipple } from "tw-elements-react";
import { IIconButton } from "../types/interfaces/components";

const IconButton = ({ icon, onClick }: IIconButton) => {
  return (
    <>
      <TERipple rippleColor="light">
        <button
          type="button"
          className="bg-primary rounded-full p-2 flex items-center justify-center"
          onClick={onClick}>
          {icon}
        </button>
      </TERipple>
    </>
  );
};

export default IconButton;
