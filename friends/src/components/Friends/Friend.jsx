import React from 'react';
import PropTypes from 'prop-types';

export const Friend = props => {
	const { name, age, email } = props;

	return (
		<div>
			<header>
				<h3>{name}</h3>
			</header>
			<div>
				<p>{age}</p>
				<p>{email}</p>
			</div>
		</div>
	);
};

Friend.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	email: PropTypes.string.isRequired
};
