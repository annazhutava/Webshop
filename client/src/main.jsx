import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Product from "./routes/Product/Product.jsx";
import NotFound from "./routes/NotFound/NotFound.jsx";
import Products from "./routes/Products/Products.jsx";
import About from "./routes/About/About.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import Cart from "./routes/Cart/Cart.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="products/:category" element={<Products />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
