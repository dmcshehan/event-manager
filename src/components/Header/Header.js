import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import classNames from './Header.module.css';

function Header(props) {
	return (
		<header>
			<h1>RSVP</h1>
			<p>App Made By Shehan</p>
			<SearchForm input={props.input} onTypeChange={props.onTypeChange} onSubmit={props.onSubmit} />
		</header>
	);
}

export default Header;
