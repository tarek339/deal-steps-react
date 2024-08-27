import { useDispatches, useSelectors } from "../hooks";
import withRestrictions from "../hoc/withRestrictions";
import { Button, FramerMotion } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const { user } = useSelectors();
  const { dispatchRemoveUser } = useDispatches();
  const navigate = useNavigate();

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
      <h1>{user?.firstName}</h1>
      <h1>{user?.lastName}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.street}</h1>
      <h1>{user?.houseNumber}</h1>
      <h1>{user?.zipCode}</h1>
      <h1>{user?.city}</h1>
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
        onClick={onDelete}
      />
    </FramerMotion>
  );
};

export default withRestrictions(UserProfile);
