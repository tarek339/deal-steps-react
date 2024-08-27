import { useState } from "react";
import withRestrictions from "../hoc/withRestrictions";
import axios from "axios";
import { useSelectors } from "../hooks";
import { FramerMotion, FormTitle, Input, Button, Form } from "../components";

const ChangeUserEmail = () => {
  const { user } = useSelectors();
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
      <Form onSubmit={onSubmit}>
        <FormTitle title={"Edit Email"} />
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

        <Button
          title={"Submit"}
          type={"submit"}
          rippleColor={"light"}
          bgColor={"primary"}
        />
      </Form>
    </FramerMotion>
  );
};

export default withRestrictions(ChangeUserEmail);
