import React from 'react';
import classNames from './Button.module.css';

function Buttons(props) {
	console.log(classNames);
	return (
		<div>
			<button onClick={props.onEdit}>
				{props.isEditing ? <i className="fas fa-save"></i> : <i className="fas fa-edit"></i>}
			</button>
			<button className={classNames.remove} onClick={props.onRemove}>
				<i className="far fa-trash-alt"></i>
			</button>
		</div>
	);
}

export default Buttons;
