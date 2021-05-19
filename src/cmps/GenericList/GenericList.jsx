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
<<<<<<< HEAD
			{headingText && <H>{headingText}</H>}
			<ul className={classNames}>
				{items &&
					items.map((item) => (
						<CmpToRender key={item._id} item={item} {...props} />
					))}
			</ul>
=======
			<section className={sectionClassName}>
				{headingText && <H>{headingText}</H>}
				<ul className={classNames}>
					{items &&
						items.map((item, idx) => (
							<CmpToRender key={item._id ? item._id : idx} item={item} {...props} />
						))}
				</ul>
			</section>
>>>>>>> 0bd3ca7f6a0348cac72d1f9c527937c5e9542753
		</React.Fragment>
	);
};
