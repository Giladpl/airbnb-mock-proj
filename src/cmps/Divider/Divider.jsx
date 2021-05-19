import './Divider.scss';

export const Divider = ({ children, lineStyle }) => {
	return (
		<div className='container'>
			<div className='border' style={lineStyle} />
			{children & <span className='content'>{children}</span>}
			<div className='border' />
		</div>
	);
};
