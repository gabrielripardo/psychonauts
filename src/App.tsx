import Header from "./pages/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
