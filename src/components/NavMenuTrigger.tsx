import { cn } from '../utilities/classNameHelper';
import cssStyles from '../styles/navMenuTrigger.module.css';
import { forwardRef } from 'react';

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
			className={cn(
				`relative h-8 w-8 text-[#030712] ${cssStyles.triggerButton}`,
				{
					'text-gray-300': darkMode
				}
			)}
			aria-labelledby='Navigation Menu trigger'
			ref={forwardedRef}
			type='button'
			{...props}
		/>
	);
});
