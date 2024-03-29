import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsRegistered,
} from "../redux/authUser/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isRegistered = useSelector(selectIsRegistered);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isRegistered,
  };
};
