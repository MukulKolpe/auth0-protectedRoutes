import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ApplyOrganizer from "./pages/ApplyOrganizer/ApplyOrganizer";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/apply-organizer" element={<ApplyOrganizer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
