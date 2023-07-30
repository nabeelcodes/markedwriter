import { atomWithStorage } from 'jotai/utils';

// App wide state to monitor dark mode
export const darkModeAtom = atomWithStorage<boolean>('darkMode', false);

// App wide state to contain and monitor markdown data
type appDataType = {
	id: string;
	title: string;
	content: string;
	date: string;
}[];
export const appDataAtom = atomWithStorage<appDataType>('appData', []);
