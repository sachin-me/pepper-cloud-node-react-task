import React from 'react';

const SingleNotification = (props) => {
	const { notification } = props;
	return (
		<div className="display-tweet-card">
			<div>
				<img src={notification.user.profile_image_url} alt=""/>
				<p className="card-user-name">{notification.user.name}</p>
				<a className="card-link" href={`https://twitter.com/${notification.user.screen_name}`}>{notification.user.screen_name}</a>
			</div>
			<p className="twitt-text">{notification.text}</p>
		</div>
	);
}

export default SingleNotification;