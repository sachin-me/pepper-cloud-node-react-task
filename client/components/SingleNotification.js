import React from 'react';

const SingleNotification = (props) => {
	const { notification } = props;
	return (
		<div className="display-tweet-card">
			<div>
				<img src={notification.user.profile_image_url} alt=""/>
				<p>{notification.user.name}</p>
				<a href={`https://twitter.com/${notification.user.screen_name}`}>{notification.user.screen_name}</a>
			</div>
			<p>{notification.text}</p>
		</div>
	);
}

export default SingleNotification;