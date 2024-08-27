import {
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import IconButton from "./IconButton";
import { Cancel } from "./icons";
import Button from "./Button";
import { IModal } from "../types/interfaces/components";

const Modal = ({
  title,
  text,
  buttonTitle,
  onClick,
  show,
  setShow,
}: IModal) => {
  return (
    <TEModal show={show} setShow={setShow}>
      <TEModalDialog>
        <TEModalContent>
          <TEModalHeader>
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              {title}
            </h5>

            <IconButton
              onClick={() => setShow(false)}
              transparent
              icon={<Cancel />}
            />
          </TEModalHeader>

          <TEModalBody>{text}</TEModalBody>
          <TEModalFooter className="flex flex-row gap-1">
            <Button
              title={"cancel"}
              type="button"
              rippleColor={"light"}
              bgColor={"primary"}
              onClick={() => setShow(false)}
            />
            <Button
              title={buttonTitle}
              type="button"
              rippleColor={"light"}
              bgColor={"danger"}
              onClick={onClick}
            />
          </TEModalFooter>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  );
};

export default Modal;
