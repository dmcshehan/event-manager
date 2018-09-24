import React from 'react';

function RespondedInvitee (props){

  return(
    <li className="responded"><span>{props.name}</span>
      <label>
        {(props.confirmed) ? <input type="checkbox" checked /> : <input type="checkbox"/>}
        Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
    </li>
  );
}

export default RespondedInvitee;
