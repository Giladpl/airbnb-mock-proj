import { useEffect, useRef } from 'react';
import './ButtonGradientTracking.scss';

export const ButtonGradientTracking = (props) => {
	const btnRef = useRef(null);

	useEffect(() => {
		if (btnRef) {
			btnRef.current.addEventListener('mousemove', gradientChange);
		}
		// return () => btnRef.current.removeEventListener('mousemove', gradientChange);
	}, [btnRef]);

	const gradientChange = (e) => {
		var x =
			e.pageX -
			btnRef.current.offsetLeft -
			btnRef.current.offsetParent.offsetLeft;
		var y =
			e.pageY -
			btnRef.current.offsetTop -
			btnRef.current.offsetParent.offsetTop;
            
		btnRef.current.style.setProperty('--x', x + 'px');
		btnRef.current.style.setProperty('--y', y + 'px');
	};

	return (
		<button ref={btnRef} className='button-cursor-gradient-tracking'>
			<span>Check availability</span>
		</button>
	);
};
