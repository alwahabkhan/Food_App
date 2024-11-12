import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage/Index.jsx";
import Apppage from "./pages/Addpage/Index.jsx";
import Listpage from "./pages/Listpage/Index.jsx";
import Orderpage from "./pages/Orderpage/Index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/add" element={<Apppage />}></Route>
        <Route path="/list" element={<Listpage />}></Route>
        <Route path="/order" element={<Orderpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
