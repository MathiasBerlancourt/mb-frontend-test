import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdDetailsPage from "./pages/AdDetailsPage";
import HomePage from "./pages/HomePage";
import { useAppRoot } from "./logics";
import "./styles/globals.scss";
import AdsContext from "./context";

function App() {
  const { ads, setAds, selectedAd, setSelectedAd, isLoading, setIsLoading } =
    useAppRoot();

  return (
    <Router>
      <AdsContext.Provider
        value={{
          ads,
          setAds,
          selectedAd,
          setSelectedAd,
          isLoading,
          setIsLoading,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ad/:adId" element={<AdDetailsPage />} />
        </Routes>
      </AdsContext.Provider>
    </Router>
  );
}

export default App;
