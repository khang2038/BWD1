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
  let id_image = 0,
    id_title = 0,
    id_content = 0,
    id_faq = 0;

  let slug_temp = "";

  const [projectInput, setProjectInput] = useState({
    img_big: "",
    main_title: "",
    main_content: "",
    title_money_pledged: "",
  });
  const [faqInput, setFaqInput] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const onChangeHandle = (e) => {
    setProjectInput({ ...projectInput, [e.target.name]: e.target.value });
  };

  const onChangeHandle_faq = (e) => {
    setFaqInput({ ...faqInput, [e.target.name]: e.target.value });
  };

  const onSubmitHandle_main = (e) => {
    try {
      e.preventDefault();
      var img_big = projectInput.img_big;
      var main_title = projectInput.main_title;
      var main_content = projectInput.main_content;
      var title_money_pledged = projectInput.title_money_pledged;

      axios.post("/post_project_created/store", {
        img_big,
        main_title,
        main_content,
        title_money_pledged,
      });
    } catch (error) {
      // setErrorMessage(error.response.data.message);
    }
  };

  const onSubmitHandle_faq = (e) => {
    try {
      e.preventDefault();
      var question_data = [];
      var slug_temp = removeVietnameseTones(projectInput.main_title);
      slug_temp=slug_temp.replace(/ /g,'-');

      var question=faqInput.question1;
      question_data.push({question,slug_temp});
      question=faqInput.question2;
      question_data.push({question,slug_temp});
      question=faqInput.question3;
      question_data.push({question,slug_temp});
      // var slug_temp = projectInput.main_title;
      console.log(question);

      axios.post("/post_project_created/faq", { question_data });
    } catch (error) {
      // setErrorMessage(error.response.data.message);
    }
  };

  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "i");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
    str = str.replace(/Đ/g, "d");
    str = str.replace(/H/g, "h");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ""
    );
    str = str.replace(/ + /g, " ");
    str = str.trim();

    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    return str;
  }

  $(function () {
    $("#img_big").change(function () {
      var fileInput = this;
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $("#image").attr("src", e.target.result);
        };

        reader.readAsDataURL(fileInput.files[0]);
      }
    });
  });

  // handle nav header

  function close_all() {
    if (document.querySelector(".main_post")) {
      Object.assign(document.querySelector(".main_post").style, {
        display: "none",
      });
      Object.assign(document.querySelector(".story_post").style, {
        display: "none",
      });
      Object.assign(document.querySelector(".FAQ_post").style, {
        display: "none",
      });
    }
  }

  function open_over_view() {
    close_all();
    if (document.querySelector(".main_post")) {
      Object.assign(document.querySelector(".main_post").style, {
        display: "flex",
      });
    }
  }

  function open_story() {
    close_all();
    if (document.querySelector(".story_post")) {
      Object.assign(document.querySelector(".story_post").style, {
        display: "flex",
      });
    }
  }

  function open_faq() {
    close_all();
    if (document.querySelector(".FAQ_post")) {
      Object.assign(document.querySelector(".FAQ_post").style, {
        display: "flex",
      });
    }
  }

  // PREVIEW MODAL

  function onClick_close_preview() {
    var preview = document.querySelector("#modal_preview");
    if (document.querySelector("#modal_preview")) {
      Object.assign(preview.style, {
        display: "none",
      });
    }
  }

  $(document).ready(() => {
    ProjectPostingPreview();

    function ProjectPostingPreview() {
      $("#preview").on("click", () => {
        $("#modal_preview .info_preview h2").text($("#main_title").val());
        $("#modal_preview .info_preview h4").text($("#main_content").val());
        $(
          "#modal_preview .info_preview .ctn_pledged_backers .pledged .title"
        ).text(`pledged of $` + $("#title_money_pledged").val() + ` goal`);
        $("#modal_preview .info_preview .percent_complete").text(
          `0 % of ` + $("#title_money_pledged").val() + ` $`
        );

        $(".main_prj_video").attr("src", $("#image").attr("src"));

        $("#modal_preview").css({
          display: "flex",
        });
      });
    }
  });

  //FAQ
  function add_faq() {
    let question_FAQ = document.querySelector(".question_FAQ");
    id_faq++;
    const div_faq = document.createElement("div");
    // div_faq.innerHTML = `<textarea onchange="test()" id="question" name="question" type="text" style="height: 80px;border_radius:20px;width: 80%;font-size : 30px; padding: 20px;margin: 10px;" placeholder="Write for question"></textarea>`;
    div_faq.innerHTML =
      "<textarea onChange={" +
      onChangeHandle_faq() +
      "} name='question' type='text' ></textarea>";
    question_FAQ.appendChild(div_faq);
  }

  //story
  function add_story_title() {
    let input_add_str = document.querySelector(".input_add_str");
    id_title++;
    const div_title = document.createElement("div");
    div_title.innerHTML = `<textarea name="title${id_title}" type="text" style="height: 80px;border_radius:20px;width: 80%;font-size : 30px; padding: 20px;margin: 10px;" placeholder="Title"></textarea>`;
    input_add_str.appendChild(div_title);
  }

  function add_story_content() {
    let input_add_str = document.querySelector(".input_add_str");
    id_content++;
    const div_content = document.createElement("div");
    div_content.innerHTML = `<textarea name="content${id_content}" type="text" style="border-radius: 10px; height: 20px;word-break: break-word; width: 90%;font-size : 20px; padding: 30px 10px 140px 30px;margin: 10px;" placeholder="Content"></textarea>`;
    input_add_str.appendChild(div_content);
  }

  function add_story_image() {
    let input_add_str = document.querySelector(".input_add_str");
    id_image++;
    const div_image = document.createElement("div");
    div_image.innerHTML = `<div style="display: flex; flex-direction: column;">
    <img style="margin: 0 auto; z-index: 1" src="" alt="" id="image_${id_image}" width="300" height="300">
    <input name="image${id_image}" style="width: 80%;margin: 20px auto 60px auto;" type="file" class="form-control" id="img_big" name="img_big"
            accept="image/gif , image/jpeg, image/png" placeholder="image">
    </div>
    `;
    input_add_str.appendChild(div_image);
  }

  // $(document).ready(function () {
  //   $(window).scroll(function () {

  //     if (button_add_str_top + 455.52 < ctn_footer_top) {
  //       var button_add_str = document.querySelector('.story_post .button_add_str');
  //       var button_add_str_top = $(".button_add_str").offset().top;
  //       var ctn_footer_top = $(".ctn__footer").offset().top;
  //       Object.assign(button_add_str.style, {
  //         display: "flex",
  //       });
  //     } else {
  //       Object.assign(button_add_str.style, {
  //         display: "none",
  //       });
  //     }
  //   });
  // });

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
          <form method="POST" onSubmit={onSubmitHandle_main}>
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
                  onChange={onChangeHandle}
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
                    onChange={onChangeHandle}
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
                    onChange={onChangeHandle}
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
                    onChange={onChangeHandle}
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
                onClick={open_faq}
                type="submit"
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
              onClick={onClick_close_preview}
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
              onClick={add_faq}
            >
              <i class="fa-solid fa-plus"></i>
              ADD QUESTION
            </button>
          </div>
          <form class="ctn_FAQ" method="POST" onSubmit={onSubmitHandle_faq}>
            <div class="question_FAQ">
              <textarea
                onChange={onChangeHandle_faq}
                id="question"
                name="question1"
                type="text"
                style={{
                  height: "80px",
                  borderRadius: "20px",
                  width: "80%",
                  fontSize: "30px",
                  padding: "20px",
                  margin: "10px",
                }}
                placeholder="Write for question"
              ></textarea>
              <textarea
                onChange={onChangeHandle_faq}
                id="question"
                name="question2"
                type="text"
                style={{
                  height: "80px",
                  borderRadius: "20px",
                  width: "80%",
                  fontSize: "30px",
                  padding: "20px",
                  margin: "10px",
                }}
                placeholder="Write for question"
              ></textarea>
              <textarea
                onChange={onChangeHandle_faq}
                id="question"
                name="question3"
                type="text"
                style={{
                  height: "80px",
                  borderRadius: "20px",
                  width: "80%",
                  fontSize: "30px",
                  padding: "20px",
                  margin: "10px",
                }}
                placeholder="Write for question"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={open_story}
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

      <div class="story_post" style={{ minHeight: "274px" }}>
        <div style={{ width: "80%", display: "flex", justifyContent: "right" }}>
          <div class="button_add_str">
            <button onClick={add_story_title}>
              <i class="fa-solid fa-plus"></i>
              ADD TITLE
            </button>
            <button onClick={add_story_content}>
              <i class="fa-solid fa-plus"></i>
              ADD CONTENT
            </button>
            <button onClick={add_story_image}>
              <i class="fa-solid fa-plus"></i>
              ADD IMAGE
            </button>
          </div>
          <div style={{ width: "80%" }}>
            <form method="POST" action="/post_project_created/story">
              <div class="input_add_str"></div>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>

      <div class="rewards_post"></div>

      <div style={{ height: "200px" }}></div>
    </div>
  );
}
