import { useNavigate } from "react-router-dom";
import { ICard } from "../../types/interfaces/components";
import Flex from "../divs/Flex";
import { Cart } from "../icons";
import Button from "../button/Button";
import IconButton from "../button/IconButton";

const ProductItem = ({
  title,
  description,
  image,
  price,
  id,
  onClick,
}: ICard) => {
  const navigate = useNavigate();

  return (
    <div className="block w-72 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {price} €
        </p>

        <Flex between alignCenter>
          <Button
            title={"Details"}
            type={"button"}
            rippleColor={"light"}
            bgColor={"primary"}
            onClick={() => navigate(`/product-details/${id}`)}
          />
          <IconButton
            icon={<Cart color={"#fff"} size={20} />}
            onClick={onClick}
          />
        </Flex>
      </div>
    </div>
  );
};

export default ProductItem;
