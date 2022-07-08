import React from 'react';
import { Container } from "@material-ui/core";
import './style_details.css';
import $ from 'jquery';

import potential_main from '~/public/img/imgdetail/pp1.png';
import art_main from '~/public/img/imgdetail/art1.jpg';
import game_main from '~/public/img/imgdetail/game1.jpg';
import Ctn_footer from '../cpn_footer/cpn_footer.js';


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
                <i class="fa-solid fa-backward"></i>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <i class="fa-solid fa-forward"></i>
            </div>
 
        </div>
    )
}

function Cpn_art_project() {
    return (
    <div class="potential_projects pp_art" id="art">
        <h4>ART</h4>
        <div class="form" >
            <div class="form_1-1">
                <div class="img_w_title">
                    <img  src={art_main} alt=""/>
                    <div class="title">
                        <h5>Restore Vietnam's ancient history</h5>
                        <a href="/create_project/hoi-sinh-co-phuc-tuong-lai-noi-dai-tu-qua-khu">
                            Project on restoration, collection and research on ancient costume culture in different eras of Vietnam.
                            In order to highlight the unique characteristics of Vietnamese culture
                            <br/>
                            <span>By dhieuVN</span>
                        </a>
                    </div>
                </div>
                <div class="progessbar"></div>
            </div>
            <div class="form_1-2" >
                <div class="block">
                    <div class="form_bl bl1">
                        <img src="img/imgdetail/art2.avif" alt=""/>
                        <div class="title">
                            <h5>Bibliotech Tarot | A cyberpunk scifi horror tarot deck</h5>
                            <p>Cyberpunk tarot card project by a talented young design team
                                <br/>
                                <span>By Young Team</span>
                            </p>
                        </div>
                    </div>
                    <div class="form_bl bl2">
                        <img src="img/imgdetail/art3.jpg" alt=""/>
                        <div class="title">
                            <h5>The Sanctuary</h5>
                            <p>Compassion in action. Help build a space that rebuilds lives.
                                We are creating a living work of art - a space to heal, and to begin again.</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="form_bl bl3">
                        <img src="img/imgdetail/art4.avif" alt=""/>
                        <div class="title">
                            <h5>Witness : a creative hub in Oakland CA</h5>
                            <p>
                                Witness is brought to you by Oakland artist Critty Smitty. The shop will offer inspiring goods and creative workshops.
                                <br/>
                                <span>By Mariia</span>
                            </p>
                        </div>
                    </div>
                    <div class="form_bl bl4">
                        <img src="img/imgdetail/art5.avif" alt=""/>
                        <div class="title">
                            <h5>Ceramic jewelry</h5>
                            <p>
                                Hello. My name is Povetova Maria and I want introduce my project "PM ceramic jewelry" to you.
                                <br/>
                                <span>By GLang</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="art_projects_bars bars">
            <i class="fa-solid fa-backward"></i>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <i class="fa-solid fa-forward"></i>
        </div>
    </div>
    )
}

function Cpn_game_project() {
    return (
        <div class="potential_projects pp_game" id="game">
            <h4>GAME PROJECT</h4>
            <div class="form">
                <div class="form_1-1">
                    <div class="img_w_title">
                        <img  src={game_main} alt=""/>
                        <div class="title">
                            <h5>DIE: The Roleplaying Game</h5>
                            <a>A tabletop RPG based on the DIE comic, created by Kieron Gillen and Stephanie Hans, and produced by the makers of Spire and Heart.
                                <br/>
                                <span>By GLang</span>
                            </a>
                        </div>
                    </div>
                    <div class="progessbar"></div>
                </div>
                <div class="form_1-2" >
                    <div class="block">
                        <div class="form_bl bl1">
                            <img src="img/imgdetail/game2.avif" alt=""/>
                            <div class="title">
                                <h5>Cultist Chaos - A Card Game</h5>
                                <p>Lead your cult to victory in this strategic fantasy card game created and illustrated by Wizard of Barge.
                                    <br/>
                                    <span>By GLang</span>
                                </p>
                            </div>
                        </div>
                        <div class="form_bl bl2">
                            <img src="img/imgdetail/game3.avif" alt=""/>
                            <div class="title">
                                <h5>Baladins 📯</h5>
                                <p>Narrative game inspired by RPG, for 1 to 4 friends in coop online! Join the quest of entertaining a dragon!
                                    <br/>
                                    <span>By GLang</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <div class="form_bl bl3">
                            <img src="img/imgdetail/game4.avif" alt=""/>
                            <div class="title">
                                <h5>Cattails: Wildwood Story — A cozy life sim as a feral feline</h5>
                                <p>Lead your colony into the mysterious Wildwood. Get to know the residents, fall in love, and raise a litter of kittens! 🐈
                                    <br/>
                                    <span>By Falcon Development</span>
                                </p>
                            </div>
                        </div>
                        <div class="form_bl bl4">
                            <img src="img/imgdetail/game5.avif" alt=""/>
                            <div class="title">
                                <h5>Hunters of the Lost Creatures</h5>
                                <p>Collect the lost creatures and build the weirdest wildlife park. Will you choose the right hunter at the right time?
                                    <br/>
                                    <span>By GLang</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="game_projects_bars bars">
                <i class="fa-solid fa-backward"></i>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <i class="fa-solid fa-forward"></i>
            </div>
            <hr/>
    </div>
    )
}

export default function Cpn_details() {
    return (<Container maxWidth={false} className="" style={{margin:'0', padding: '0'}}>
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

            <br/>
            <br/>
            
            <Cpn_potential_project />
            <Cpn_art_project />
            <Cpn_game_project />
            <Ctn_footer />
        </div>
    </Container>
    )
}