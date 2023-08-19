import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutContainer } from "./components/LayoutContainer";
import { LandingPage } from "./pages/LandingPage";
import { MarkdownEditor } from "./pages/MarkdownEditor";
import { NoMatch } from "./pages/NoMatch";

export default function App() {
  return (
    <Router>
      <LayoutContainer>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/:id" element={<MarkdownEditor />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </LayoutContainer>
    </Router>
  );
}
