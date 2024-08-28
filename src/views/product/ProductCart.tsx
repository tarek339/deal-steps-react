import axios from "axios";
import withRestrictions from "../../hoc/withRestrictions";
import { useEffect, useState } from "react";
import { Button, CartTable, Flex } from "../../components";
import { useSelectors } from "../../hooks";
import { ICart } from "../../types/interfaces/interfaces";
import IconButton from "../../components/IconButton";
import { Delete } from "../../components/icons";

const ProductCart = () => {
  const { user } = useSelectors();

  const [cart, setCart] = useState<ICart[]>([]);
  const [total, setTotal] = useState(0);

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}${"product/fetch-cart/"}${user?.id}`
      );
      setCart(res.data.cart);
      setTotal(res.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (id: string) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${"product/remove-from-cart/"}${
          user?.id
        }`,
        { productId: id }
      );
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <CartTable
        children={cart.map((item, i) => {
          return (
            <>
              <tr
                key={item.id}
                className="border-b odd:bg-neutral-100 even:bg-white hover:bg-[#d5d5d5] transition-bg duration-300 cursor-pointer">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {i + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{item.brand}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.quantity}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.totalPrice}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <IconButton
                    transparent
                    icon={<Delete color={"red"} size={25} />}
                    onClick={() => removeFromCart(item.id)}
                  />
                </td>
              </tr>
            </>
          );
        })}
        priceData={
          <Flex col gap={3} mt={3}>
            <Flex end wFull>
              <h3 className="mb-2.5 text-3xl font-medium leading-tight">
                Total Price:{" "}
                <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                  {total} €
                </span>
              </h3>
            </Flex>
            <Flex end wFull>
              <Button
                title={"procceed tp pay"}
                type={undefined}
                rippleColor={"light"}
                bgColor={"primary"}
              />
            </Flex>
          </Flex>
        }
      />
    </div>
  );
};

export default withRestrictions(ProductCart);
