import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage/Index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
