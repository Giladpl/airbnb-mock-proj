import React from 'react';
import './GenericList.scss';

export const GenericList = ({
	CmpToRender,
	classNames,
	sectionClassName,
	items,
	headingText,
	headingLevel = 2,
	...props
}) => {
	const H = `h${headingLevel}`;
	return (
		<React.Fragment>
			<section className={sectionClassName}>
				{headingText && <H>{headingText}</H>}
				<ul className={classNames}>
					{items &&
						items.map((item, idx) => (
							<CmpToRender key={item._id ? item._id : idx} item={item} {...props} />
						))}
				</ul>
			</section>
		</React.Fragment>
	);
};
