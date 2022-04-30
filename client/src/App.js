import "./App.css";
import HomePage from "./component/HomePage";
import ProjectDetail from "./component/ProjectDetail";
import DonateStatus from "./component/DonateStatus";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNewProject from "./component/AddNewProject";
import NavBar from "./component/NavBar";
import { VscGithubInverted } from "react-icons/vsc";
import TimeLine from "./component/TimeLine";
import BCtest from "./component/BCtest";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <body className="body">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/detail/:no" element={<ProjectDetail />} />
          <Route exact path="/t" element={<TimeLine />} />
          <Route exact path="/manager" element={<AddNewProject />} />
          <Route exact path="/detail/:no/status" element={<DonateStatus />} />
          <Route exact path="/test" element={<BCtest />} />
        </Routes>
      </body>
      <footer className="footer">
        <div className="footer-bottom">
          <div className="footer-content">
            <h3>project title</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              iLorem Ipsum is simply dummy text of the printing and typesetting
              iLorem Ipsum is simply dummy text of the printing and typesetting
              i
            </p>
            <ul className="socials">
              <li>
                <a href="https://github.com/SO-TY">
                  <VscGithubInverted className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
