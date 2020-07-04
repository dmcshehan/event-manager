import { useSelector } from "react-redux";

export default function useIsLoggedIn() {
  const { user } = useSelector((state) => state.user);

  return user ? true : false;
}
