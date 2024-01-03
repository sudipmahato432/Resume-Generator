import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  let title = "Resume-Generator";
  let tabs = ["home", "about", "contact"];
  let colors = [
    "#403030",
    "#00010d",
    "#122031",
    "#262621",
    "#1b4140",
    "#0d2029",
    "#122640",
    "#0d1117",
    "#262626",
  ];
  return (
    <Router>
      <Header title={title} tabs={tabs} colors={colors} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
