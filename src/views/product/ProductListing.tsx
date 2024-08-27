import { useEffect, useState } from "react";
import { Card, Flex, FramerMotion } from "../../components";
import axios from "axios";
import { IProduct } from "../../types/interfaces/interfaces";

const ProductListing = () => {
  const [prodcuts, setProdcuts] = useState<IProduct[]>([]);

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
      <Flex direction={"row"} gap={20} justify="center" flexWrap maxWidth>
        {prodcuts.map((product, i) => {
          return (
            <Card
              key={i}
              title={product.brand}
              image={product.imageUrl}
              price={product.price}
            />
          );
        })}
      </Flex>
    </FramerMotion>
  );
};

export default ProductListing;
