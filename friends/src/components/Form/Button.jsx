import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
	const { buttonText, onclick, type } = props;

	return (
		<button type={type} onClick={onclick}>
			{buttonText}
		</button>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onclick: PropTypes.func.isRequired,
	type: PropTypes.string
};

Button.defaultProps = {
	type: 'button'
};
