import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Main = () => {

    
  const location = useLocation();

  useEffect(() => {
    const routeTitle = getTitleFromLocation(location.pathname);
    document.title = `Chef's Toybox - ${routeTitle}`;
  }, [location]);

  // Helper function to get the title based on the current route
  const getTitleFromLocation = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/blogs':
        return 'Blogs';
      case '/allToys':
        return 'All Cooking Toys';
      case '/myToys':
        return 'My Cooking Toys';
      case '/addAToy':
        return 'Add a Cooking Toy';
      case '/login':
        return 'Login';
      case '/signUp':
        return 'Sign Up';
      default:
        return 'Not Found';
    }
  };

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;




