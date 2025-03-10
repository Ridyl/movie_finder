import { useState, useEffect } from 'react';

export default function useMediaQuery() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	let device =
		width <= 480
			? 'mobile'
			: width > 480 && width <= 1024
			? 'tablet'
			: width > 1024
			? 'desktop'
			: 'loading';
	return device;
}
