import Navigations from "../components/navbar/Navbar";
//import { Outlet } from "react-router-dom";
import Home from "../Pages/home";
function RootLayout() {
  return (
    <>
      <Navigations />
      <Home />
      
    </>
  );
}

export default RootLayout;