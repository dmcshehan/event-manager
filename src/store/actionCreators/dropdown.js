import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from "../actionTypes/dropdown";

function closeDropdown() {
  return {
    type: CLOSE_DROPDOWN,
  };
}

function openDropdown() {
  return {
    type: OPEN_DROPDOWN,
  };
}

export { openDropdown, closeDropdown };
