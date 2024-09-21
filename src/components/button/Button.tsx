import { TERipple } from "tw-elements-react";
import { IButton } from "../../types/interfaces/components";

const Button = ({
  title,
  type,
  rippleColor,
  bgColor,
  onClick,
  color,
}: IButton) => {
  return (
    <TERipple rippleColor={rippleColor}>
      <button
        type={type}
        className={`inline-block rounded bg-${bgColor} px-7 pb-2.5 pt-3 text-sm font-medium uppercase 
            leading-normal text-${
              !color ? "white" : color
            } shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
            hover:bg-${bgColor}-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-${bgColor}-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 active:bg-${bgColor}-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
        onClick={onClick}>
        {title}
      </button>
    </TERipple>
  );
};

export default Button;
