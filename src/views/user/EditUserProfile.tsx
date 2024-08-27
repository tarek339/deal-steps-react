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
import { useSelectors, useDispatches } from "../../hooks";
import { useNavigate } from "react-router-dom";

const EditUserProfile = () => {
  const { user } = useSelectors();
  const { dispatchUser } = useDispatches();
  const navigate = useNavigate();

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
      <Flex direction={"column"} align="center" mt={24} gap={20}>
        <SubTitle title={"Edit profile data"} />
        <FormImage
          image={
            "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          }>
          <Form onSubmit={onSubmit}>
            <FormTitle title={"Fill in the form or change existing data..."} />
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

export default withRestrictions(EditUserProfile);
