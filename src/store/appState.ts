import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

/* App wide state to monitor dark mode */
export const darkModeAtom = atomWithStorage<boolean>('darkMode', false);

/* App wide state to contain and monitor markdown data */
type appDataType = {
	id: string;
	title: string | undefined;
	content: string;
	date: string;
}[];
export const appDataAtom = atomWithStorage<appDataType>('appData', []);

/* Button enabled/disabled state for `src/components/TitleEditButton` */
export const buttonStateAtom = atom<boolean>(true);
