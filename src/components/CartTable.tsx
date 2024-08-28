import { ICartTable } from "../types/interfaces/components";
import Button from "./Button";
import Flex from "./Flex";

const CartTable = ({ children, priceData }: ICartTable) => {
  return (
    <div className="flex flex-col mx-5">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b border-[#262626] bg-[#d5d5d5] font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Brand
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
      <Flex col gap={3} mt={3}>
        <Flex end wFull>
          <h3 className="mb-2.5 text-3xl font-medium leading-tight">
            Total Price:{" "}
            <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700">
              {priceData} €
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
    </div>
  );
};

export default CartTable;
