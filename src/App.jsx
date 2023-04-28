import styles from "./style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Apply } from "./components";
import Career from "./components/CareerNav";


const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Router>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/apply" element={< Apply/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
