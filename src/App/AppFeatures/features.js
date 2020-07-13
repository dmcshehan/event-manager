import add_event from "../../assets/images/add_event.svg";
import manage_events from "../../assets/images/manage_events.svg";
import add_invitees from "../../assets/images/add_invitees.svg";
import manage_invitees from "../../assets/images/manage_invitees.svg";

export default [
  {
    id: 1,
    feature: "Add Events",
    description:
      "You can add as many events you want and they will be shown in a list.",
    thumb: add_event,
  },
  {
    id: 2,
    feature: "Manage Events",
    description: "You can delete and update events as you want.",
    thumb: manage_events,
  },
  {
    id: 3,
    feature: "Add Invitees",
    description:
      "When you click an event, a seperate section will be given to you for adding and mannaging invitees for the event.",
    thumb: add_invitees,
  },
  {
    id: 4,
    feature: "Manage Invitees",
    description:
      "You can add and remove invitees for an event and to set their status.",
    thumb: manage_invitees,
  },
];
