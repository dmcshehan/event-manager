import React from 'react';

function Buttons (props){

  return(
    <div>
      <button onClick={props.onEdit}>{(props.isEditing)? <i className="fas fa-save"></i>: <i className="fas fa-edit"></i> }</button>
      <button className="remove" onClick={props.onRemove}><i className="far fa-trash-alt"></i></button>
    </div>

  );
}

export default Buttons;
