import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutContainer } from "./components/LayoutContainer";
import { LandingPage } from "./pages/LandingPage";
import { MarkdownEditor } from "./pages/MarkdownEditor";

const NoMatch = () => {
  return <h1>404 Not Found</h1>;
};

export default function App() {
  return (
    <Router>
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<MarkdownEditor />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </LayoutContainer>
    </Router>
  );
}
