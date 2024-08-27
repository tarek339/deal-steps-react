import { IUser } from "../types/interfaces/interfaces";
import { useDispatch } from "react-redux";
import { addUser, handleSpinner, removeUser } from "./redux/slices";

const useDispatches = () => {
  const dispatch = useDispatch();

  const dispatchUser = (user: IUser) => dispatch(addUser({ user }));
  const dispatchRemoveUser = () => dispatch(removeUser());
  const dispatchLoading = (loading: boolean) =>
    dispatch(handleSpinner({ loading: loading }));

  return {
    dispatchUser,
    dispatchRemoveUser,
    dispatchLoading,
  };
};

export default useDispatches;
