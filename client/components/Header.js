import React, { Component } from 'react';
import Search from './Search';
import NotificationIcon from './NotificationIcon';

const Header = () => {
	return (
		<div className="header">
			<NotificationIcon />
			<Search />
		</div>
	);
}

export default Header;