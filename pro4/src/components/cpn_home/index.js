import React from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Cpn_home() {   
    return (   
        <div>
            <header>  
                <div className="the_left_nav">  
                    <div className="logo">  
                        <p>PRO4</p>  
                    </div>  
                    <div className="search">  
                        <i className="fa-solid fa-magnifying-glass icon"></i>  
                        <input type="text" placeholder="Search..."/>    
                    </div>  
                </div>  
                <div className="the_center_nav">  
                    <a id="homepage" class="fa-solid fa-house icon 1"></a>  
                    <a id="product" class="fa-solid fa-earth-americas icon 2"></a>  
                    <a id="projects" class="fa-solid fa-circle-dollar-to-slot icon 3"></a>   
                </div>   
                <div class="the_right_nav">   
                    <div class="login_nav">    
                        
                        <i class="fa-solid fa-right-to-bracket icon"></i>     
                        <a href="Login">Login</a>     
                    </div>    
                </div>
                {/* {{!-- RES_MOBILE --}} */}
                    <div class="bars">
                        <i class="ti-menu" onclick></i>
                    </div>    
                    <div class="nav_mobile">
                        <div class="close" onclick>
                            <i class="ti-close">
                                
                            </i>
                            Close
                        </div>
                        <div class="homepage">
                            <a id="homepage" class="fa-solid fa-house icon 1" href="homepage">
                            </a>
                            <a href="homepage">
                                HOME
                            </a>
                        </div>
                        <div class="product">
                            <a id="product" class="fa-brands fa-atlassian icon 2" href="product">
                            </a>
                            <a href="product">
                                POSTS
                            </a>
                        </div>
                        <div class="projects">
                            <a id="projects" class="fa-solid fa-earth-americas icon 3" href="detail">
                            </a>
                            <a href="detail">
                                PROJECTS
                            </a>
                        </div>
                    </div>
                {/* {{!-- RES_MOBILE --}}   */}
            </header>

            <div class="introduce__web">
                    <div class="ctn__content">
                        <h1 class="content__title">
                            Welcome to PRO4
                        </h1>
                        <pre>
            A place to call for crowdfunding 
            promote potential and creativity projects
                        </pre>
                        <div class="btn">

                            <button>GO TO FUNDRAISE</button>
                        </div>
                    </div>
            
                    <div class="ctn__image">
                        <img src="img/imghome/z3376126787751_61175d6aeb38e9828c719e0993ef2f15.jpg" alt=""/>
                    </div>
                </div>

            {/* RES_MOBILE  */}
                <div class="introduce__web-mobile">
                    <div class="ctn__content-mobile">
                        <h1 class="content__title-mobile">
                            Welcome to PRO4
                        </h1>
                        <p>
                            A place to call for crowdfunding
                        promote potential and creativity projects
                        </p>
                    </div>
                </div>
                <div class="space_1">
                    
                </div>
            {/* DONE_RES_MOBILE */}

            
        </div>
            
            
    )
}
