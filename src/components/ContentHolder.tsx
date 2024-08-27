import { IContentHolder } from "../types/interfaces/components";

const ContentHolder = ({ children, mt }: IContentHolder) => {
  return <div className={`max-w-screen-xl m-auto mt-${mt}`}>{children}</div>;
};

export default ContentHolder;
