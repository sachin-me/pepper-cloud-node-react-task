import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Notifications from './Notifications';
import Header from './Header';
import Home from './Home';

class Routes extends Component {
	render() {
		return (
			<div>
				<Router>
					<div className="home-wrapper">
						<Home />
						<Route exact path='/' component={Header} />
					</div>
					<Route exact path='/notifications' component={Notifications} />
				</Router>
			</div>
		);
	}
}

export default Routes;