import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutPage, ProjectPage, WorksPage } from "./pages/inedx";
import { SideButton } from "components";
import "./static/global.css";

function App() {
  return (
    <Router>
      <div className="container-fluid main">
        <div className="row main align-items-center justify-content-evenly">
          <SideButton />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/works" element={<WorksPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
