import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      {isHomePage ? null : <Footer />}
    </div>
  );
};

export default App;
