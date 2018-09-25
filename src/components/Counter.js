import React from 'react';


function Counter (props){
  let numOfInvitees = props.Invitees.length;
  let confirmedNum = props.Invitees.filter(Invitee => Invitee.confirmed === true).length;

  return(
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{confirmedNum}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{numOfInvitees - confirmedNum}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{numOfInvitees}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Counter;
