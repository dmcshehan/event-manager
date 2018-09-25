import React from 'react';
import PropTypes from 'prop-types';
import Invitee from './Invitee';


function Invitees (props){

  return(
    <ul>
      {(props.input) !== '' ?  <li className="pending"><span>{props.input}</span></li>: null}

      {props.Invitees.filter(Invitee => !props.isFiltered || Invitee.confirmed ).map(function(singleInvitee,index){
        return <Invitee
                key={singleInvitee.id}
                name={singleInvitee.name}
                isEditing={singleInvitee.isEditing}
                onEdit = {function(){
                  props.onEdit(index)
                }}
                onRemove={function(){
                  props.onRemove(index)
                }}
                onChange={function(newName){
                  props.onChange(newName,index)
                }}
                confirmed={singleInvitee.confirmed}
                onConfirmChange={function(){
                  props.onConfirmChange(index)
                }}/>
      })}
    </ul>
  );
}

Invitees.propTypes = {
  Invitees : PropTypes.array.isRequired,
  isFiltered : PropTypes.bool.isRequired,
  input:PropTypes.string.isRequired,
  onEdit:PropTypes.func.isRequired,
  onRemove:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  onConfirmChange:PropTypes.func.isRequired,

}


export default Invitees;
