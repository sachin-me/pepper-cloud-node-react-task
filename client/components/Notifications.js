import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleNotification from './SingleNotification';
import actions from '../actions';

class Notifications extends Component {
	
	render() {
		const { notifications } = this.props;
		return (
			<div>
				{
					notifications
					? 
					notifications.map((notification, index) => {
						return (
							<SingleNotification notification={notification} key={index} />
						)
					})
					:
					'Loading...'
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		notifications: state.twittReducer.newTweets
	}
}

export default connect(mapStateToProps)(Notifications);