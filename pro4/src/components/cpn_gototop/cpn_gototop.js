import React from 'react';
import './style_gototop.css';
import $ from 'jquery';
// import '../../public/js/homepage.js';




export default function Cpn_gototop() {
    return (
        <button onclick="topFunction()" id="myBtn" title="Go to top">
            <i class="fa-solid fa-circle-arrow-up"></i>
        </button>
    )
}
