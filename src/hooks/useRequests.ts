import axios from "axios";
import useDispatches from "./useDispatches";

const useRequests = () => {
  const { dispatchUser, dispatchRemoveUser } = useDispatches();

  const fetchUserProfile = async () => {
    try {
      const res = await axios.get("customer/get-customer-profile");
      dispatchUser(res.data.user);
    } catch (error) {
      dispatchRemoveUser();
    }
  };

  return {
    fetchUserProfile,
  };
};

export default useRequests;
