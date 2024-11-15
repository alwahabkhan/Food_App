import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index.jsx";
import StoreContextProvider from "./context/StroreContext/Index.jsx";
import Cart from "./Pages/Cart/Index.jsx";
import PlaceOrder from "./Pages/PlaceOrder/Index.jsx";
import VerifyOrder from "./Pages/Verify/Index.jsx";
import MyOrders from "./Pages/MyOrders/Index.jsx";

function App() {
  return (
    <BrowserRouter>
      <StoreContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
          <Route path="/verify" element={<VerifyOrder />}></Route>
          <Route path="/myorders" element={<MyOrders />}></Route>
        </Routes>
      </StoreContextProvider>
    </BrowserRouter>
  );
}

export default App;
