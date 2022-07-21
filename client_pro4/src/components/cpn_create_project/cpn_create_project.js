import React from "react";
import "./style_create_project.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import axios from 'axios';
import { useState , useEffect} from "react";

//main_prj
const get_main_prj = () => {
  axios.get('http://localhost:5000/create_project/the-farm-family-project')
    .then((res) => res.data)
}



function Ctn_main_prj() {
  return (
    <div className="ctn_main_prj">
      <div style={{ width: "90%" }}>
        <div className="prj_video_img">
          <div className="main_prj_video"></div>
          <div className="main_prj_img">
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

        <div className="main_prj_content">
          <h5 style={{ color: "#427fb8", padding: "10px 0" }}>FUNDING</h5>
          <h2 style={{ color: "black", fontWeight: "bold" }}></h2>
          <h4 style={{ padding: "20px 0" }}></h4>
          <div className="ctn_statistic">
            <div className="ctn_pledged_backers">
              <div className="pledged">
                $<span>0</span>
                <div className="title">pledged of $ goal</div>
              </div>
              <div className="backers">
                <span>0</span>
                <div className="title">backers</div>
              </div>
            </div>
          </div>
          <div className="complete_figures">
            <div className="complete"></div>
          </div>
          <div className="percent_complete">
            <span>0</span> % of $
          </div>
          <div className="form_donate">
            <button className="support_this">SUPPORT THIS</button>
            <button className="follow">FOLLOW</button>
            <div className="ctn_social">
              <i className="fa-brands fa-facebook" style={{ color: "#39579a" }}></i>
              <i className="fa-brands fa-telegram" style={{ color: "#38b3f1" }}></i>
              <i className="fa-brands fa-twitter" style={{ color: "#1d9bf0" }}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function print_main_project(main_prj) {
  if (main_prj !== null) {
    return (
      <Ctn_main_prj 
        key={main_prj.key}
        main_title={main_prj.title}
        img_big={main_prj.img_big}
        main_content={main_prj.main_content}
        title_money_pledged={main_prj.title_money_pledged}
      />
    )
  }
}

export default function Cpn_create_project() {
  const [main_prj, setMain_prj] = useState(null);
  console.log(1);
  useEffect(() => {
    if (main_prj === null) {
        axios.get('http://localhost:5000/create_project/the-farm-family-project')
          .then((res) => res.data)  
          .then((data) => {
            setMain_prj(data);
          })
      }
  },[])

  // useComponentWillMount(
  //   if (main_prj.data === null) {
  //     get_main_prj().then((res) => {
  //       setMain_prj(res)
  //     })
  //   }
  // ) 

  return (
    <div>
      {print_main_project(main_prj)}
    </div>
  );
}
