import React ,{useContext} from "react";
import "./add_product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AppContext from "../AppContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from '../cpn_toast_message/button/Button'
import Toast from '../cpn_toast_message/toast/Toast'

const body = document.querySelector("body");

function sleep(s) {
  return new Promise(function (resolve) {
    setTimeout(resolve, s);
  });
}

export default function Cpn_add_product() {
  const {state_user} = useContext(AppContext);
  const [productInput, setProductInput] = useState({name : "",name_author : `${state_user.user.temp.name_author}`, img_author : `${state_user.user.temp.img_author}` , infor : "", img1 : "" });
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  let toastProperties = null;


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
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  

  //=================================================

  const onChangeHandle = (e) => {
    setProductInput({...productInput, [e.target.name] : e.target.value});
  }

  const onSubmitHandle = (e) => {
    try {
      e.preventDefault();
      var name = productInput.name;
      var name_author = productInput.name_author;
      var img_author = productInput.img_author;
      var infor = productInput.infor;
      var img1 = productInput.img1;
      var ctn__loading__home = document.querySelector(".ctn__loading__body");
      var btn_toast = document.querySelector('.btn_toast');

      sleep(0)
        .then(function() {
          axios.post('/store',{name,name_author,img_author,infor,img1})
          btn_toast.click();
          return sleep(1000);
        }
        )
        .then(function() {
          ctn__loading__home.classList.add("open__load");
          return sleep(1000)
        })
        .then(function() {
          ctn__loading__home.classList.remove("open__load");

          navigate('../product',{replace : false});

          // var temp_to_product= document.querySelector('.temp_to_product');
          // temp_to_product.click();
        }
        )
          

      
      
    } catch (error) {
      // setErrorMessage(error.response.data.message);
    }
  }


  return (
    <div>
      <div
        class="body_create_prj"
        style={{display: 'flex', justifyContent: 'center', marginTop : '80px'}}
      >
        <div style={{padding: '20px',backgroundColor: 'white', width : '40%',borderRadius: '20px',border: '2px solid rgb(212, 179, 179)'}}>
          <div
            class="author"
            style={{width: '100%',display : 'flex',justifyContent: 'center'}}
          >
            <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
              <img src={state_user.user.temp.img_author} alt="" />
              <div class="infor_author">
                <h3>{state_user.user.temp.name_author}</h3>
                <p>
                  public <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                </p>
              </div>
            </div>
          </div>
          <form method="POST" onSubmit={onSubmitHandle}>
            <div style={{width: '100%', display : 'flex', flexDirection: 'column',margin : '0 30px'}}>
              <div class="infor">
                <input
                  required="required"
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  value={productInput.name}
                  onChange={onChangeHandle}
                />
                <span>PROJECT KEYWORDS</span>
              </div>
              <div hidden="true">
                <label for="name_author" class="form-label">
                  Name author
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name_author"
                  value="{{users.name_author}}"
                  name="name_author"
                />
              </div>
              <div hidden="true">
                <label for="img_author" class="form-label">
                  img_author
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="img_author"
                  value="{{users.img_author}}"
                  name="img_author"
                />
              </div>
              <div class="infor">
                <input
                  required="required"
                  type="text"
                  class="form-control"
                  id="infor"
                  name="infor"
                  value={productInput.infor}
                  onChange={onChangeHandle}
                />
                <span>Description</span>
              </div>
              <div class="infor">
                <input
                  style={{height : '30px',padding: '40px 0 150px 30px', borderRadius: '5px'}}
                  required="required"
                  type="text"
                  class="form-control"
                  id="img1"
                  name="img1"
                  value={productInput.img1}
                  onChange={onChangeHandle}
                />
                <span>Copy link image for here</span>
              </div>
                <button type="submit" class="btn btn-primary">
                  Post
                </button>
              

              <Link to={'../product'} className="temp_to_product"></Link>
            </div>
          </form>
              <Button handleClick={() => showToast('success_add_post')}></Button>
              <Toast toastlist={list} position="buttom-right" setList={setList} />
        </div>
      </div>
      <div className="ctn__loading__body">
        <div className="ctn__loading">
          <div className="ctn__loading__content"></div>
        </div>
      </div>
      
    </div>
  );
}
