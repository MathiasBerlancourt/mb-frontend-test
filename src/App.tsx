import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import AdDetailsPage from "./pages/AdDetailsPage";
import HomePage from "./pages/HomePage";
import { useAppRoot } from "./logics";
import "./styles/globals.scss";

function App() {
  const { ads, setAds, selectedAd, setSelectedAd } = useAppRoot();

  return (
    <Router>
      <Header setAds={setAds} />
      <Routes>
        <Route
          path="/"
          element={<HomePage ads={ads} setSelectedAd={setSelectedAd} />}
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
