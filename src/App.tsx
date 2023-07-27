import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
