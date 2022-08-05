import React from "react";
import "./cpn_add_project.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const body = document.querySelector("body");

export default function Cpn_add_project() {

    // handle nav header 

    function close_all() {
        if (document.querySelector('.main_post')) {
            Object.assign(document.querySelector('.main_post').style , {
                display : 'none',
            })
            Object.assign(document.querySelector('.story_post').style , {
                display : 'none',
            })
            Object.assign(document.querySelector('.FAQ_post').style , {
                display : 'none',
            })
        }
    }

    function open_over_view() {
        close_all();
        if (document.querySelector('.main_post')){
            Object.assign(document.querySelector('.main_post').style , {
                display : 'flex',
            })
        }
    }    

    function open_story() {
        close_all();
        if (document.querySelector('.story_post')) {
            Object.assign(document.querySelector('.story_post').style , {
                display : 'flex',
            })
        }
    }

    function open_faq() {
        close_all();
        if (document.querySelector('.FAQ_post')) {
            Object.assign(document.querySelector('.FAQ_post').style , {
                display : 'flex',
            })
        }
    }
    

  return (
    <div>
      <div class="nav_main_post">
        <ul>
          <div class="over_view" onClick={open_over_view}>
            <i class="fa-solid fa-eye"></i>
            OVER VIEW
          </div>
          <div class="faq" onClick={open_faq}>
            <i class="fa-solid fa-file-circle-question"></i>
            FAQ
          </div>
          <div class="story" onClick={open_story}>
            <i class="fa-solid fa-book-open-reader"></i>
            STORY
          </div>
          <div class="rewards" onclick="open_rewards()">
            <i class="fa-solid fa-gifts"></i>
            REWARDS
          </div>
        </ul>
      </div>

      <div class="main_post">
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <form method="POST" action="/post_project_created/store">
            <div class="form-group">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  for="img_big"
                >
                  PROJECT IMAGE
                </label>
                <p style={{ textAlign: "center", padding: "20px 0" }}>
                  Add an image that clearly represents your project. Choose one
                  that looks good at different sizes—it’ll appear on your
                  project page, across the Kickstarter website and mobile apps,
                  and (when shared) on social channels.
                </p>
                <p style={{ textAlign: "center", padding: "20px 0" }}>
                  Your image should be at least 1024x576 pixels. It will be
                  cropped to a 16:9 ratio.
                </p>
                <img
                  style={{ margin: "20px 50px", margin: "0 auto", zIndex: "1" }}
                  src=""
                  alt=""
                  id="image"
                  width="300"
                  height="300"
                />
                <input
                  style={{ width: "80%", margin: "20px auto 60px auto" }}
                  type="file"
                  class="form-control"
                  id="img_big"
                  name="img_big"
                  onchange="chooseFile(this)"
                  accept="image/gif , image/jpeg, image/png"
                />
              </div>

              <hr style={{ width: "70%", margin: "0 auto" }} />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "60px",
                }}
              >
                <label
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  for="main_title"
                >
                  PROJECT TITLE
                </label>
                <p style={{ textAlign: "center", padding: "20px 0" }}>
                  Write a clear, brief title and subtitle to help people quickly
                  understand your project. Both will appear on your project and
                  pre-launch pages.
                </p>
                <div style={{ position: "relative" }}>
                  <input
                    required="required"
                    type="text"
                    class="form-control"
                    id="main_title"
                    name="main_title"
                    style={{
                      padding: "20px 30px",
                      fontSize: "20px",
                      borderRadius: "20px",
                      border: "2px solid rgb(189, 167, 167)",
                    }}
                    placeholder=""
                  />
                  <span>Write about project title</span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "60px",
                }}
              >
                <label
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  for="main_content"
                >
                  GENERAL INTRODUCTION
                </label>
                <p style={{ textAlign: "center", padding: "20px 0" }}>
                  Potential backers will also see them if your project appears
                  on category pages, search results, or in emails we send to our
                  community.
                </p>
                <div style={{ position: "relative" }}>
                  <input
                    required="required"
                    type="text"
                    class="form-control"
                    id="main_content"
                    name="main_content"
                    style={{
                      marginBottom: "80px",
                      padding: "20px 30px",
                      fontSize: "20px",
                      borderRadius: "20px",
                      border: "2px solid rgb(189, 167, 167)",
                    }}
                    placeholder=""
                  />
                  <span>Write about general introduction</span>
                </div>
              </div>

              <hr style={{ width: "70%", margin: "0 auto" }} />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "60px 0",
                }}
              >
                <label
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  for="title_money_pledged"
                >
                  FUNDING GOAL
                </label>
                <p style={{ textAlign: "center", padding: "10px 0" }}>
                  Set an achievable goal that covers what you need to complete
                  your project.
                </p>
                <p style={{ textAlign: "center", padding: "10px 0 20px 0" }}>
                  Funding is all-or-nothing. If you don’t meet your goal, you
                  won’t receive any money.
                </p>
                <div style={{ position: "relative" }}>
                  <input
                    required="required"
                    type="text"
                    class="form-control"
                    id="title_money_pledged"
                    name="title_money_pledged"
                    style={{
                      padding: "20px 30px",
                      fontSize: "20px",
                      borderRadius: "20px",
                      border: "2px solid rgb(189, 167, 167)",
                    }}
                    placeholder=""
                  />
                  <span>Write about funding goal</span>
                </div>
              </div>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "30px",
                  borderRadius: "10px",
                  border: "2px solid rgb(179, 164, 164)",
                }}
                onclick="open_faq()"
              >
                <i
                  class="fa-solid fa-arrow-right-to-bracket"
                  style={{ margin: "0 20px" }}
                ></i>
                NEXT
              </button>
            </div>
          </form>

          <div id="modal_preview">
            <div
              style={{ display: "flex", justifyContent: "right" }}
              onclick="onClick_close_preview()"
            >
              <i
                class="fa-solid fa-circle-xmark"
                style={{ fontSize: "30px" }}
              ></i>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div class="img_preview">
                <img class="main_prj_video" />
              </div>
              <div class="info_preview">
                <h5>FUNDING</h5>
                <h2></h2>
                <h4></h4>
                <div class="ctn_statistic">
                  <div class="ctn_pledged_backers">
                    <div class="pledged">
                      $<span>0</span>
                      <div class="title"></div>
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
                <div class="percent_complete"></div>
                <div class="form_donate">
                  <button class="support_this">SUPPORT THIS</button>
                  <button class="follow">FOLLOW</button>
                  <div class="ctn_social">
                    <i
                      class="fa-brands fa-facebook"
                      style={{ color: "#39579a" }}
                    ></i>
                    <i
                      class="fa-brands fa-telegram"
                      style={{ color: "#38b3f1" }}
                    ></i>
                    <i
                      class="fa-brands fa-twitter"
                      style={{ color: "#1d9bf0" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            id="preview"
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "2px solid rgb(179, 164, 164)",
            }}
          >
            <i
              class="fa-solid fa-eye"
              style={{ margin: "0 20px", borderRadius: "10px" }}
            ></i>
            PREVIEW
          </button>
        </div>
      </div>

      <div class="FAQ_post">
        <div style={{ width: "70%" }}>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <button
              style={{
                fontSize: "30px",
                padding: "10px 20px",
                border: "2px solid rgb(183, 170, 170)",
                borderRadius: "10px",
              }}
              onclick="add_FAQ()"
            >
              <i class="fa-solid fa-plus"></i>
              ADD QUESTION
            </button>
          </div>
          <form
            class="ctn_FAQ"
            method="POST"
            action="/post_project_created/faq"
          >
            <div class="question_FAQ"></div>
            <button
              type="submit"
              onclick="open_story()"
              style={{
                fontSize: "30px",
                padding: "10px 20px",
                border: "2px solid rgb(183, 170, 170)",
                borderRadius: "10px",
              }}
            >
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
              NEXT
            </button>
          </form>
        </div>
      </div>

      <div class="story_post" style={{minHeight: '274px'}}>
        <div style={{width: '80%',display : 'flex',justifyContent: 'right'}}>
          <div class="button_add_str">
            <button onclick="add_story_title()">
              <i class="fa-solid fa-plus"></i>
              ADD TITLE
            </button>
            <button onclick="add_story_content()">
              <i class="fa-solid fa-plus"></i>
              ADD CONTENT
            </button>
            <button onclick="add_story_image()">
              <i class="fa-solid fa-plus"></i>
              ADD IMAGE
            </button>
          </div>
          <div style={{width : '80%'}}>
            <form method="POST" action="/post_project_created/story">
              <div class="input_add_str"></div>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>

      <div class="rewards_post">

      </div>

      <div style={{height: '200px'}}></div>
    </div>
  );
}
