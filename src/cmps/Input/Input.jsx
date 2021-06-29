import React, { useRef, Fragment } from 'react';
import './Input.scss';

export const Input = ({ type = 'text', labelText, ...props }) => {
	const id = useRef(uniqueId());

	const inputType = () => {
		if (type === 'textarea') return <textarea id={id.current} {...props} />;
		else if (type === 'text') return <input id={id.current} {...props} />;
		else if (type === 'number')
			return <input type='number' id={id.current} {...props} />;
	};

	return (
		<Fragment>
			<label htmlFor={id.current}>{labelText}</label>
			{inputType()}
		</Fragment>
	);
};

function uniqueId() {
	const dateString = Date.now().toString(36);
	const randomness = Math.random().toString(36).substr(2);
	return dateString + randomness;
}
