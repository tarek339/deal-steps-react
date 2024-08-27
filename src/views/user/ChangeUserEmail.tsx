import { useState } from "react";
import axios from "axios";
import {
  FramerMotion,
  FormTitle,
  Input,
  Button,
  Form,
  Flex,
  FormImage,
  SubTitle,
} from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useSelectors } from "../../hooks";
import { useNavigate } from "react-router-dom";

const ChangeUserEmail = () => {
  const { user } = useSelectors();
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(
        `${
          import.meta.env.VITE_BACKEND_URL
        }${"customer/change-costumers-email/"}${user?.id}`,
        {
          newEmail,
          confirmEmail,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FramerMotion>
      <Flex direction={"column"} align="center" mt={24} gap={20}>
        <SubTitle title={"Edit email data"} />
        <FormImage
          image={
            "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          }>
          <Form onSubmit={onSubmit}>
            <FormTitle title={"Type in the new email..."} />
            <Input
              label={"New Email"}
              type={"email"}
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <Input
              label={"Confirm Email"}
              type={"email"}
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
            <Flex direction={"row"} gap={5} justify="flex-end">
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

export default withRestrictions(ChangeUserEmail);
