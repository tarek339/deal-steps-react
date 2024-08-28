import { useEffect, useState } from "react";
import { ProductItem, Flex, FramerMotion } from "../../components";
import axios from "axios";
import { IProduct } from "../../types/interfaces/interfaces";
import { useSelectors } from "../../hooks";

const ProductListing = () => {
  const [prodcuts, setProdcuts] = useState<IProduct[]>([]);
  const { user } = useSelectors();

  const addToCart = async (id: string) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${"product/add-to-cart/"}${
          user?.id
        }`,
        { productId: id }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("product/fetch-products");
      setProdcuts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <FramerMotion>
      <Flex gap={5} center wrap mt={24}>
        {prodcuts.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.brand}
              image={product.imageUrl}
              price={product.price}
              id={product.id}
              onClick={() => addToCart(product.id)}
            />
          );
        })}
      </Flex>
    </FramerMotion>
  );
};

export default ProductListing;
