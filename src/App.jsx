import styles from "./style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Apply, Apply1, Apply2, Apply3, Apply4, Apply5 } from "./components";
import Career from "./components/CareerNav";


const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Router basename="/Codefest-Academy">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/apply" element={< Apply/>} />
            <Route path="/apply-STEM" element={< Apply1/>} />
            <Route path="/apply-IT" element={< Apply2/>} />
            <Route path="/apply-IT-program" element={< Apply3/>} />
            <Route path="/apply-diploma" element={< Apply4/>} />
            <Route path="/apply-CBT" element={< Apply5/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
