import Header from "./pages/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
