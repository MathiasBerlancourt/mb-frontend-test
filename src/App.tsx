import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/HomePage/Header";
import AdDetailsPage from "./pages/AdDetailsPage";
import HomePage from "./pages/HomePage";
import { useAppRoot } from "./logics";
import "./styles/globals.scss";

function App() {
  const { ads, setAds, selectedAd, setSelectedAd } = useAppRoot();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage ads={ads} setSelectedAd={setSelectedAd} setAds={setAds} />
          }
        />
        <Route
          path="/ad/:adId"
          element={<AdDetailsPage selectedAd={selectedAd} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
