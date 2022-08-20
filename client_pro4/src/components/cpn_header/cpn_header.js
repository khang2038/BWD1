import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import "./style_header.css";
import AppContext from "../AppContext";

function sleep(s) {
    return new Promise(function (resolve) {
      setTimeout(resolve, s);
    });
  }

const body = document.querySelector("body");

export default function Cpn_header() {
  const {state_user} = useContext(AppContext); 
  function handle_light_dark() {
    body.classList.toggle("dark");
    var logo1 = document.querySelector(".mobile_nav .logo1");
    var logo2 = document.querySelector(".mobile_nav .logo2");
    if (body.classList.contains("dark")) {
      Object.assign(logo1.style, {
        display: "none",
      });
      Object.assign(logo2.style, {
        display: "block",
      });

      // modeText.innerText="Light Mode";
    } else {
      Object.assign(logo2.style, {
        display: "none",
      });
      Object.assign(logo1.style, {
        display: "block",
      });
      // modeText.innerText="Dark Mode";
    }
  }

  function check_user_null(user) {
    if (user==null) {
      return (
        <div class="the_right_nav">
            <div class="login_nav">
                <i class="fa-solid fa-right-to-bracket icon"></i>
                <a href="Login" style={{textDecoration: 'none'}}>Login</a>
            </div> 
        </div> 
      )
    }
    else {
      return (
        <div className="the_right_nav" onClick={handle_user}>
            <img id="img_login" src={user.temp.img_author} alt="" />
            <p>
              {user.temp.name_author}
              <i style={{marginLeft : '10px'}} className="fa-solid fa-sort-down icon"></i>
            </p>
            <ul className="user-drop">
              <i className="fa-solid fa-xmark project_close ">
                {" "}
              </i>
              <div className="menu_drop">
                <li>
                  <Link to="/profile"> Profile </Link>
                </li>
                <li>
                  <Link to="/wallet"> Wallet </Link>
                </li>
                <li>
                  <Link to="/add_project"> Add new project </Link>
                </li>
                <li>
                  <a href="homepage"> Logout </a>
                </li>
              </div>
            </ul>
        </div>
      )
    }
  }

  /* =============loadding================= */
  /*-----coi lại promise-------*/
  function handle_user() {
    var update1 = document.querySelector(`.user-drop`);
    
    if (update1.classList.contains('open1')){
        update1.classList.remove('open1');
    } 
    else {
        update1.classList.add('open1');
    }
    
  }

  function onclick__home() {
    var ctn__loading__home = document.querySelector(".ctn__loading__body");
    var homepage = document.querySelector("#homepage");
    sleep(0)
      .then(function () {
        ctn__loading__home.classList.add("open__load");
        return sleep(500);
      })
      .then(function () {
        ctn__loading__home.classList.remove("open__load");
        homepage.href = "homepage";
        // homepage.click();
      });
  }

  function onclick__product() {
    var ctn__loading__home = document.querySelector(".ctn__loading__body");
    var product = document.querySelector("#product");
    sleep(0)
      .then(function () {
        ctn__loading__home.classList.add("open__load");
        return sleep(500);
      })
      .then(function () {
        ctn__loading__home.classList.remove("open__load");
        product.href = "Product";
        // product.click();
      });
  }

  function onclick__projects() {
    var ctn__loading__home = document.querySelector(".ctn__loading__body");
    var projects = document.querySelector("#projects");
    sleep(0)
      .then(function () {
        ctn__loading__home.classList.add("open__load");
        return sleep(500);
      })
      .then(function () {
        ctn__loading__home.classList.remove("open__load");
        projects.href = "detail";
        // projects.click();
      });
  }

  return (
    <div style={{position : 'absolute', zIndex : '3'}}>
      <header>
        <div className="nav_pc">
          <div className="the_left_nav">
          <div class="logo_header">
              <img class="logo1" src={require('../../public/img/img_logo/logo.jpg')} alt=""/>
              <img class="logo2" src={require('../../public/img/img_logo/logo2.jpg')} alt="" style={{display: 'none'}}/>
          </div>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass icon"></i>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="the_center_nav">
            <Link
              id="homepage"
              className="fa-solid fa-house icon 1"
              to="/homepage"
              onClick={onclick__home}
            ></Link>
            {
              state_user.user != null 
              ?
              <Link
                id="product"
                className="fa-solid fa-earth-americas icon 2"
                to="/product"
                onClick={onclick__product}
              ></Link>
              :
              <Link
                id="product"
                className="fa-solid fa-earth-americas icon 2"
                to="/login"
                // onClick={onclick__product}
              ></Link>
            }
            {
              state_user.user != null 
              ?
              <Link
                id="projects"
                className="fa-solid fa-circle-dollar-to-slot icon 3"
                to="/details"
                onClick={onclick__projects}
              ></Link>
              : 
              <Link 
                id="projects"
                className="fa-solid fa-circle-dollar-to-slot icon 3"
                to="/login"
                // onClick={onclick__projects}
              />
            }
          </div>

          {
            check_user_null(state_user.user)
          }


        </div>
        <div className="mobile_nav">
          <div className="navtren">
            <div class="logo_header">
                <img class="logo1" src={require('../../public/img/img_logo/logo.jpg')} alt=""/>
                <img class="logo2" src={require('../../public/img/img_logo/logo2.jpg')} alt="" style={{display: 'none'}}/>
            </div>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass icon tk"></i>
            </div>
          </div>
          <div className="navduoi">
            <div className="the_center_nav">
              <Link to={'homepage'} id="homepage_mobile" className="fa-solid fa-house icon 1"></Link>
              <Link to={'product'} id="product_mobile" className="fa-brands fa-atlassian icon 2"></Link>
              <Link to={'details'}
                id="projects_mobile"
                className="fa-solid fa-earth-americas icon 3"
              ></Link>
            </div>
            <label htmlFor="nav-mobile-input" className="nav_bars-btn">
              <i className="fa-solid fa-bars"></i>
            </label>
          </div>
        </div>

        <input
          type="checkbox"
          name=""
          hidden="true"
          className="nav__input"
          id="nav-mobile-input"
        />
        <label htmlFor="nav-mobile-input" className="nav_overlay"></label>
        <ul className="mobile_nav_drop">
          <label htmlFor="nav-mobile-input">
            <i className="fa-solid fa-xmark nav_mobile_close"></i>{" "}
          </label>
          <div className="menu_mobile">
            <a href="Game">
              {" "}
              <li className="menu-game">
                <i className="fa-solid fa-gamepad icon"></i>
                <span>Game</span>
              </li>
            </a>
            <a href="App">
              <li className="menu-app">
                <i className="fa-brands fa-app-store icon"></i>
                <span>App</span>
              </li>
            </a>
            <a href="Ai.html">
              {" "}
              <li className="menu-AI">
                <i className="fa-solid fa-robot icon"></i>
                <span>AI</span>
              </li>
            </a>
            <a href="costume">
              <li className="menu-costume">
                <i className="fa-solid fa-shirt icon"></i>
                <span>Costume</span>
              </li>
            </a>
            <a href="ecommerce">
              {" "}
              <li className="menu-ecommerce">
                <i className="fa-brands fa-shopify icon"></i>
                <span>Ecommerce</span>
              </li>
            </a>
          </div>
          <li className="mode-mobile">
            <div className="moon-sun">
              <i className="fa-solid fa-moon moon "></i>
              <i className="fa-solid fa-sun sun"></i>
            </div>
            <span className="mode-text">Dark Mode</span>
            <div className="toggle-switch" onClick={handle_light_dark}>
              <span className="switch"></span>
            </div>
          </li>
        </ul>
      </header>

      <div className="ctn__loading__body">
        <div className="ctn__loading">
          <div className="ctn__loading__content"></div>
        </div>
      </div>
    </div>
  );
}
