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
import Button from '../../cpn_toast_message/button/Button'
import Toast from '../../cpn_toast_message/toast/Toast'
import ComponentDidMount from "../../scroll_top/win_scroll_top";
import { Cpn_loading } from "../../cpn_loading/cpn_loading";

function sleep(s) {
  return new Promise(function (resolve) {
    setTimeout(resolve, s);
  });
}

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

function check_link_data(temp) {
  if (temp[0]=='d' && temp[1]=='a' && temp[2]=='t' && temp[3]=='a') {
    return true;
  }
  return false;
}

export default function Cpn_my_post() {
  const { state_user } = useContext(AppContext);
  const [data_product, setData_product] = useState(null);
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  let toastProperties = null;
  const [ loading , setLoading ] = useState(false);
  
  useEffect(() => {
    axios
      .get(`http://103.170.120.155:5000/product`)
      .then((res) => res.data)
      .then((data) => {
        setData_product(data);
      });
  }, []);


  //=============-------------message (post)------------------====================
  
  const showToast = type => {
    switch(type) {
      case 'success_add_post':
        toastProperties = {
          id: list.length+1,
          title: 'NEW NOTIFICATION ! ',
          description: 'Successfully added post',
          backgroundColor: '#5cb85c'
        }
        break;
      case 'success_delete_post':
        toastProperties = {
          id: list.length+1,
          title: 'NEW NOTIFICATION ! ',
          description: 'Successfully delete post',
          backgroundColor: '#5cb85c'
        }
        break;
        
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  //handle update
 
  function handle_update(event , class_temp) {
    // console.log(class_temp);

    var update1 = document.querySelector(`.${class_temp} .update-drop`);
    console.log(update1);
    if (update1.classList.contains('open_up_del')){
      update1.classList.remove('open_up_del');
    } 
    else {
      update1.classList.add('open_up_del');
    }
  }

  
  function delete_p(event , _id){
    event.preventDefault();
    var ctn__loading__home = document.querySelector(".ctn__loading__body");
    var btn_toast = document.querySelector('.btn_toast');
    sleep() 
      .then(function() {
        axios.delete(`/store/${_id}`);
        btn_toast.click();
        setLoading(true);
        return sleep(1000)
      })
      .then(function() {

        return sleep(1000)
      })
      .then(function() {
        setLoading(false);
        navigate('../product',{replace : true});
      })
  };

  function print_post_user(total_post) {
    if (total_post != null) {
      return (
        <div>
          {total_post.map((post) => {
            if (state_user.user.temp.name_author == post.name_author) {
              // console.log(post._id);
              return (
                <div key={post._id} class={`Infor ${post.slug}`}>
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
                    {
                      validURL(post.img1)==false && check_link_data(post.img1)==false ? 
                      <img style={{borderRadius : '10px'}} src={require(`../../../public/${post.img1}`)} />
                      :
                      <img style={{borderRadius : '10px'}} src={post.img1} alt=""/>
                    }
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
                      <i class="fa-solid fa-bars handle_nav_up_del" onClick={event => handle_update(event , post.slug)} style={{float : 'right'}}></i>
                    </div>
                    <ul className="update-drop" style={{listStyle: "none" }}>
                      <div class="menu_drop">
                        <li>
                          <Link to={`../product/${post._id}/edit`}> Update </Link>
                        </li>
                        <li>
                          <p id="b4" /*class={`${post._id}`}*/ onClick={event => delete_p(event , post._id)}>
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
      <ComponentDidMount />
      {loading ? <Cpn_loading/> : null}
      <div class="page">
        <Cpn_left_nav />
        <div class="center_page">
          {print_post_user(data_product == null ? null : data_product.reverse())}

        </div>

      </div>
      <form method="POST" name="delete_form"></form>
      <Button handleClick={() => showToast('success_delete_post')}></Button>
      <Toast toastlist={list} position="buttom-right" setList={setList} />
      
    </div>
  );
}
