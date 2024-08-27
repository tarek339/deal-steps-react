import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const useSelectors = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const userLoading = useSelector((state: RootState) => state.user.loading);
  const loading = useSelector((state: RootState) => state.loading.loading);

  return {
    user,
    loading,
    userLoading,
  };
};

export default useSelectors;
