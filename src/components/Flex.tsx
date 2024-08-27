import { IFlex } from "../types/interfaces/components";

const Flex = ({
  children,
  direction,
  flexWrap,
  maxWidth,
  gap,
  justify,
  align,
  width,
  style,
  height,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: IFlex) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        flexWrap: flexWrap ? "wrap" : "nowrap",
        maxWidth: maxWidth ? "100%" : "",
        gap: `${gap}px`,
        justifyContent: justify,
        alignItems: align,
        width: `${width}px`,
        height: `${height}vh`,
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Flex;
