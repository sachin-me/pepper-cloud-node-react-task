import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import actions from '../actions';
import DisplayTwitts from './DisplayTwitts';
import Spinner from '../containers/Loader';

const socket = io();

class Search extends Component {

	state = {
		search: '',
		isLoading: false,
		error: ''
	}
	
	handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			isLoading: true
		})
		const { search } = this.state;
		if (!search) return;
		this.props.dispatch(actions.searchTwitts(search, (success, error) => {
			setTimeout(() => {
				if (success) {
					this.setState({
						search: '',
						isLoading: false
					})
					this.props.dispatch(actions.newTwitts(socket))
				} else {
					this.setState({
						isLoading: true,
						error: error
					})
				}
			}, 10000)
		}))
		socket.emit('notification', search);
	}

	render() {
		const { isLoading } = this.state;
		return (
			<div className="search-wrapper">
				<form action="" method="post" onSubmit={this.handleSubmit} >
					<input type="search" name="search" id="" onChange={this.handleChange} />
					<input type="submit" value="Search"/>
				</form>
				<div>
					{
						isLoading ? <Spinner /> : <DisplayTwitts />
					}
				</div>
			</div>
		);
	}
}

export default connect(null)(Search);