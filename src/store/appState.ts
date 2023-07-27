import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// App wide state to monitor dark mode
export const darkModeAtom = atomWithStorage('darkMode', false);

// App wide state to contain and monitor markdown data
export const appDataAtom = atomWithStorage('appData', ' ');

// App wide state to track if markdown any files exist?
export const noFilesAtom = atom(true);
