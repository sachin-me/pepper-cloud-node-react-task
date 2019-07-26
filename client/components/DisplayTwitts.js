import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleTwitt from './SingleTwitt';
import actions from '../actions';

class DisplayTwitts extends Component {
	state = {
		limit: 25
	}
	componentDidMount() {
		this.props.dispatch(actions.clearNotifications())
	}
	handleClick = () => {
		const { limit } = this.state;
		if (limit === 100) {
			this.setState({
				limit: limit - 25
			})
		} else {
			this.setState({
				limit: limit + 25
			})
		}
	}
	render() {
		const { twitts } = this.props;
		const { limit } = this.state;
		return (
			<>
				<div>
					{
						twitts.length !== 0 ? (
							<>
								{
									twitts.slice(0, limit).map((twitt) => {
										return (
											<div key={twitt.id}>
												<SingleTwitt twitt={twitt} />
											</div>
										)
									})
								}
								<div onClick={this.handleClick}>Load more...</div> 
							</>
						) : ''
					}
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		twitts: state.twittReducer.searchedTwitts 
	}
}

export default connect(mapStateToProps)(DisplayTwitts);