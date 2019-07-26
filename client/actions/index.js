import axios from 'axios';

const rootUrl = 'http://localhost:3000/api/v1';

const actions = {
	searchTwitts: (data, cb) => dispatch => {
		axios.post(rootUrl, {search: data})
		.then(res => {
			if (res.status === 200) {
				dispatch({
					type: 'SEARCH_TWITTS_SUCCESS',
					twitts: res.data.tweets.statuses
				})
				cb(true)
			} else {
				cb(false, 'No matches found')
			}
		})
		.catch(error => console.log(`Error: ${error}`))
	},
	newTwitts: (socket) => dispatch => {
		socket.on('notification', (notification) => {
			dispatch({
				type: 'NEW_TWEETS_GET_SUCCESS',
				notification
			})
		})
	},
	clearNotifications: () => dispatch => {
		dispatch({
			type: 'CLEAR_NOTIFICATION_SUCCESS'
		})
	}
}

export default actions;