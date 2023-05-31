import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Design from "./components/Design";
import WebDesign from "./components/WebDesign";
import InteriorDesign from "./components/InteriorDesign";

const App = () => {
  return (
    <Router>
      <div className="cont">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/web_design" element={<WebDesign />} />
          <Route path="/interior_design" element={<InteriorDesign />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
