import React, { Component } from 'react';

class SingleTwitt extends Component {
	render() {
		const { twitt } = this.props;
		return (
			<div className="display-tweet-card">
				<div>
					<img src={twitt.user.profile_image_url} alt=""/>
					<p className="card-user-name">{twitt.user.name}</p>
					<a className="card-link" href={`https://twitter.com/${twitt.user.screen_name}`}>{twitt.user.screen_name}</a>
				</div>
				<p className="twitt-date">{showDate(twitt.created_at)}</p>
				<p className="twitt-text">{twitt.text}</p>
			</div>
		);
	}
}

function showDate(date) {
	let newD = new Date(date);
	let hours = newD.getHours();
	let minutes = newD.getMinutes();
	if ( hours < 10 ) {
		hours = `0${hours}`
	}
	if (minutes < 10) {
		minutes = `0${minutes}`
	}
	return newD.toDateString() + ", " + hours % 12 + ":" + minutes +  (hours > 12 ? ' PM' : ' AM')
}

export default SingleTwitt;