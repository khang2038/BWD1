import React, { useContext } from "react";
import "./cpn_my_post.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $, { data, event } from "jquery";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cpn_left_nav from "../../../components/cpn_product/cpn_left_nav/cpn_left_nav";
import AppContext from "../../AppContext";
import swal from 'sweetalert';
import { useNavigate } from "react-router";


function sleep(s) {
  return new Promise(function (resolve) {
    setTimeout(resolve, s);
  });
}

export default function Cpn_my_post() {
  const { state_user } = useContext(AppContext);
  const [data_product, setData_product] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product`)
      .then((res) => res.data)
      .then((data) => {
        setData_product(data);
      });
  }, []);

  //handle update
 
  function handle_update() {
      var update1 = document.querySelector(`.update-drop`);
    
      if (update1.classList.contains('open_up_del')){
          update1.classList.remove('open_up_del');
      } 
      else {
          update1.classList.add('open_up_del');
      }
      
  }

  
  function delete_p(e){
    e.preventDefault();
    var ctn__loading__home = document.querySelector(".ctn__loading__body");

    sleep() 
      .then(function() {
        ctn__loading__home.classList.add("open__load");
        axios.delete(`/store/${e.target.className}`);
        return sleep(1000)
      })
      .then(function() {
        ctn__loading__home.classList.remove("open__load");
        navigate('../product',{replace : true});
      })
  };

  function print_post_user(total_post) {
    if (total_post != null) {
      return (
        <div>
          {total_post.map((post) => {
            if (state_user.user.temp.name_author == post.name_author) {
              return (
                <div key={post._id} class={`Infor ${post.name}`}>
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
                  <label for="project-input" class="drop-bars-btn" style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', justifyContent : 'flex-end', marginBottom: '20px'}}>
                      <i class="fa-solid fa-bars handle_nav_up_del" onClick={handle_update} style={{float : 'right'}}></i>

                    </div>
                    <ul class="update-drop" style={{ listStyle: "none" }}>
                      <div class="menu_drop">
                        <li>
                          <Link to={`../product/${post._id}/edit`}> Update </Link>
                        </li>
                        <li>
                          <p id="b4" class={`${post._id}`} onClick={delete_p}>
                            Delete
                          </p>
                        </li>
                      </div>
                    </ul>
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    hidden="true"
                    class="project__input"
                    id="project-input"
                  />

                  {/* <!--comment--> */}
                  <div class="ctn_comment" style={{ height: "100px" }}>
                    <div class="bl__ctn_comment" style={{ width: "90%" }}>
                      <div class="avatar"></div>
                      <input type="text" placeholder="Viết bình luận ... " />
                    </div>
                  </div>
                  {/* <!--end_comment-->     */}
                </div>
              );
            }
          })}
        </div>
      );
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
      <form method="POST" name="delete_form"></form>
      <div className="ctn__loading__body">
        <div className="ctn__loading">
          <div className="ctn__loading__content"></div>
        </div>
      </div>
    </div>
  );
}
