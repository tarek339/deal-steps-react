import { ICartTable } from "../types/interfaces/components";
import ContentHolder from "./ContentHolder";

const CartTable = ({ children, priceData }: ICartTable) => {
  return (
    <ContentHolder mt={24}>
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
        {priceData}
      </div>
    </ContentHolder>
  );
};

export default CartTable;
