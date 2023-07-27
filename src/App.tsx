import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LayoutContainer } from './components/LayoutContainer';
import { LandingPage } from './pages/LandingPage';

const MarkdownEditor = () => {
	return <h1>Markdown Editor Page</h1>;
};

const NoMatch = () => {
	return <h1>404 Not Found</h1>;
};

export default function App() {
	return (
		<LayoutContainer>
			<Router>
				{/* <ul className='absolute left-1/2 top-4 space-x-2'>
					<li className='inline-block border-b-2 border-white font-mabryProBold text-2xl hover:border-black'>
						<Link to='/'>Home</Link>
					</li>
					<li className='inline-block border-b-2 border-white font-mabryProBold text-2xl hover:border-black'>
						<Link to='/editor'>Editor</Link>
					</li>
				</ul> */}

				<Routes>
					<Route
						path='/'
						element={<LandingPage />}
					/>
					<Route
						path='/editor'
						element={<MarkdownEditor />}
					/>
					<Route
						path='*'
						element={<NoMatch />}
					/>
				</Routes>
			</Router>
		</LayoutContainer>
	);
}
