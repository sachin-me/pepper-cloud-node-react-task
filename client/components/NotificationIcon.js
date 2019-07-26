import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NotificationIcon extends Component {
	
	render() {
		const { notifications } = this.props;
		return (
			<Link to='/notifications'>
				<i className="far fa-bell"></i>
				<span>{notifications ? notifications.length : ''}</span>
			</Link>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		notifications: state.twittReducer.newTweets
	}
}

export default connect(mapStateToProps)(NotificationIcon);