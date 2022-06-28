import React from 'react';
import './style_header.css';

export default function Cpn_header() {
    return <header>
        <div class="nav_pc">
            <div class="the_left_nav">
            <div class="logo">
                <p>PRO4</p>
            </div>
            <div class="search">
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <input type="text" placeholder="Search..."/>
            </div> 
            </div>
            <div class="the_center_nav">
                <a id="homepage" class="fa-solid fa-house icon 1"></a>
                <a id="product" class="fa-solid fa-earth-americas icon 2"></a>
                <a id="projects" class="fa-solid fa-circle-dollar-to-slot icon 3"></a>
            </div>
             <div class="the_right_nav" onclick>
                <img id="img_login" src="{{users.img_author}}" alt=""/>
                <p>
                    <i class="fa-solid fa-sort-down icon"></i>
                </p>
                <ul class="user-drop">
                        <i class="fa-solid fa-xmark project_close " onclick> </i>
                        <div class="menu_drop">
                            <li>
                               <a href="/profile"> Profile </a> 
                            </li>
                            <li>
                                 <a href="#"> Statistic </a> 
                            </li>
                            <li>
                                <a href="/post_project_created"> Add new project </a>
                            </li>
                             <li>
                                <a href="home"> Logout </a>
                            </li>
                        </div> 
                    </ul>  
            </div>
        </div>     
        <div class="mobile_nav">
            <div class="navtren">
                    <div class="logo">
                        <p>PRO4</p>
                    </div>
                     <div class="search">
                        <i class="fa-solid fa-magnifying-glass icon tk"></i>
                    </div> 
             </div>   
             <div class="navduoi">
                  <div class="the_center_nav">
                    <a id="homepage_mobile" class="fa-solid fa-house icon 1"></a>
                    <a id="product_mobile" class="fa-brands fa-atlassian icon 2"></a>
                    <a id="projects_mobile" class="fa-solid fa-earth-americas icon 3"></a>
                 </div>
                <label for="nav-mobile-input" class="nav_bars-btn">
                    <i class="fa-solid fa-bars"></i>
                </label>

             </div>   
        </div>   
        <input type="checkbox" name="" hidden="true" class="nav__input" id="nav-mobile-input"/>
        <label for="nav-mobile-input"  class="nav_overlay"></label>
        <ul class="mobile_nav_drop">
           <label for="nav-mobile-input"><i class="fa-solid fa-xmark nav_mobile_close"></i> </label>
           <div class="menu_mobile">
               <a href="Game"> <li class="menu-game">
                    <i class="fa-solid fa-gamepad icon"></i>
                    <span>Game</span>
                </li>
                </a>
                <a href="App"><li class="menu-app">
                    <i class="fa-brands fa-app-store icon"></i>
                    <span>App</span>
                </li>
                </a>
               <a href="Ai.html"> <li class="menu-AI">
                    <i class="fa-solid fa-robot icon"></i>
                    <span>AI</span>
                </li>
                </a>
                <a href="costume"><li class="menu-costume">
                    <i class="fa-solid fa-shirt icon"></i>
                    <span>Costume</span>
                </li>
                </a>    
                <a href="ecommerce"> <li class="menu-ecommerce">
                    <i class="fa-brands fa-shopify icon"></i>
                    <span>Ecommerce</span>
                </li>
                </a>
            </div> 
            <li class="mode-mobile">
                <div class="moon-sun">
                    <i class="fa-solid fa-moon moon "></i>
                    <i class="fa-solid fa-sun sun"></i>
                </div>
                <span class="mode-text">Dark Mode</span>
                <div class="toggle-switch">
                    <span class="switch"></span>
                </div>
            </li>
        </ul>        
    </header>
}