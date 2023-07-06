import { WindowWidthOverlay } from './components/WindowWidthOverlay';

export default function App() {
	return (
		<>
			<WindowWidthOverlay />

			<h1 className='p-4 pb-0 text-center font-mabryProBold text-4xl text-slate-700'>
				A demo for MarkWriter
			</h1>

			<p className='px-6 py-4 font-mono text-lg text-slate-500'>
				# A demo of `react-markdown` :heart: :+1: :rocket:
				<br />
				<br />
				`react-markdown` is a markdown component for React. 👉 Changes are
				re-rendered as you type. 👈 Try writing some markdown on the left.
			</p>
		</>
	);
}
