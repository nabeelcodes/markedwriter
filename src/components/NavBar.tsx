import React from 'react';
import { NavMenuMobile } from './NavMenuMobile';
import { NavMenuDesktop } from './NavMenuDesktop';

export const NavBar = React.memo(() => {
	return (
		<>
			<NavMenuMobile />

			<NavMenuDesktop />
		</>
	);
});
