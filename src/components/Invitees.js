import React from 'react';
import PropTypes from 'prop-types';
import RespondedInvitee from './RespondedInvitee';


function Invitees (props){
  return(
    <ul>
      {(props.input) !== '' ?  <li className="pending"><span>{props.input}</span></li>: null}

      {props.Invitees.map(function(Invitee){
        return <RespondedInvitee name={Invitee.name} confirmed={Invitee.confirmed}/>
      })}

      <li>
        <span>Joel</span>
        <label>
          <input type="checkbox"/> Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
      </li>
    </ul>
  );
}

Invitees.propTypes = {
  Invitees : PropTypes.array.isRequired,
}

export default Invitees;
