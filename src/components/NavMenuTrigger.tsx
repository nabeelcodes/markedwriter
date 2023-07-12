import { forwardRef } from 'react';
import { cn } from '../utilities/classNameHelper';
import cssStyles from '../styles/navMenuTrigger.module.css';

type navMenuTriggerProps = {
	/* Received props: `darktheme` must be a string value as the DOM won't allow non-string(boolean) props to be passed on a DOM-Element */
	darktheme: string;
};

export const NavMenuTrigger = forwardRef<
	HTMLButtonElement,
	navMenuTriggerProps
>((props, forwardedRef) => {
	/* Since `props.darktheme` is a string value, we require a boolean value: `darkMode` to be defined on the basis of `props.darktheme`. This is used to trigger dark-mode for `cn()` in `button className` */
	let darkMode = String(props.darktheme)?.toLowerCase() === 'true';
	darkMode = !(String(props.darktheme)?.toLowerCase() === 'false');

	return (
		<button
			className={cssStyles.triggerButton}
			aria-labelledby='Navigation Menu trigger'
			ref={forwardedRef}
			type='button'
			{...props}
		>
			<div className={cssStyles.hamburger}>
				<span
					className={cn(`bg-[#030712] ${cssStyles.line}`, {
						'bg-gray-300': darkMode
					})}
				></span>
				<span
					className={cn(`bg-[#030712] ${cssStyles.line}`, {
						'bg-gray-300': darkMode
					})}
				></span>
				<span
					className={cn(`bg-[#030712] ${cssStyles.line}`, {
						'bg-gray-300': darkMode
					})}
				></span>
			</div>
		</button>
	);
});
