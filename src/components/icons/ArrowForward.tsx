import { IICon } from "../../types/interfaces/components";

const ArrowForward = ({ color, size, transform }: IICon) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      color={color}
      height={size}
      width={size}
      style={{
        transform: transform ? "rotate(180deg)" : "",
        paddingLeft: "4px",
      }}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
    </svg>
  );
};

export default ArrowForward;
