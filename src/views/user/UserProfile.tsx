import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FramerMotion, Button, Flex, Title, SubTitle } from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useSelectors, useDispatches } from "../../hooks";
import Modal from "../../components/Modal";
import { useState } from "react";

const UserProfile = () => {
  const { user } = useSelectors();
  const { dispatchRemoveUser } = useDispatches();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const onDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}${"customer/delete-customer/"}${
          user?.id
        }`
      );
      localStorage.removeItem("token");
      dispatchRemoveUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FramerMotion>
      <Modal
        title={"Delete Profile"}
        text={
          "Are you sure? After deleting your profile all data will be lost. You cannot return them."
        }
        buttonTitle={"Delete"}
        onClick={onDelete}
        show={showModal}
        setShow={setShowModal}
      />
      <Flex direction={"row"} justify="center" mt={24}>
        <Flex direction={"column"} gap={20}>
          <Title title={"Profile"} />

          <Flex direction={"row"} gap={5}>
            <SubTitle title={user?.firstName!} />
            <SubTitle title={user?.lastName!} />
          </Flex>
          <SubTitle title={user?.email!} />
          <Flex direction={"row"} gap={5}>
            <SubTitle title={user?.street!} />
            <SubTitle title={user?.houseNumber!} />
          </Flex>
          <Flex direction={"row"} gap={5}>
            <SubTitle title={user?.zipCode!} />
            <SubTitle title={user?.city!} />
          </Flex>

          <Flex direction={"row"} gap={20}>
            <Button
              title={"Edit data"}
              type={"button"}
              rippleColor={"light"}
              bgColor={"primary"}
              onClick={() => navigate("/edit-user-profile")}
            />
            <Button
              title={"Edit Email"}
              type={"button"}
              rippleColor={"light"}
              bgColor={"primary"}
              onClick={() => navigate("/edit-user-email")}
            />
          </Flex>

          <Flex direction={"row"} gap={20}>
            <Button
              title={"Edit Password"}
              type={"button"}
              rippleColor={"light"}
              bgColor={"primary"}
              onClick={() => navigate("/edit-user-password")}
            />
            <Button
              title={"Delete Profile"}
              type={"button"}
              rippleColor={"light"}
              bgColor={"danger"}
              onClick={() => setShowModal(true)}
            />
          </Flex>
        </Flex>
      </Flex>
    </FramerMotion>
  );
};

export default withRestrictions(UserProfile);
