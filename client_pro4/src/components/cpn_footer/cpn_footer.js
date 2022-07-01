import React from 'react';
import './style_footer.css';

function Cpn_footer_1() {
    return (<div class="ctn__footer">
        <div class="ctn__footer__content">
            <div class="footer__colum f__strart">
                <a href="../Login/signup.html">Get Started</a>
                <ul>
                    <li><a href="Login">Start Fundraise</a></li>
                    <li><a href="#">Investor Signup</a></li>
                    <li><a href="#">Account Login</a></li>
                </ul>
            </div>
            <div class="footer__colum f__browse">
                <a href="#">Browse</a>
                <ul>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Recently</a></li>
                    <li><a href="#">Start-up Magazine</a></li>
                    <li><a href="#">Communities</a></li>
                </ul>
            </div>
            <div class="footer__colum f__resources">
                <a href="#">Resources</a>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Guidelines</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer__colum f__legal">
                <a href="#">Legal</a>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
            <div class="footer__colum f__follow">
                <a href="#">Follow</a>
                <ul class="list-follow">
                    <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                </ul>
            </div>
        </div>

        <div class="ctn__footer__describle">
            <div class="sponsor">
                <p>Special thanks for sponsors</p>
                <div class="ctn__brands__img">
                    <p class="img__img">
                        Brand A
                    </p>
                    <p class="img__img">
                        Brand B
                    </p>
                    <p class="img__img">
                        Brand C
                    </p>
                    <p class="img__img">
                        Brand D
                    </p>
                    <p class="img__img">
                        Brand E
                    </p>
                </div>
            </div>
            <div class="describle">
                <p class="coppyright">
                    Copyright © 2022 Startups.com. All rights reserved.
                </p>
                <p class="content__describle">
                    PRO4 is a software as a service crowdfunding platform. PRO4 is not a 
                    registered broker-dealer and does not offer investment advice or advise on the
                     raising of capital through securities offerings. PRO4 does not recommend 
                     or otherwise suggest that any investor make an investment in a particular company, 
                     or that any company offer securities to a particular investor. PRO4 takes no 
                     part in the negotiation or execution of transactions for the purchase or sale of 
                     securities, and at no time has possession of funds or securities. No securities
                      transactions are executed or negotiated on or through the PRO4 platform. 
                      PRO4 receives no compensation in connection with the purchase or sale of securities. 
                </p>
            </div>
        </div>
    </div>)
}

function Cpn_footer_res() {
    return (
    <div class="ctn__footer-mobile">
        <div class="footer__colum f__strart">
            <a href="../Login/signup.html">Get Started</a>
            <ul>
                <li><a href="../Login/login.html">Start Fundraise</a></li>
                <li><a href="#">Investor Signup</a></li>
                <li><a href="#">Account Login</a></li>
            </ul>
        </div>
        <div class="footer__colum f__browse">
            <a href="#">Browse</a>
            <ul>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Recently</a></li>
                <li><a href="#">Start-up Magazine</a></li>
                <li><a href="#">Communities</a></li>
            </ul>
        </div>
        <div class="footer__colum f__resources">
            <a href="#">Resources</a>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Guidelines</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer__colum f__legal">
            <a href="#">Legal</a>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
        </div>
        <div class="footer__colum f__follow">
            <a href="#">Follow</a>
            <ul class="list-follow">
                <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </ul>
        </div>
    </div>
    )
}

export default function Cpn_footer() {
    return (
       <div>
            <Cpn_footer_1 />
            <Cpn_footer_res />
       </div>
    )
}