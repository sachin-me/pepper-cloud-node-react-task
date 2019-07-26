const initialState = {
	searchedTwitts: [],
	newTweets: []
}

function twittReducer(state = initialState, action) {
  switch (action.type) {
		
		case 'SEARCH_TWITTS_SUCCESS': {
			return {
				...state,
				searchedTwitts: action.twitts
			}
		}

		case 'NEW_TWEETS_GET_SUCCESS': {
			console.log(action.notification, 'in reducer');
			return {
				...state,
				newTweets: [action.notification, ...state.newTweets]
			}
		}

		case'CLEAR_NOTIFICATION_SUCCESS': {
			return {
				...state,
				searchedTwitts: [...state.newTweets, ...state.searchedTwitts],
				newTweets: []
			}
		}
		
    default:
      return state;
  }
}

export default twittReducer;