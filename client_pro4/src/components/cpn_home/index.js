import React from "react";
import "./style_home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import pro4 from "~/public/img/imghome/z3376126787751_61175d6aeb38e9828c719e0993ef2f15.jpg";
import project_fund from "~/public/img/imghome/project_fund.webp";
import money from "~/public/img/imghome/money.webp";
import supporter from "~/public/img/imghome/supporter.webp";
import financial from "~/public/img/imghome/financial.webp";
import mission4 from "~/public/img/imghome/mission4.webp";
import project2 from "~/public/img/imghome/project2.avif";
import project1 from "~/public/img/imghome/project1.avif";
import project3 from "~/public/img/imghome/project3.avif";
import project4 from "~/public/img/imghome/project4.avif";
import project5 from "~/public/img/imghome/project5.avif";
import project6 from "~/public/img/imghome/project6.avif";
import "../../public/js/homepage.js";

//trans_pre_aft_modal_card
//promise
function sleep(s) {
  return new Promise(function (resolve) {
    setTimeout(resolve, s);
  });
}

function Highlights() {
  function trans_pre_card() {
    let card_project = document.querySelector(".card_project");
    let form_card_project = document.querySelectorAll(
      ".card_project .form_card_project"
    );
    let card_project_1 = document.querySelector(".card_project-1");
    // $('.card_project').addClass('animate__animated animate__backOutLeft');

    if (document.querySelector(".card_project-1")) {
      Object.assign(document.querySelector(".card_project-1").style, {
        display: "none",
      });
    }

    if (document.querySelector(".card_project")) {
      Object.assign(document.querySelector(".card_project").style, {
        display: "flex",
      });
    }

    sleep(0)
      .then(function () {
        $(".card_project_1").addClass(
          "animate__animated animate__bounceOutRight"
        );
        $(".card_project").addClass("animate__animated animate__bounceInLeft");

        return sleep(500);
      })
      .then(function () {
        Object.assign(card_project.style, {
          display: "flex",
        });

        Object.assign(card_project_1.style, {
          display: "none",
        });

        return sleep(0);
      })
      .then(function () {
        $(".card_project_1").removeClass(
          "animate__animated animate__bounceOutRight"
        );
        $(".card_project").removeClass(
          "animate__animated animate__bounceInLeft"
        );
      });
  }

  function trans_aft_card() {
    let card_project = document.querySelector(".card_project");
    let form_card_project = document.querySelectorAll(
      ".card_project .form_card_project"
    );
    let card_project_1 = document.querySelector(".card_project-1");

    sleep(0)
      .then(function () {
        $(".card_project").addClass("animate__animated animate__bounceOutLeft");
        $(".card_project_1").addClass(
          "animate__animated animate__bounceInRight"
        );

        return sleep(500);
      })
      .then(function () {
        Object.assign(card_project.style, {
          display: "none",
        });

        Object.assign(card_project_1.style, {
          display: "flex",
        });

        return sleep(0);
      })
      .then(function () {
        $(".card_project").removeClass(
          "animate__animated animate__bounceOutLeft"
        );
        $(".card_project_1").removeClass(
          "animate__animated animate__bounceInRight"
        );
      });
  }

  //open_close_feature_prj
  //open
  function open_prj_1() {
    let modal_1 = document.querySelector(".modal_1");
    modal_1.classList.add("open");
  }

  function open_prj_2() {
    let modal_2 = document.querySelector(".modal_2");
    modal_2.classList.add("open");
  }

  function open_prj_3() {
    let modal_3 = document.querySelector(".modal_3");
    modal_3.classList.add("open");
  }

  function open_prj_4() {
    let modal_4 = document.querySelector(".modal_4");
    modal_4.classList.add("open");
  }

  function open_prj_5() {
    let modal_5 = document.querySelector(".modal_5");
    modal_5.classList.add("open");
  }

  function open_prj_6() {
    let modal_6 = document.querySelector(".modal_6");
    modal_6.classList.add("open");
  }
  //close
  function close_prj() {
    let modal_1 = document.querySelector(".modal_1");
    let modal_2 = document.querySelector(".modal_2");
    let modal_3 = document.querySelector(".modal_3");
    let modal_4 = document.querySelector(".modal_4");
    let modal_5 = document.querySelector(".modal_5");
    let modal_6 = document.querySelector(".modal_6");

    modal_1.classList.remove("open");
    modal_2.classList.remove("open");
    modal_3.classList.remove("open");
    modal_4.classList.remove("open");
    modal_5.classList.remove("open");
    modal_6.classList.remove("open");
  }
  return (
    <div className="highlights">
      <h1 className="title">Featured projects</h1>
      <i className="pre_card fa-solid fa-angle-left" onClick={trans_pre_card}></i>
      <i className="aft_card fa-solid fa-angle-right" onClick={trans_aft_card}></i>
      <div className="card_project">
        <div className="form_card_project" onClick={open_prj_1}>
          <div>
            <img src={project4} alt="" />
          </div>

          <h1>Cyberpunk Mini Alley - Bookshelf Insert / Booknook</h1>
          <p>
            A fully assembled, high-quality handmade bookshelf Insert with a
            Cyberpunk diorama theme. Includes many personalizable addons.
          </p>
        </div>
        <div className="form_card_project" onClick={open_prj_2}>
          <div>
            <img src={project5} alt="" />
          </div>
          <h1>Pruto: Mesh Action Sports Communicator with LED Light</h1>
          <p>
            For Skiing, Yachting, Cycling and all Sports Players. Have Fun and
            Stay Connected, Go Adventure Boldly with Pruto!
          </p>
        </div>
        <div className="form_card_project" onClick={open_prj_3}>
          <div>
            <img src={project6} alt="" />
          </div>
          <h1>Haven Safari: your all-in-one hammock tent</h1>
          <p>
            Hang as a hammock | Pitch as a bivy | Patented lay-flat design |
            Comfort and durability | Making sleep the highlight of camping
          </p>
        </div>
      </div>

      {/* <!--card-form-2--> */}
      <div className="card_project-1">
        <div className="form_card_project-1" onclick={open_prj_4}>
          <div>
            <img src={project2} alt="" />
          </div>
          <h1>The Farm Family Project</h1>
          <p>
            A Fine Art Photobook by Rob MacInnis Featuring 15 Years of Farm
            Animal Portraits
          </p>
        </div>
        <div className="form_card_project-1" onclick={open_prj_5}>
          <div>
            <img src={project3} alt="" />
          </div>
          <h1>SnackHunter - A magical multiplayer hide-and-seek game</h1>
          <p>
            Enchanted snacks face off against hungry mages! Launch SnackHunter
            on your PC and join with your friends on your smartphones.
          </p>
        </div>
        <div className="form_card_project-1" onclick={open_prj_6}>
          <div>
            <img src={project1} alt="" />
          </div>
          <h1>Waterproof and soft light ball-POOF LIGHT</h1>
          <p>
            Hold it, like holding the summer moon, but more than the moon to add
            a soft and gentle.
          </p>
        </div>
      </div>

      <div className="modal_1">
        <div className="exit">
          <i className="fa-solid fa-circle-xmark" onClick={close_prj}></i>
        </div>
        <div className="content1">
          <div className="info_img">
            <img src={project4} alt="" />
            <p>Cyberpunk Mini Alley - Bookshelf Insert / Booknook</p>
            <p>
              A fully assembled, high-quality handmade bookshelf Insert with a
              Cyberpunk diorama theme. Includes many personalizable addons.
            </p>
          </div>

          <div className="info_content">
            <h2>
              US $ <span>196.096</span>
              <i className="ti-check-box"> 100%</i>
            </h2>
            <p>Pledged of US$ 10,000 goal</p>

            <ul className="content_details">
              <li>
                Have you fallen in love with the beautiful neon lights of the
                Cyberpunk world?
              </li>
              <li>Do you want to experience a high-tech, low-life city?</li>
              <li>
                Would you want a piece of this unique world inside your home?{" "}
              </li>

              <h4>
                {" "}
                <i className="ti-star"> </i> The Cyberpunk MiniAlley turns this
                dystopian futuristic world into a reality. Now you can have your
                very own piece of Cyberpunk diorama in your own home. This
                beautiful handmade piece sits neatly on any bookshelf and
                provides the perfect escape into a world unlike any other.{" "}
              </h4>
            </ul>

            <button>Details ...</button>
          </div>
        </div>
      </div>

      <div className="modal_2">
        <div className="exit">
          <i className="fa-solid fa-circle-xmark" onClick={close_prj}></i>
        </div>
        <div className="content1">
          <div className="info_img">
            <img src={project5} alt="" />
            <p>Pruto: Mesh Action Sports Communicator with LED Light</p>
            <p>
              For Skiing, Yachting, Cycling and all Sports Players. Have Fun and
              Stay Connected, Go Adventure Boldly with Pruto!
            </p>
          </div>

          <div className="info_content">
            <h2>
              US$<span> 288,377</span>
              <i className="ti-check-box"> 100%</i>
            </h2>
            <p>Pledged of US$ 5,000 goal</p>

            <ul className="content_details">
              <li>Real-time hands free conversation</li>
              <li>Keep in touch , ultra wide range ,superb sound quality</li>
              <li>Prepared for any situation </li>

              <h4>
                {" "}
                <i className="ti-star"> </i> Go wild! Have adventures with friends
                and stay connected no matter how intense the action gets! With
                Pruto, revolutionize the way you communicate with your
                companions while enjoying outdoor activities.{" "}
              </h4>
            </ul>

            <button>Details ...</button>
          </div>
        </div>
      </div>
      <div className="modal_3">
        <div className="exit">
          <i className="fa-solid fa-circle-xmark" onClick={close_prj}></i>
        </div>
        <div className="content1">
          <div className="info_img">
            <img src={project6} alt="" />
            <p>Haven Safari: your all-in-one hammock tent</p>
            <p>
              Hang as a hammock | Pitch as a bivy | Patented lay-flat design |
              Comfort and durability | Making sleep the highlight of camping .{" "}
            </p>
          </div>

          <div className="info_content">
            <h2>
              $<span> 402,243</span>
              <i className="ti-check-box"> 100%</i>
            </h2>
            <p>Pledged of $20,000 goal</p>

            <ul className="content_details">
              <li>
                Deluxe insulated air mattress, coated in vegan suede, with
                adjustable lounge strap.{" "}
              </li>
              <li>Quick and easy assembly .</li>
              <li>
                6 large pockets and ridgeline for additional storage , 4
                different color options with extra Kickstarter perks!{" "}
              </li>

              <h4>
                {" "}
                <i className="ti-star"> </i> As an avid outdoorsman, it was hard to
                reconcile the fact that every amazing day in the woods, would be
                punctuated by a miserable night. I designed the Haven Tent with
                the goal of, making sleep the highlight of camping.{" "}
              </h4>
            </ul>

            <button>Details ...</button>
          </div>
        </div>
      </div>

      <div className="modal_4">
        <div className="exit">
          <i className="fa-solid fa-circle-xmark" onClick={close_prj}></i>
        </div>
        <div className="content1">
          <div className="info_img">
            <img src={project2} alt="" />
            <p>The Farm Family Project</p>
            <p>
              A Fine Art Photobook by Rob MacInnis Featuring 15 Years of Farm
              Animal Portraits{" "}
            </p>
          </div>

          <div className="info_content">
            <h2>
              $<span> 45,412</span>
              <i className="ti-check-box"> 100%</i>
            </h2>
            <p>Pledged of $10,000 goal</p>

            <ul className="content_details">
              <h4>
                {" "}
                <i className="ti-star"> </i>The Farm Family Project, will be a book
                of 42 photographs of farm animal portraiture I've taken over the
                last 15 years.{" "}
              </h4>
              <h4>
                {" "}
                <i className="ti-star"> </i>Publishing a book will allow more people
                to see these beautiful animals as I see them, and bring more
                people into the conversation.{" "}
              </h4>
            </ul>

            <button>
              <a
                className="modal_4_btn_a"
                href="/create_project/the-farm-family-project"
              >
                Details ...
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="modal_5">
        <div className="exit">
          <i className="fa-solid fa-circle-xmark" onClick={close_prj}></i>
        </div>
        <div className="content1">
          <div className="info_img">
            <img src={project3} alt="" />
            <p>SnackHunter - A magical multiplayer hide-and-seek game</p>
            <p>
              {" "}
              Enchanted snacks face off against hungry mages! Launch SnackHunter
              on your PC and join with your friends on your smartphones.{" "}
            </p>
          </div>

          <div className="info_content">
            <h2>
              $<span> 3,481 </span>
              <i className="ti-check-box"> 100%</i>
            </h2>
            <p>Pledged of $3,154 goal</p>

            <ul className="content_details">
              <li>SnackHunter offers an easy-to-use multiplayer system. </li>
              <li>
                Free to use , up to 16 friends can play together without any
                problems since not everyone has to buy the game.
              </li>
              <h4>
                {" "}
                <i className="ti-star"> </i>SnackHunter là một trò chơi trốn tìm
                nhiều người chơi đầy thú vị và kỳ diệu! Tham gia vào đội Thợ săn
                ma thuật và đuổi theo thức ăn bỏ chạy của bạn hoặc trở thành một
                Snack mê hoặc và trốn khỏi những pháp sư đói.{" "}
              </h4>
            </ul>

            <button>Details ...</button>
          </div>
        </div>
      </div>

      <div className="modal_6">
        <div className="exit">
          <i className="fa-solid fa-circle-xmark" onClick={close_prj}></i>
        </div>
        <div className="content1">
          <div className="info_img">
            <img src={project1} alt="" />
            <p>Waterproof and soft light ball-POOF LIGHT</p>
            <p>
              Hold it, like holding the summer moon, but more than the moon to
              add a soft and gentle.
            </p>
          </div>

          <div className="info_content">
            <h2>
              $<span> 3,481 </span>
              <i className="ti-check-box"> 100%</i>
            </h2>
            <p>Pledged of $3,154 goal</p>

            <button>Details ...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cpn_home() {
  return (
    <div>
      <header>
        <div className="the_left_nav">
          <div className="logo">
            <p>PRO4</p>
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="the_center_nav">
          <a id="homepage" className="fa-solid fa-house icon 1"></a>
          <a id="product" className="fa-solid fa-earth-americas icon 2"></a>
          <a id="projects" className="fa-solid fa-circle-dollar-to-slot icon 3"></a>
        </div>
        <div className="the_right_nav">
          <div className="login_nav">
            <i className="fa-solid fa-right-to-bracket icon"></i>
            <a href="Login">Login</a>
          </div>
        </div>
        {/* 
{{!-- RES_MOBILE --}} */}
        <div className="bars">
          <i className="ti-menu" ></i>
        </div>
        <div className="nav_mobile">
          <div className="close">
            <i className="ti-close"></i>
            Close
          </div>
          <div className="homepage">
            <a
              id="homepage"
              className="fa-solid fa-house icon 1"
              href="homepage"
            ></a>
            <a href="homepage">HOME</a>
          </div>
          <div className="product">
            <a
              id="product"
              className="fa-brands fa-atlassian icon 2"
              href="product"
            ></a>
            <a href="product">POSTS</a>
          </div>
          <div className="projects">
            <a
              id="projects"
              className="fa-solid fa-earth-americas icon 3"
              href="detail"
            ></a>
            <a href="detail">PROJECTS</a>
          </div>
        </div>
      </header>

      <div className="introduce__web">
        <div className="ctn__content">
          <h1 className="content__title">Welcome to PRO4</h1>
          <p>
            A place to call for crowdfunding promote potential and creativity
            projects
          </p>
          <div className="btn">
            <button>GO TO FUNDRAISE</button>
          </div>
        </div>

        <div className="ctn__image">
          <img src={pro4} alt="" />
        </div>
      </div>

      {/* RES_MOBILE  */}
      <div className="introduce__web-mobile">
        <div className="ctn__content-mobile">
          <h1 className="content__title-mobile">Welcome to PRO4</h1>
          <p>
            A place to call for crowdfunding promote potential and creativity
            projects
          </p>
        </div>
      </div>
      {/* <div className="space_1">
                    
                </div> */}
      {/* DONE_RES_MOBILE */}

      <div className="our_impact">
        <h1>Our Impact</h1>
        <div className="card">
          <div className="form_card">
            <img src={project_fund} alt="" />
            <h1>125</h1>
            <p>Projects funded</p>
          </div>
          <div className="form_card">
            <img src={money} alt="" />
            <h1>$1,170,203</h1>
            <p>Total amount invested</p>
          </div>
          <div className="form_card">
            <img src={supporter} alt="" />
            <h1>21080</h1>
            <p>Number of supporters</p>
          </div>
        </div>
      </div>

      {/* <div className="space_2">
                
            </div> */}

      <div className="reason_use">
        <div className="reason_title">
          <h1>Why should you use PRO4?</h1>
          <pre>
            Friendly, easy to use, proactive environment for both startups and
            investors,Easily exchange and cooperate
          </pre>
        </div>
        {/* {{!-- reason_title-mobile --}} */}
        <div className="reason_title-mobile">
          <h1>Why should you use PRO4?</h1>
          <p>
            Friendly, easy to use, proactive environment for both startups and
            investors,Easily exchange and cooperate
          </p>
        </div>

        {/* {{!-- DONE_reason_title-mobile --}} */}
        <div className="info_item-1">
          <img src={financial} alt="" />
          <div className="info_item__content">
            <h2>Financial credibility and reasonableness</h2>
            <p>
              If you do not attract enough capital after the specified time, you
              will not receive any money, all the money recorded through PRO4's
              system is returned to the contributor.
            </p>
          </div>
        </div>

        <div className="info_item-2">
          <div className="info_item__content">
            <h2>MISSION</h2>
            <p>
              Promoting creativity, incubating potential startups that need
              funding, creating a learning environment to exchange knowledge and
              experience for young start-ups
            </p>
          </div>
          <img src={mission4} alt="" />
        </div>
      </div>

      <Highlights />

      
    </div>
  );
}
