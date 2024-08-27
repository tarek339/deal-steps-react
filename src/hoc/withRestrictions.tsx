import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelectors } from "../hooks";

const withRestrictions = (Component: React.ComponentType) => {
  return () => {
    const { user } = useSelectors();
    const navigate = useNavigate();

    useEffect(() => {
      if (!user || !user?.isVerified) {
        return navigate("/");
      }
    }, [user, navigate]);

    if (user === null) {
      return null;
    }

    return <Component />;
  };
};

export default withRestrictions;
