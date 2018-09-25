import React from 'react';
import PropTypes from 'prop-types';


function InviteeName (props){
    if(props.isEditing){
      return <input type="text" value={props.children} onChange={props.onChange}/>
    }else{
      return <span>{props.children}</span>
    }
}

InviteeName.propTypes = {

}

export default InviteeName;
