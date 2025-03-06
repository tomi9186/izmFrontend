import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header = () => {

  const [username, setUsername] = useState(null);

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  }
    
  useEffect( () => {
    const user = localStorage.getItem('username');
    if(user)  setUsername(user);
  }, []);

  const location = useLocation();
  if(location.pathname === '/login' || location.pathname === '/register') return null;

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  }



    return(
        <header>
          <div className="container">

          <nav className="navbar navbar-expand-lg container">
          <Link to="/"><img src="img/logo.svg" alt="neki opis slike" height="52" /></Link>
            <button onClick={toggleMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={'collapse navbar-collapse ' + (menu ? 'show':'')} id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto nav-links d-flex justify-content-center align-items-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            {username ? (
            <button onClick={logout} className="btn">Welcome, {username}</button>
            ) : (
              <Link to="/login" className="btn d-none d-lg-inline-block">Prijava</Link>
            )}
          </nav>
          </div>
        </header>
    );
};

export default Header;