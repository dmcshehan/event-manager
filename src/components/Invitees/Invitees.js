import React from 'react';
import PropTypes from 'prop-types';
import Invitee from '../Invitee/Invitee';

import classNames from './Invitees.module.css';

function Invitees(props) {
	return (
		<ul>
			{props.input !== '' ? (
				<li className="pending">
					<span>{props.input}</span>
				</li>
			) : null}

			{props.Invitees.filter((Invitee) => !props.isFiltered || Invitee.confirmed).map(function (
				singleInvitee,
				index
			) {
				return (
					<Invitee
						key={index}
						name={singleInvitee.name}
						isEditing={singleInvitee.isEditing}
						onEdit={function () {
							props.onEdit(singleInvitee.id);
						}}
						onRemove={function () {
							props.onRemove(singleInvitee.id);
						}}
						onChange={function (newName) {
							props.onChange(newName, singleInvitee.id);
						}}
						confirmed={singleInvitee.confirmed}
						onConfirmChange={function () {
							props.onConfirmChange(singleInvitee.id);
						}}
					/>
				);
			})}
		</ul>
	);
}

Invitees.propTypes = {
	Invitees: PropTypes.array.isRequired,
	isFiltered: PropTypes.bool.isRequired,
	input: PropTypes.string.isRequired,
	onEdit: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onConfirmChange: PropTypes.func.isRequired,
};

export default Invitees;
