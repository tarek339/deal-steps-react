import { IPagination } from "../../types/interfaces/components";
import Flex from "../divs/Flex";
import Text from "../fonts/Text";
import { ArrowForward } from "../icons";
import IconButton from "./IconButton";

const Pagination = ({ onNext, onPrev, pageNum }: IPagination) => {
  return (
    <Flex width={200} between alignCenter>
      <IconButton
        icon={<ArrowForward transform color={"#fff"} size={20} />}
        onClick={onPrev}
      />
      <div>
        <Text text={pageNum as number} />
      </div>

      <IconButton
        icon={<ArrowForward color={"#fff"} size={20} />}
        onClick={onNext}
      />
    </Flex>
  );
};

export default Pagination;
