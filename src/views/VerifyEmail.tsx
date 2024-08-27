import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.post("/customer/verify-email", {
        token: search.get("token"),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  return null;
};

export default VerifyEmail;
