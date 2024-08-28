import { MdDelete } from "react-icons/md";
import { IICon } from "../../types/interfaces/components";

const Delete = ({ color, size, onClick }: IICon) => {
  return <MdDelete color={color} size={size} onClick={onClick} />;
};

export default Delete;
