import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Landing } from "./pages/landing";
import { AboutMe } from "./pages/aboutMe";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projectList";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Landing />}></Route>

        <Route
          path='/about-me'
          element={<AboutMe />}></Route>

        <Route
          path='/projects'
          element={<Projects />}></Route>

        <Route
          path='/contact-me'
          element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
