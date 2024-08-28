import { MdDelete } from "react-icons/md";
import { IICon } from "../../types/interfaces/components";

const Delete = ({ color, size }: IICon) => {
  return <MdDelete color={color} size={size} />;
};

export default Delete;
