import React from "react";
import "./style_create_project.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";

function Ctn_main_prj() {
  return (
    <div class="ctn_main_prj">
      <div style={{ width: "90%" }}>
        <div class="prj_video_img">
          <div class="main_prj_video"></div>
          <div class="main_prj_img">
            <ul>
              <li>
                <img src alt="" />
              </li>
              <li>
                <img src alt="" />
              </li>
              <li>
                <img src alt="" />
              </li>
              <li>
                <img src alt="" />
              </li>
              <li>
                <img src alt="" />
              </li>
              <li>
                <img src alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div class="main_prj_content">
          <h5 style={{ color: "#427fb8", padding: "10px 0" }}>FUNDING</h5>
          <h2 style={{ color: "black", fontWeight: "bold" }}></h2>
          <h4 style={{ padding: "20px 0" }}></h4>
          <div class="ctn_statistic">
            <div class="ctn_pledged_backers">
              <div class="pledged">
                $<span>0</span>
                <div class="title">pledged of $ goal</div>
              </div>
              <div class="backers">
                <span>0</span>
                <div class="title">backers</div>
              </div>
            </div>
          </div>
          <div class="complete_figures">
            <div class="complete"></div>
          </div>
          <div class="percent_complete">
            <span>0</span> % of $
          </div>
          <div class="form_donate">
            <button class="support_this">SUPPORT THIS</button>
            <button class="follow">FOLLOW</button>
            <div class="ctn_social">
              <i class="fa-brands fa-facebook" style={{ color: "#39579a" }}></i>
              <i class="fa-brands fa-telegram" style={{ color: "#38b3f1" }}></i>
              <i class="fa-brands fa-twitter" style={{ color: "#1d9bf0" }}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cpn_create_project() {
  return (
    <div>
      <Ctn_main_prj />
    </div>
  );
}
