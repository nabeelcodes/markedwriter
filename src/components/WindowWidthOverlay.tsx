import { useState } from 'react';
import { useEffect } from 'react';
import { CellPhoneSVG } from '../assets/CellPhoneSVG';
import { DesktopSVG } from '../assets/DesktopSVG';
import { TabletSVG } from '../assets/TabletSVG';

export const WindowWidthOverlay = () => {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className='fixed bottom-4 left-4 flex items-center rounded-md bg-slate-200 px-4 py-2 font-mono text-2xl font-bold text-gray-400'>
			{windowWidth <= 640 && <CellPhoneSVG />}
			{windowWidth > 640 && windowWidth <= 1024 && <TabletSVG />}
			{windowWidth > 1024 && <DesktopSVG />}
			<span>: {windowWidth} px</span>
		</div>
	);
};
