import React from 'react';
import PropTypes from 'prop-types';
import classNames from './InviteeName.module.css';

function InviteeName(props) {
	if (props.isEditing) {
		return <input type="text" value={props.children} onChange={props.onChange} />;
	} else {
		return <span>{props.children}</span>;
	}
}

InviteeName.propTypes = {
	onChange: PropTypes.func.isRequired,
	isEditing: PropTypes.bool.isRequired,
};

export default InviteeName;
