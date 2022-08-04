import React, { useContext } from "react";
import "./cpn_my_post.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $, { data } from "jquery";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cpn_left_nav from "../../../components/cpn_product/cpn_left_nav/cpn_left_nav";
import AppContext from "../../AppContext";

export default function Cpn_my_post() {
  const { state_user } = useContext(AppContext);
  const [data_product, setData_product] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product`)
      .then((res) => res.data)
      .then((data) => {
        setData_product(data);
      });
  }, []);

  function print_post_user(total_post) {
    if (total_post!=null) {
        return (
          <div>
            {total_post.map((post) => {
              if (state_user.user.temp.name_author == post.name_author) {
                return (
                  <div class={`Infor ${post.name}`}>
                    <div class="author">
                      <img src={`${post.img_author}`} alt="" />
                      <div class="infor_author">
                        <span>{post.name_author}</span>
                        <p>
                          1m <i class="fa-solid fa-earth-americas icon 3"></i>
                        </p>
                      </div>
                    </div>
                    <div class="info-des">
                      <p>{post.infor}</p>
                      <div class="img-App">
                        <img src={post.img1} alt="" />
                      </div>
                    </div>
                    <hr />
                    <div class="decription">
                      <div class="emotion">
                        <i class="heart fa-heart fa-regular"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-solid fa-share-nodes"></i>
                      </div>
                      <div class="donate-investment">
                        <a href="donate">
                          <p class="donate">Donate</p>
                        </a>
                        <p class="investment">Investment</p>
                      </div>
                    </div>
    
                    {/* {{!-- update&dele --}} */}
                    <label for="project-input" class="drop-bars-btn">
                      <i class="fa-solid fa-bars"></i>
                    </label>
                    <input
                      type="checkbox"
                      name=""
                      hidden="true"
                      class="project__input"
                      id="project-input"
                    />
                    <ul class="update-drop">
                      <label for="project-input">
                        <i class="fa-solid fa-xmark project_close "> </i>{" "}
                      </label>
                      <div class="menu_drop">
                        <li>
                          <a href="/product/{{this._id}}/edit"> Update </a>
                        </li>
                        <li>
                          <p id="b4" class="{{this._id}}">
                            Delete
                          </p>
                        </li>
                      </div>
                    </ul>
    
                    {/* <!--comment--> */}
                    <div class="ctn_comment" style={{ height: "100px" }}>
                      <div class="bl__ctn_comment" style={{ width: "90%" }}>
                        <div class="avatar"></div>
                        <input type="text" placeholder="Viết bình luận ... " />
                      </div>
                    </div>
                    {/* <!--end_comment-->     */}
                  </div>
                )
              }
            })}
          </div>
        )
    }
  }

  return (
    <div>
      <div class="page">
        <Cpn_left_nav />
        <div class="center_page">
          {print_post_user(data_product == null ? null : data_product)}
        </div>
      </div>
    </div>
  );
}
