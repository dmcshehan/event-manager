import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteEvent } from "../../store/actionCreators/event";

export default function EventControlDropdown({ _id }) {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const specificEvent = events.find((event) => event._id === _id);

  function onDeleteEvent(event) {
    event.stopPropagation();
    if (
      window.confirm(
        `Are you sure you want to delete ${specificEvent.title} from your list?`
      )
    ) {
      dispatch(deleteEvent(_id));
    }
  }

  return (
    <div>
      <div className={`dropdown is-right is-hoverable`}>
        <div className='dropdown-trigger'>
          <button
            className='button is-small'
            aria-haspopup='true'
            aria-controls='dropdown-menu'
          >
            <span className='icon is-small'>
              <i className='fas fa-ellipsis-h'></i>
            </span>
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            <a href='#' className='dropdown-item'>
              Update Event
            </a>
            <a href='#' className='dropdown-item' onClick={onDeleteEvent}>
              Delete Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
