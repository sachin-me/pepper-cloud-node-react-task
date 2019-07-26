import React, { Component } from 'react';
import Search from './Search';
import NotificationIcon from './NotificationIcon';

const Header = () => {
	return (
		<div>
			<NotificationIcon />
			<Search />
		</div>
	);
}

export default Header;