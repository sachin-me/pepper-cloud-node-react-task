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
				<p>{twitt.text}</p>
			</div>
		);
	}
}

export default SingleTwitt;