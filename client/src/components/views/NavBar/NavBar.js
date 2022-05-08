import React, { useState } from "react";
import './NavBars.css';
import axios from "axios";
import { useSelector } from "react-redux";
import { USER_SERVER } from "../../../Config";

function Navbar() {
  const user = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const logoutHandler = (props) => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        window.localStorage.removeItem("userId");
        window.localStorage.removeItem("remember");
        
      } else {
        alert("Log Out Failed");
      }
    });
  }
 
  if (user.userData && !user.userData.isAuth) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <i className="fas fa-tree" /> MoviesFun
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                style={{ paddingTop: 14}}
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/#ltst">
                    Latest Movies
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                   
                    href="/#mpm"
                  >
                    Most Popular Movies
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    
                    href="/"
                  >
                  Search Movies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" target="_blank" href="https://www.imdb.com/list/ls068452027/?msclkid=a1662663ce9b11ec97057089b510fa72">
                    Sci-Fi Horror Movies   <i class="fa-solid fa-up-right-from-square"></i>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" target="_blank" href="https://www.imdb.com/list/ls501335873/">
                    Thriller Horror Movies   <i class="fa-solid fa-up-right-from-square"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                style={{ paddingTop: 14 }}
                href="/favorites"
                id="navbarDropdown"
                role="button"
                target="_blank"
                aria-expanded="false"
              >
                Watching List
              </a>
              
            </li>
            <li className="nav-item" id="ri">
              <a
                className="nav-link active "
                href="https://www.instagram.com/ayushman__077/ "
                target="_blank"
                style={{ paddingBottom: 0, paddingTop: 11 }}
              >
                <i className="fab fa-instagram fa-2x " />
              </a>
            </li>
            <li className="nav-item" id="ri">
              <a
                className="nav-link active "
                href="https://www.linkedin.com/in/ayushmantripathi7724 "
                target="_blank"
                style={{ paddingBottom: 0, paddingTop: 11 }}
              >
                <i className="fab fa-linkedin fa-2x " />
              </a>
            </li>
            <li className="nav-item" id="ri">
              <a
                className="nav-link active"
                href="https://open.spotify.com/user/elm174o588eco2qu6mwk79v7m?si=2fb907dea3b14bf1 "
                target="_blank "
                style={{ paddingBottom: 0, paddingTop: 11 }}
              >
                <i className="fab fa-spotify fa-2x " />
              </a>
            </li>
            <li className="nav-item" id="ri">
              <a
                className="nav-link active"
                href="https://github.com/Ayushmanwebdeveloper "
                target="_blank"
                style={{ paddingBottom: 0, paddingTop: 11 }}
              >
                <i className="fab fa-github fa-2x " />
              </a>
            </li>
            <li className="nav-item px-auto" id="ri" style={{ paddingTop: 4 }}>
              <a className="nav-link active" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item px-auto" id="ri" style={{ paddingTop: 4 }}>
              <a className="nav-link active" href="/login">
                Log In
              </a>
            </li>
            {/* <li class="nav-item " id="ri ">
            <a class="nav-link active " href="# "><i class="fab fa-facebook-square fa-2x "></i></a>
          </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="fas fa-tree" /> MoviesFun
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  style={{ paddingTop: 14 }}
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/#ltst">
                      Latest Movies
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"

                      href="/#mpm"
                    >
                      Most Popular Movies
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"

                      href="/"
                    >
                      Search Movies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" target="_blank" href="https://www.imdb.com/list/ls068452027/?msclkid=a1662663ce9b11ec97057089b510fa72">
                      Sci-Fi Horror Movies   <i class="fa-solid fa-up-right-from-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" target="_blank" href="https://www.imdb.com/list/ls501335873/">
                      Thriller Horror Movies   <i class="fa-solid fa-up-right-from-square"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ paddingTop: 14 }}
                  href="/favorites"
                  id="navbarDropdown"
                  role="button"
                  target="_blank"
                  aria-expanded="false"
                >
                  Watching List
                </a>

              </li>
              <li className="nav-item" id="ri">
                <a
                  className="nav-link active "
                  href="https://www.instagram.com/ayushman__077/ "
                  target="_blank"
                  style={{ paddingBottom: 0, paddingTop: 11 }}
                >
                  <i className="fab fa-instagram fa-2x " />
                </a>
              </li>
              <li className="nav-item" id="ri">
                <a
                  className="nav-link active "
                  href="https://www.linkedin.com/in/ayushmantripathi7724 "
                  target="_blank"
                  style={{ paddingBottom: 0, paddingTop: 11 }}
                >
                  <i className="fab fa-linkedin fa-2x " />
                </a>
              </li>
              <li className="nav-item" id="ri">
                <a
                  className="nav-link active"
                  href="https://open.spotify.com/user/elm174o588eco2qu6mwk79v7m?si=2fb907dea3b14bf1 "
                  target="_blank "
                  style={{ paddingBottom: 0, paddingTop: 11 }}
                >
                  <i className="fab fa-spotify fa-2x " />
                </a>
              </li>
              <li className="nav-item" id="ri">
                <a
                  className="nav-link active"
                  href="https://github.com/Ayushmanwebdeveloper "
                  target="_blank"
                  style={{ paddingBottom: 0, paddingTop: 11 }}
                >
                  <i className="fab fa-github fa-2x " />
                </a>
              </li>
              <li className="nav-item px-auto" id="ri" style={{ paddingTop: 4 }}>
                <a className="nav-link active" href="/favorites">
                  Account
                </a>
              </li>
              <li className="nav-item px-auto" key="logout" id="ri" style={{ paddingTop: 4 }}>
                <a className="nav-link active" onClick={logoutHandler} href="/">
                  Log Out
                </a>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
