import React from 'react';
import { Container } from "@material-ui/core";
import './style_details.css';
import $ from 'jquery';

import potential_main from '~/public/img/imgdetail/pp1.png';

function Cpn_potential_project() {
    return (
        <div class="potential_projects pp_featured" id="featured">
            <h4>FEATURED PROJECT</h4>
            <div class="form">
                <div class="form_1-1">
                    <div class="img_w_title">
                        <img  src={potential_main} alt=""/>
                        <div class="title">
                            <h5>Coolmate : Menfashion - Shopping solution for men's wardrobe</h5>
                            <a>A male fashion startup project from Vietnam. 
                                Coolmate offers a convenient shopping solution for men.
                                It is expected that Google will call for $3000 in the first round
                            </a>
                        </div>
                    </div>
                    <div class="progessbar"></div>
                </div>
                <div class="form_1-2">
                    <div class="block">
                        <div class="form_bl bl1">
                            <div class="title">
                                <h5>Bed Pillow | Adaptive ergonomics to improve your sleep</h5>
                                <a href="/create_project/bed-pillow-or-adaptive-ergonomics-to-improve-your-sleep">Innovative design and high-quality materials for a proper rest in any position</a>
                            </div>
                        </div>
                        <div class="form_bl bl2">
                            <div class="title">
                                <h5>Mood. Hard Enamel Pins</h5>
                                <a href="/create_project/mood-hard-enamel-pins">A series of pins based on mu.andcoco's illustrations spreading peaceful and positive vibes only.</a>
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <div class="form_bl bl3">
                            <div class="title">
                                <h5>DIGI SWAP || Upcycling film cameras into digital cameras</h5>
                                <a href="/create_project/digi-swap-or-or-upcycling-film-cameras-into-digital-cameras">Patented adapter and app that upcycles film cameras allowing you to use the original camera settings to capture digital photos and video.</a>
                            </div>
                        </div>
                        <div class="form_bl bl4">
                            <div class="title">
                                <h5>An Edge A Center: A Book of Photos From the End of the Earth</h5>
                                <p>Portraits, landscapes, and contemplative scenes from the immense and bizarre territory otherwise known as California.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="featured_projects_bars bars">
                <button><i class="fa-solid fa-backward"></i></button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button><i class="fa-solid fa-forward"></i></button>
            </div>
 
        </div>
    )
}

export default function Cpn_details() {
    return <Container maxWidth={false} className="" style={{margin:'0', padding: '0'}}>
        <div class="page">
            <ul class="the_left_page letf_page">
            <div class="menu">
                    <li class="menu-feature-prj">
                        <a href="#featured">
                            <i class="fa-brands fa-hotjar"></i>
                            <span>Featured</span>
                        </a>
                    </li>
                    <li class="menu-game">
                        <a href="#game">
                            <i class="fa-solid fa-gamepad icon"></i>
                            <span>Game</span>
                        </a>
                    </li>
                    <li class="menu-app">
                        <a href="">
                            <i class="fa-brands fa-app-store icon"></i>
                            <span>App</span>
                        </a>
                    </li>
                    <li class="menu-Art">
                        <a href="#art">
                            <i class="fa-brands fa-artstation"></i>
                            <span>Art</span>
                        </a>
                    </li>
                    <li class="menu-costume">
                        <a href="">
                            <i class="fa-solid fa-shirt icon"></i>
                            <span>Costume</span>
                        </a>
                    </li>    
                </div> 
                <li class="mode" onclick>
                    <div class="moon-sun">
                        <i class="fa-solid fa-moon moon "></i>
                        <i class="fa-solid fa-sun sun"></i>
                    </div>
                    <span class="mode-text">Dark Mode</span>
                    <div class="toggle-switch" onclick>
                        <span class="switch"></span>
                    </div>
                </li>

            </ul>

            <div class="featured_projects">
                <div class="img_prj_featured">

                </div>
                <div class="navbar_trans">
                    <div class="trans">

                    </div>
                </div>
            </div>

            <hr/>

            <Cpn_potential_project />
        </div>
    </Container>
}