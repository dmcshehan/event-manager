import React from "react";
import { useSelector } from "react-redux";

export default function EventInfoSummary({ ...props }) {
  const { selectedEvent } = useSelector((state) => state.eventInfo);
  const { venue, invitees } = selectedEvent;
  return (
    <div {...props}>
      <div className='card'>
        <div class='card-content'>
          <div className='columns'>
            <div className='column'>
              <h3 className='title is-5'> 🏠 Venue : {venue}</h3>
            </div>
            <div className='column'>
              <h3 className='title is-5'>
                👩🏻‍🤝‍👨🏼 All Invitees : {invitees.length}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
