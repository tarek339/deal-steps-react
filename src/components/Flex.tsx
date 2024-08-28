import { IFlex } from "../types/interfaces/components";

const Flex = ({
  col,
  mt,
  p,
  wrap,
  children,
  center,
  between,
  end,
  gap,
  alignCenter,
  height,
  wFull,
  width,
}: IFlex) => {
  return (
    <div
      className={`flex ${col ? "flex-col" : "flex-row"} ${
        wrap ? "flex-wrap" : "flex-nowrap"
      } gap-${gap} mt-${mt} p-${p} ${
        center
          ? "justify-center"
          : between
          ? "justify-between"
          : end
          ? "justify-end"
          : "justify-normal"
      } ${alignCenter ? "items-center" : "items-start"} ${
        wFull ? "w-full" : ""
      } `}
      style={{
        height: `${height}vh`,
        width: `${width}px`,
      }}>
      {children}
    </div>
  );
};

export default Flex;
