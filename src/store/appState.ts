import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

/* App wide localStorage-state to monitor dark mode 
for ONLY 2 COMPONENTS: 
	- For rendering AppLogo in Header.tsx
	- As an internal state for NavItemThemeToggle.tsx
*/
const htmlTagCLasslist = document.documentElement.classList;
export const darkModeAtom = atomWithStorage<boolean>(
	'darkMode',
	htmlTagCLasslist.contains('dark')
);

/* State for open/close of RadixDialog */
export const dialogStateAtom = atom<boolean>(false);

/* App wide state to contain and monitor markdown 
data */
type appDataType = {
	id: string;
	title: string;
	content: string;
	date: string;
}[];
export const appDataAtom = atomWithStorage<appDataType>('appData', []);
