import React from 'react';
import classNames from './Filter.module.css';

function Filter(props) {
	return (
		<div>
			<h2>Invitees</h2>
			<label>
				<input type="checkbox" onChange={props.onFilter} /> Hide those who haven't responded
			</label>
		</div>
	);
}

export default Filter;
