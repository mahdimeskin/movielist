import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/home";
import Favorite from "./pages/favorites";
import NavBar from "./components/navBar"
import { MovieProvider } from "./contexts/movieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className="mainContent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;
