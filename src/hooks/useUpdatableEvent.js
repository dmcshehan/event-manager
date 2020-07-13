import { useSelector } from "react-redux";

export default function useHasEvents() {
  const { updatableEvent } = useSelector((state) => state.eventAction);
  return updatableEvent ? true : false;
}
