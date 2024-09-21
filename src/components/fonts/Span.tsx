import { ISpan } from "../../types/interfaces/components";

const Span = ({ text, onClick, cursor, className }: ISpan) => {
  return (
    <span
      className={className}
      onClick={onClick}
      style={{ cursor: cursor ? "pointer" : "default" }}>
      {text}
    </span>
  );
};

export default Span;
