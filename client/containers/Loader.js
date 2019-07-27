import React from 'react';
import Loader from 'react-loader-spinner'

const Spinner = () => {
	return (
		<div className="loader-wrapper">
			<Loader type="Audio" color="rgba(29,161,242,1.00)" height={50} width={100} />
		</div>
	)
}

export default Spinner;