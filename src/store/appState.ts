import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

/* App wide localStorage-state to monitor dark mode 
for ONLY 2 COMPONENTS: 
	- For rendering AppLogo in Header.tsx
	- As an internal state for NavItemThemeToggle.tsx
*/
export const themeAtom = atomWithStorage<"light" | "dark">("theme", "light");

/* App wide state to contain and monitor markdown 
data */
export const appDataAtom = atomWithStorage<Post[]>("appData", []);

/* State for open/close of RadixDialog */
export const dialogStateAtom = atom<boolean>(false);

/* State for post style on landing page */
export const postStyleAtom = atom<"list" | "grid">("grid");

/* State to enable or disable Github Flavoured Markdown(GFM) */
export const GFMAtom = atom(true);

/* State to enable or disable Remark Rehype(RR) */
export const RRAtom = atom(true);

/* State to enable or disable Markdown-display pane */
export const visibilityAtom = atom({
  editingPaneVisibility: true,
  markdownPaneVisibility: true,
});
