import { useState } from "react";
import axios from "axios";
import {
  Button,
  Flex,
  Form,
  FormImage,
  FormTitle,
  FramerMotion,
  Input,
  SubTitle,
} from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useSelectors } from "../../hooks";
import { useNavigate } from "react-router-dom";

const ChangeUserPassword = () => {
  const { user } = useSelectors();
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(
        `${
          import.meta.env.VITE_BACKEND_URL
        }${"customer/change-costumers-password/"}${user?.id}`,
        {
          oldPassword,
          newPassword,
          confirmPassword,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FramerMotion>
      <Flex col alignCenter mt={24} gap={5}>
        <SubTitle title={"Reset Password"} />
        <FormImage
          image={
            "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          }>
          <Form onSubmit={onSubmit}>
            <FormTitle title={"Type in the new password..."} />
            <Input
              label={"Old password"}
              type={"password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              label={"New password"}
              type={"password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              label={"Confirm password"}
              type={"password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Flex gap={5} end>
              <Button
                title={"Back"}
                type={"button"}
                rippleColor={"light"}
                bgColor={"danger"}
                onClick={() => navigate(-1)}
              />
              <Button
                title={"Submit"}
                type={"submit"}
                rippleColor={"light"}
                bgColor={"primary"}
              />
            </Flex>
          </Form>
        </FormImage>
      </Flex>
    </FramerMotion>
  );
};

export default withRestrictions(ChangeUserPassword);
