import "./App.css";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import { useState } from "react";

function App() {
  const [view, setView] = useState("profile");

  return (
    <div className="App">
      <Header view={view} setView={setView} />

      {view === "profile" && <Profile view={view} setView={setView} />}
      {view === "resume" && <Resume />}
      {view === "project" && <Projects />}
      {view === "contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
