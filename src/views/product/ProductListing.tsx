import { useEffect, useState } from "react";
import {
  ProductItem,
  Flex,
  FramerMotion,
  Pagination,
  TabBar,
} from "../../components";
import axios from "axios";
import { IProduct } from "../../types/interfaces/interfaces";
import { useSelectors } from "../../hooks";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const [products, setProdcuts] = useState<IProduct[]>([]);
  const [prevSlice, setPrevSlice] = useState(0);
  const [slice, setSlice] = useState(10);
  const [pageNum, setpageNum] = useState(1);

  const { user } = useSelectors();
  const navigate = useNavigate();

  const onNext = () => {
    if (products.length - slice >= 0) {
      setSlice((prev) => prev + 10);
      setPrevSlice((prev) => prev + 10);
      setpageNum((prev) => prev + 1);
    }
  };

  const onPrev = () => {
    if (prevSlice > 0) {
      setSlice((prev) => prev - 10);
      setPrevSlice((prev) => prev - 10);
      setpageNum((prev) => prev - 1);
    }
  };

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
      <Flex col gap={5} alignCenter mt={24}>
        <TabBar
          leftTitle={"Low Price"}
          rightTitle={"Most GB"}
          onLeftClick={() => navigate("/low-price")}
          onRightClick={() => navigate("/most-gb")}
        />
        <Flex gap={5} center wrap>
          {products.slice(prevSlice, slice).map((product) => {
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
        <Pagination onNext={onNext} onPrev={onPrev} pageNum={pageNum} />
      </Flex>
    </FramerMotion>
  );
};

export default ProductListing;
