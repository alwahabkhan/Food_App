import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index.jsx";
import StoreContextProvider from "./context/StroreContext/Index.jsx";

function App() {
  return (
    <BrowserRouter>
      <StoreContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </StoreContextProvider>
    </BrowserRouter>
  );
}

export default App;
