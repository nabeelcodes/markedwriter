import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

/* App wide state to monitor dark mode */
export const darkModeAtom = atomWithStorage<boolean>('darkMode', false);

/* State for open/close of RadixDialog */
export const dialogStateAtom = atom<boolean>(false);

/* App wide state to contain and monitor markdown data */
type appDataType = {
	id: string;
	title: string;
	content: string;
	date: string;
}[];
export const appDataAtom = atomWithStorage<appDataType>('appData', []);
