import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleNotification from './SingleNotification';
import actions from '../actions';
import Spinner from '../containers/Loader';

class Notifications extends Component {
	
	render() {
		const { notifications } = this.props;
		return (
			<div className="display-tweet-wrapper">
				{
					notifications
					? 
					notifications.map((notification, index) => {
						return (
							<div key={index}>
								<SingleNotification notification={notification} />
							</div>
						)
					})
					:
					<Spinner />
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