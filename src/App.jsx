import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ToneFinderPage from "./pages/ToneFinderPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tone-finder" element={<ToneFinderPage />} />
    </Routes>
  );
}

export default App;
