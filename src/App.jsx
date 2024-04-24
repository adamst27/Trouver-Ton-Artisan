import "./App.scss";

import { Route, Routes } from "react-router";
import Home from "./components/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Navbar from "./components/Navbar";
import Artisans from "./components/Artisans";
import FicheArtisans from "./components/FicheArtisans";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-artisans" element={<Artisans />} />
        <Route path="/nos-artisans/:id" element={<FicheArtisans />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
library.add(fab, fas, far);
