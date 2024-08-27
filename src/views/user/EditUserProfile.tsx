import { useState } from "react";
import { Button, Form, FormTitle, FramerMotion, Input } from "../components";
import { useDispatches, useSelectors } from "../hooks";
import withRestrictions from "../hoc/withRestrictions";
import axios from "axios";

const EditUserProfile = () => {
  const { user } = useSelectors();
  const { dispatchUser } = useDispatches();

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [street, setStreet] = useState(user?.street || "");
  const [houseNumber, setHouseNumber] = useState(user?.houseNumber || "");
  const [zipCode, setZipCode] = useState(user?.zipCode || "");
  const [city, setCity] = useState(user?.city || "");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${
          import.meta.env.VITE_BACKEND_URL
        }${"customer/edit-customer-profile/"}${user?.id}`,
        {
          firstName,
          lastName,
          street,
          houseNumber,
          zipCode,
          city,
        }
      );
      dispatchUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FramerMotion>
      <Form onSubmit={onSubmit}>
        <FormTitle title={"Edit Profile"} />
        <Input
          label={"First name"}
          type={"text"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label={"Last name"}
          type={"text"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label={"Street"}
          type={"text"}
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <Input
          label={"House number"}
          type={"text"}
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
        />
        <Input
          label={"ZIP Code"}
          type={"text"}
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <Input
          label={"City"}
          type={"text"}
          value={city}
          onChange={(e) => setCity(e.target.value)}
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

export default withRestrictions(EditUserProfile);
