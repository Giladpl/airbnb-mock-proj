import React from 'react';
import './GenericList.scss';

export const GenericList = ({
	CmpToRender,
	classNames,
	items,
	headingText,
	headingLevel = 2,
	...props
}) => {
	const H = `h${headingLevel}`;
	return (
		<React.Fragment>
			{headingText && <H>{headingText}</H>}
			<ul className={classNames}>
				{items &&
					items.map((item) => (
						<CmpToRender key={item._id} item={item} {...props} />
					))}
			</ul>
		</React.Fragment>
	);
};
