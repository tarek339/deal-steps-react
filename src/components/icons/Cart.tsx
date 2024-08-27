import { FaCartPlus } from "react-icons/fa";
import { IICon } from "../../types/interfaces/components";

const Cart = ({ color, size }: IICon) => {
  return <FaCartPlus color={color} size={size} />;
};

export default Cart;
