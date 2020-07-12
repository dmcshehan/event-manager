import { useSelector } from "react-redux";

export default function useHasEvents() {
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const { invitees } = selectedEvent;
  return invitees.length > 0 ? true : false;
}
