import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Form/Button';

export const Friend = props => {
	const { id, name, age, email, deleteFriend } = props;

	const handleDelete = () => {
		deleteFriend(id);
	};

	return (
		<div>
			<header>
				<h3>{name}</h3>
			</header>
			<div>
				<p>{age}</p>
				<p>{email}</p>
			</div>
			<div>
				<Button buttonText="delete" onclick={handleDelete} type="button" />
			</div>
		</div>
	);
};

Friend.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	email: PropTypes.string.isRequired,
	deleteFriend: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired
};
