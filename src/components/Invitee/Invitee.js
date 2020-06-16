import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons';
import InviteeName from '../InviteeName/InviteeName';

import classNames from './Invitee.module.css';

function Invitee(props) {
	return (
		<li className="responded">
			<InviteeName
				onChange={(event) => props.onChange(event.target.value)}
				isEditing={props.isEditing}
			>
				{props.name}
			</InviteeName>
			<label>
				<input
					type="checkbox"
					checked={props.confirmed ? true : false}
					onChange={props.onConfirmChange}
				/>
				Confirmed
			</label>
			<Buttons onRemove={props.onRemove} isEditing={props.isEditing} onEdit={props.onEdit} />
		</li>
	);
}

Invitee.propTypes = {
	confirmed: PropTypes.bool.isRequired,
	onConfirmChange: PropTypes.func.isRequired,
};

export default Invitee;
