import React from "react";
import "./add_product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";

const body = document.querySelector("body");

export default function Cpn_add_product() {
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
              <img src="{{users.img_author}}" alt="" />
              <div class="infor_author">
                <h3></h3>
                <p>
                  public <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                </p>
              </div>
            </div>
          </div>
          <form method="POST" action="store">
            <div style={{width: '100%', display : 'flex', flexDirection: 'column',margin : '0 30px'}}>
              <div class="infor">
                <input
                  required="required"
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                />
                <span>Name project</span>
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
                />
                <span>Copy link image for here</span>
              </div>
              <button type="submit" class="btn btn-primary">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
