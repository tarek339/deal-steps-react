import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/interfaces/interfaces";
import { Cart } from "../../components/icons";
import { Button, Flex, FramerMotion, Span, SubTitle } from "../../components";
import { useSelectors } from "../../hooks";

const ProductDetails = () => {
  const [product, setProduct] = useState<IProduct>();
  const { productID } = useParams();
  const { user } = useSelectors();

  const addToCart = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${"product/add-to-cart/"}${
          user?.id
        }`,
        { productId: product?.id }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }${"product/fetch-single-product/"}${productID}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <FramerMotion>
      <Flex col alignCenter gap={5} mt={24}>
        <SubTitle title={"Product details"} />
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={product?.imageUrl}
            alt=""
          />
          <Flex col between p={6} height={31}>
            <div>
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {product?.shopName}
              </h5>
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {product?.brand}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {product?.description}
              </p>
              <p className="text-base text-neutral-500 dark:text-neutral-300">
                {product?.price} €
              </p>
            </div>
            <Flex end wFull>
              <Button
                title={
                  <Flex gap={2}>
                    <Cart color={"#fff"} size={20} />
                    <Span text={"add"} cursor />
                  </Flex>
                }
                type={"button"}
                rippleColor={"light"}
                bgColor={"primary"}
                onClick={addToCart}
              />
            </Flex>
          </Flex>
        </div>
      </Flex>
    </FramerMotion>
  );
};

export default ProductDetails;
