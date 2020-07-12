import { useSelector } from "react-redux";

export default function useHasEvents() {
  const { events } = useSelector((state) => state.event);

  return events.length > 0 ? true : false;
}
