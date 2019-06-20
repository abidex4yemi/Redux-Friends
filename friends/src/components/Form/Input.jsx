import React from 'react';
import PropTypes from 'prop-types';

export const Input = props => {
	const { type, name, placeholder, value, inputChange, error } = props;

	const handleChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;

		inputChange(field, value);
	};

	return (
		<div>
			<input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} />
			<small>{error || ''}</small>
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	inputChange: PropTypes.func.isRequired,
	error: PropTypes.string
};

Input.defaultProps = {
	type: 'text'
};
