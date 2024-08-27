import { useState } from "react";
import axios from "axios";
import { Button, Form, FormTitle, FramerMotion, Input } from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useSelectors } from "../../hooks";

const ChangeUserPassword = () => {
  const { user } = useSelectors();

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
      <Form onSubmit={onSubmit}>
        <FormTitle title={"Edit Password"} />
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

export default withRestrictions(ChangeUserPassword);
