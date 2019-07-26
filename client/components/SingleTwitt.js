import React, { Component } from 'react';

class SingleTwitt extends Component {
	render() {
		const { twitt } = this.props;
		return (
			<div>
				<img src={twitt.user.profile_image_url} alt=""/>
				<p>{twitt.user.name}</p>
				<a href={`https://twitter.com/${twitt.user.screen_name}`}>{twitt.user.screen_name}</a>
				<p>{twitt.text}</p>
			</div>
		);
	}
}

export default SingleTwitt;