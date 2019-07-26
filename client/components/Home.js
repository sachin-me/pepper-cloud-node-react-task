import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Link to='/'>
			<i className="fas fa-home"></i>
		</Link>
	);
}

export default Home;