import React from "react";
import "./cpn_wallet.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";

export default function cpn_wallet() {
  return (
    <div>
      <div class="ctn__solution">
        <div class="ctn__solution__title">How to get started</div>
        <div class="ctn__solution__element" style={{ height: "300px" }}>
          <ul>
            <li class="ctn__solution__image" style={{ height: "20px" }}>
              <h3>
                <i class="fa-solid fa-1"></i>
              </h3>
            </li>
            <li class="ctn__solution__title-small">CHECK YOUR ELIGIBILITY</li>
            <li class="ctn__solution__content">
              Know your eligibility in two minutes. No credit check or fee
              required.
            </li>
          </ul>
          <ul>
            <li class="ctn__solution__image" style={{ height: "20px" }}>
              <h3>
                <i class="fa-solid fa-2"></i>
              </h3>
            </li>
            <li
              class="ctn__solution__title-small"
              style={{ width: "80%", margin: "0 auto" }}
            >
              YOUR SOLUTIONS
            </li>
            <li class="ctn__solution__content">
              A CircleUp specialist identifies your financing options on a quick
              call.
            </li>
          </ul>
          <ul>
            <li class="ctn__solution__image" style={{ height: "20px" }}>
              <h3>
                <i class="fa-solid fa-3"></i>
              </h3>
            </li>
            <li
              class="ctn__solution__title-small"
              style={{ width: "100%", margin: "0 auto" }}
            >
              GET YOUR TERMS
            </li>
            <li class="ctn__solution__content">
              Make a decision, provide your financials, &#38; get terms in &#38;
              72 hours.
            </li>
          </ul>
          <ul>
            <li class="ctn__solution__image" style={{ height: "20px" }}>
              <h3>
                <i class="fa-solid fa-4"></i>
              </h3>
            </li>
            <li
              class="ctn__solution__title-small"
              style={{ width: "80%", margin: "0 auto" }}
            >
              USE YOUR FUNDS
            </li>
            <li class="ctn__solution__content">
              Funds released by the next business day.
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 0 50px 0",
          }}
        >
          <button style={{ padding: "20px 30px", borderRadius: "50px" }}>
            START YOUR ELIGIBILITY CHECK
          </button>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <hr style={{ width: "50%" }} />
      </div>

      <div class="space_1" style={{height: '300px'}}></div>

      <div class="ctn__feature">
        <div class="ctn__feature__image">
          <h2>Successfully invested projects</h2>
          <div style={{listStyle: 'none',border: '1px solid rgb(167, 156, 156)'}}>
            <ul style={{backgroundColor: '#c7d4e4'}}>
              <li style={{width: '30%'}}>Index</li>
              <li style={{width: '70%'}}>Name project</li>
            </ul>
            <ul>
              <li style={{width: '30%'}}>1</li>
              <li style={{width: '70%'}}>
                Bed Pillow | Adaptive ergonomics to improve your sleep
              </li>
            </ul>
            <ul>
              <li style={{width: '30%'}}>2</li>
              <li style={{width: '70%'}}>
                DIGI SWAP || Upcycling film cameras into digital cameras
              </li>
            </ul>
            <ul>
              <li style={{width: '30%'}}>3</li>
              <li style={{width: '70%'}}>Restore Vietnam's ancient history</li>
            </ul>
            <ul>
              <li style={{width: '30%'}}>4</li>
              <li style={{width: '70%'}}>.......</li>
            </ul>
            <ul style={{border: '1px solid rgb(187, 178, 178)'}}>
              <i
                class="fa-solid fa-circle-arrow-down"
                style={{padding: '5px 0',color: '#c7d4e4'}}
              ></i>
            </ul>
          </div>
        </div>

        <div class="ctn__feature__content">
          <div class="feature__info">
            <div class="about__shopping">
              <img
                style={{width: '100%'}}
                src="img/imgwallet/gift/gift3.gif"
                alt=""
              />
            </div>
            <div class="about__tryonclothes">
              <img
                style={{width: '100%'}}
                src="img/imgwallet/gift/gift1.gif"
                alt=""
              />
            </div>
            <div class="about__style">
              <img
                style={{width: '100%'}}
                src="img/imgwallet/gift/gift2.gif"
                alt=""
              />
            </div>
          </div>
          <div class="feature__background"></div>
        </div>
      </div>

      <hr />
    </div>
  );
}
