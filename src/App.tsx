import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCss } from "./styles";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
