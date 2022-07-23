import React from "react";
import "./style_create_project.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import axios from "axios";
import { useState, useEffect } from "react";
//get slug
import { useLocation } from 'react-router-dom'

//import line chart
import { Bar } from 'react-chartjs-2'

//main_prj
function Ctn_main_prj({
  main_title,
  img_big,
  main_content,
  title_money_pledged,
}) {
  return (
    <div className="ctn_main_prj">
      <div style={{ width: "90%" }}>
        <div className="prj_video_img">
          <div
            className="main_prj_video"
          > <img src={require(`../../public/img/imgproject/${img_big}`)} /> </div>
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
          <h2 style={{ color: "black", fontWeight: "bold" }}>{main_title}</h2>
          <h4 style={{ padding: "20px 0" }}>{main_content}</h4>
          <div className="ctn_statistic">
            <div className="ctn_pledged_backers">
              <div className="pledged">
                $<span>0</span>
                <div className="title">pledged of {title_money_pledged} $ goal</div>
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
            <span>0</span> % of {title_money_pledged} $
          </div>
          <div className="form_donate">
            <button className="support_this">SUPPORT THIS</button>
            <button className="follow">FOLLOW</button>
            <div className="ctn_social">
              <i
                className="fa-brands fa-facebook"
                style={{ color: "#39579a" }}
              ></i>
              <i
                className="fa-brands fa-telegram"
                style={{ color: "#38b3f1" }}
              ></i>
              <i
                className="fa-brands fa-twitter"
                style={{ color: "#1d9bf0" }}
              ></i>
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
        main_title={main_prj.main_title}
        img_big={main_prj.img_big}
        main_content={main_prj.main_content}
        title_money_pledged={main_prj.title_money_pledged}
      />
    );
  }
}

//story, faq, comment , statistic

function print_block_content(content_prj) {
  
  if (content_prj !== null) {
    return (
      <Ctn_block_content
        key={content_prj.key}
        story_prj = {content_prj[1][0]}
        faq_prj = {content_prj[2]}
        cmt_prj = {content_prj[3]}
      />
    );
  }
}

function Ctn_block_content(prj) {
  
    //------------statistic bieu do---------------
    // const labels = [
    //   '17/06',
    //   '18/06',
    //   '19/06',
    //   '20/06',
    //   '21/06',
    //   '22/06',
    //   '23/06',
    //   '24/06',
    //   '25/06',
    // ];

    // const data = {
    //   labels: labels,
    //   datasets: [{
    //       label: 'Interaction of the day',
    //       backgroundColor: 'rgb(255, 99, 132)',
    //       borderColor: 'rgb(255, 99, 132)',
    //       data: [2, 9, 5, 2, 16, 24,20,25,26],
          
    //   }]
    // };

    // const data2 = {
    //   labels: labels,
    //   datasets: [{
    //       label: 'Cash flow the day',
    //       backgroundColor: '#0099FF',
    //       borderColor: '#0099FF',
    //       data: [2, 4, 5, 8, 10, 6, 10, 12, 26],
    //   }]
    // };

    // const config = {
    //   type: 'line',
    //   data: data,
    //   options: {}
    // };

    // const config2 = {
    //   type: 'line',
    //   data: data2,
    //   options: {}
    // };

    // const myChart = new Chart(
    //   document.getElementById('myChart'),
    //   config
    // );

    // const myChart_2 = new Chart(
    //   document.getElementById('myChart_2'),
    //   config2
    // );




//story + comment + faq
  
  function close_all_block() {
    var block_story = document.querySelector('.block_story');
    var block_FAQ = document.querySelector('.block_FAQ');
    var block_comments = document.querySelector('.block_comments');
    var block_statistic = document.querySelector('.block_statistic');
    block_FAQ.classList.remove('open');
    block_story.classList.remove('open');
    block_comments.classList.remove('open');
    block_statistic.classList.remove('open');
  }

  function open_story() {
    var block_story = document.querySelector('.block_story');
    close_all_block();
    block_story.classList.add('open');
  }

  function open_FAQ() {
    var block_FAQ = document.querySelector('.block_FAQ');
    close_all_block();
    block_FAQ.classList.add('open');
  }

  function open_comments() {
    var block_comments = document.querySelector('.block_comments');
    close_all_block();
    block_comments.classList.add('open');
  }

  function open_statistic() {
    var block_statistic = document.querySelector('.block_statistic');
    close_all_block();
    block_statistic.classList.add('open');
  }

  return (
    <div className="ctn_content_detail_prj">
        <div className="header_detail_prj">
            <div className="story" onClick={open_story}>
                Story
            </div>
            <div className="FAQ" onClick={open_FAQ}>
                FAQ
            </div>
            <div className="comments" onClick={open_comments}>
                Comments
            </div>
            <div className="statistic" onClick={open_statistic}>
                Statistic
            </div>
        </div>
        <div className="body_detail_prj">
            <div className="left_body_prj">
                <div className="connect">
                    <i className="fa-brands fa-connectdevelop"></i>
                    <p>
                        PRO4 connects creators with backers to fund projects.
                    </p>
                </div>
                <div className="easy">
                    <i className="fa-brands fa-stack-exchange"></i>
                    <p>
                        Easy exchange environment for startups.
                    </p>
                </div>
                <div className="target">
                    <i className="fa-solid fa-comments-dollar" style={{color: 'rgb(134, 134, 100)'}}></i>
                    <p>
                        You’re only charged if the project meets its funding goal by the campaign deadline.
                    </p>
                </div>
            </div>
            <div className="right_body_prj">

                <div className="block_story open">
                    <h1>Story</h1>
                        <div>
                            <div className="img_story">
                              <img src={require(`../../public/img/imgproject/${prj.story_prj.image1}`)}/>
                            </div>
                            <h2>{prj.story_prj.title1}</h2>
                            <div className="img_story" style={{}}>
                            <img src={require(`../../public/img/imgproject/${prj.story_prj.image2}`)}/>

                            </div>

                            <p>{prj.story_prj.content1}</p>
                            <p>{prj.story_prj.content2}</p>
                            <h2>{prj.story_prj.title2}</h2>
                            <p>{prj.story_prj.content3}</p>
                            <div className="img_story" style={{}}>
                            <img src={require(`../../public/img/imgproject/${prj.story_prj.image3}`)}/>

                            </div>
                            <div className="img_story" style={{}}>
                            <img src={require(`../../public/img/imgproject/${prj.story_prj.image4}`)}/>

                            </div>

                            <p>{prj.story_prj.content4}</p>
                            <p>{prj.story_prj.content5}</p>
                            <div className="img_story" style={{}}>
                            <img src={require(`../../public/img/imgproject/${prj.story_prj.image5}`)}/>

                            </div>

                        </div>
                </div>

                <div className="block_FAQ">
                    <h1>Frequently Asked Questions</h1>
                    {prj.faq_prj.map(faq => {
                      return (
                      <div className="bl_FAQ_question">
                          <div className="bl_question">                            
                              <div style={{fontSize: "20px"}}>
                                {faq.question}
                              </div>
                              <div style={{display: 'flex', alignItems: 'center'}}>
                                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                              </div>
                          </div>
                      </div>
                      )
                    })}

                </div>

                <div className="block_comments">
                    <h1>Comment</h1>
                        <div className="comment_action">
                            <div style={{display: 'flex',flexDirection: 'row'}}>
                                
                                <i className="fa-solid fa-photo-film img_comment" style={{color: "#319545"}}></i>
    
                                <i className="fa-solid fa-face-grin-squint status_comment" style={{color: "#d2a32d"}}></i>
                                <form method="POST" style={{width: '100%'}} action="/create_project/save_comment">
                                    <label for="comment"></label>
                                    <input name="comment" id="comment" style={{width: "80%"}} type="text" className="in_cmt" placeholder="Viết bình luận vào đây . "/>
                                    <button className="submit_comment">Send</button>
                                </form>
                            </div>
                        </div>
                        
                        {prj.cmt_prj.map((cmt) => {
                          return (
                            <div style={{margin: '30px 0',padding: '20px',border: '2px solid rgb(188, 172, 172)'}}>
                                <div className="cmt_info">
                                    <div className="cmt_avatar">
                                        <img src={cmt.avatar} alt=""/>
                                    </div>
                                    <div className="cmt_name">
                                      {cmt.name}
                                    </div>
                                </div>
                                <div className="cmt_content">
                                  {cmt.comment}
                                </div>
                            </div>
                            )
                          })}
                        
                    </div>

                <div className="block_statistic">
                    <div className="line_statistic">
                        <h2 style={{margin: "20px 0"}}><i className="fa-solid fa-sun" style={{margin: "0 10px"}}></i> INTERACTIVE</h2>
                        <div style={{width: "100%"}}>
                            {/* <Line 
                            data={{
                              labels : [
                                '17/06',
                                '18/06',
                                '19/06',
                                '20/06',
                                '21/06',
                                '22/06',
                                '23/06',
                                '24/06',
                                '25/06',
                              ],
                              datasets: [{
                                label: 'Interaction of the day',
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: [2, 9, 5, 2, 16, 24,20,25,26],
                              }]

                            }} 
                            height= {400}
                            width={600}
                            /> */}
                        </div>
                        <h2 style={{margin: '40px 0'}}><i className="fa-solid fa-sun" style={{margin: "0 10px"}}></i> CASH FLOW</h2>
                        <div style={{width: "100%"}}>
                            <canvas id="myChart_2"></canvas>
                        </div>
                    </div>  
                </div>

                <div className="block_end">
                    <p>Looking for more information ? Check the project <a href="" style={{color: "#05ce78;"}}>FAQ</a> <i className="fa-solid fa-clipboard-question"></i> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default function Cpn_create_project() {
  const [data_cr_prj, setData_cr_prj] = useState(null);
 
  const location = useLocation();

  useEffect(() => {
    if (data_cr_prj === null) {
      axios
        .get(`http://localhost:5000${location.pathname}`)
        .then((res) => res.data)
        .then((data) => {
          setData_cr_prj(data);
        });
    }
  }, []);

  // useComponentWillMount(
  //   if (main_prj.data === null) {
  //     get_main_prj().then((res) => {
  //       setMain_prj(res)
  //     })
  //   }
  // )

  return <div>
    {print_main_project(data_cr_prj==null ? null : data_cr_prj[0])}
    {print_block_content(data_cr_prj==null ? null : data_cr_prj)}
  </div>;
}
