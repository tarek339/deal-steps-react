import { IICon } from "../../types/interfaces/components";

const ArrowBack = ({ color, size }: IICon) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      color={color}
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
    </svg>
  );
};

export default ArrowBack;
