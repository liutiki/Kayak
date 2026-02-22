import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TakeWith } from "./Pages/TakeWith/TakeWith";
import { Home } from "./Pages/HomePage/Home";
import { Birthday } from "./Pages/Birthday/Birthday";
import { TwoDayKayak } from "./Pages/TwoDayKayak/TwoDayKayak";
import { Corporate } from "./Pages/Corporate/Corporate";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <Router>
          <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/TakeWith" element={<TakeWith />} /> 
           <Route path="/birthday" element={<Birthday />} /> 
           <Route path="/two-days" element={<TwoDayKayak />} />
           <Route path="/corporate" element={<Corporate />} />
        </Routes>
    </Router>
  );
};
