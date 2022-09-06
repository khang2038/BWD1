
import { Link } from "react-router-dom";
import "./cpn_modal_profile.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Cpn_prj_prf_user(props){
  return (
    <div className="card_project_user">
    <div>
      <img src={props.image} alt="" />
    </div>
    <h1>Pruto: Mesh Action Sports Communicator with LED Light</h1>
    <p>
      For Skiing, Yachting, Cycling and all Sports Players. Have Fun and
      Stay Connected, Go Adventure Boldly with Pruto!
    </p>
  </div>
  )
}

export default function Cpn_modal_profile(props) {
    function exit_profile_hoang() {
        let cpn_modal_profile = document.querySelector(".cpn_modal_profile");
        Object.assign(cpn_modal_profile.style ,{
          display : "none",
        })
      }
    
    return (
        <div className="cpn_modal_profile">
            <div className="profile_header">
                <div className="header_avatar">
                    <img src={props.avatar}/>
                </div>
                <div className="header_title">
                    <h2 style={{margin : '2% 0 0 0'}}>{props.name}</h2>
                    <div className="social_icon">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-telegram"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div style={{height : '100%',display : 'flex'}}>
                    <i style={{fontSize: '30px' , margin : 'auto 0'}} class="fa-solid fa-right-from-bracket" onClick={exit_profile_hoang}></i>
                </div>
            </div>

            

            <div className="profile_body">
                <div class="ctn_about_me open">
                <div class="info_user" style={{width : '50%',}}>
                  <div class="label">
                    <p style={{ margin: "20px 0" ,fontSize : '25px' }}>
                      Hi! Welcome to my wall
                      <i
                        class="fa-solid fa-pencil"
                        style={{
                          fontSize: "15px",
                          marginLeft: "5px",
                          marginBottom: "2.5px",
                        }}
                      ></i>
                    </p>
                    <hr style={{ width: "60%", margin: "20px auto" }} />
                  </div>
                  <div class="infor">
                    <table>
                      <tr>
                        <td>Name</td>
                        <td class="user_name">
                          {props.name}
                        </td>
                      </tr>
                      <tr>
                        <td>D.O.B</td>
                        <td class="user_dob">10/09/1972</td>
                      </tr>
                      <tr>
                        <td class="user_tel">Phone</td>
                        <td>+84 326 xxx xxxx</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td class="user_address">Ha Noi, Viet Nam</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td class="user_email">gianglt.21it@vku.udn.vn</td>
                      </tr>
                      <tr>
                        <td>Strength</td>
                        <td>Business, Invest</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div style={{margin : '150px 0'}} class="project_demo_user">
                  <ul>
                    <li style={{ zIndex: "6" }}>
                      <a href="https://www.facebook.com/hungpham7968">
                        <span>
                          <i class="fa-brands fa-facebook-f"></i>
                        </span>
                        Facebook
                      </a>
                    </li>
                    <li style={{ zIndex: "5" }}>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-telegram"></i>
                        </span>
                        Telegram
                      </a>
                    </li>
                    <li style={{ zIndex: "4" }}>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-twitter"></i>
                        </span>
                        Twitter
                      </a>
                    </li>
                    <li style={{ zIndex: "3" }}>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-instagram"></i>
                        </span>
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                </div>

                <div className="profile_user_card">
                    <div style={{display: 'flex',justifyContent : 'center',}}>
                      <div className="option_profile_user">
                        <div>ABOUT ME</div>
                        <div>POST</div>
                        <div>PROJECT</div>
                        <div>MORE <i class="fa-solid fa-caret-down"></i></div>
                      </div>
                    </div>

                    <div class="Infor" style={{margin: "0 auto 30px auto"}}>
                        <div class="author">
                        <img
                            src={props.avatar}
                        />
                        <div class="infor_author">
                            <span>{props.name}</span>
                            <p>
                            1h <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                            </p>
                        </div>
                        </div>
                        <div class="info-des">
                        <p>Dự án được thực hiện bởi team Pro4! </p>
                        <p>Giới thiệu sơ lược:</p>
                        <p>
                            Smart Edge là giải pháp phân tích video đa vật thể, áp dụng mô
                            hình học sâu để biến đổi các camera và các thiết bị kiểm soát
                            quyền truy cập thông thường thành những hệ thống thông minh. Sản
                            phẩm cho phép chuyển đổi hình ảnh thành thông tin chi tiết hữu
                            ích để tạo ra các giá trị kinh doanh cho doanh nghiệp. Đặc biệt,
                            áp dụng mô hình học sâu, sản phẩm có thể nhận diện khuôn mặt ổn
                            định, kể cả khi người dùng đang sử dụng khẩu trang. Ngoài mục
                            đích thương mại, với dòng sản phẩm này, VinAI hi vọng có thể
                            chung tay bảo vệ sức khỏe cộng đồng trong bối cảnh đại dịch còn
                            đang diễn biến phức tạp.
                        </p>
                        <div class="img">
                            <div class="img1">
                            <img
                                class="item1"
                                src=""
                                alt=""
                            />
                            <img
                                class="item2"
                                src=""
                                alt=""
                            />
                            </div>
                            <img
                            class="item3"
                            src=""
                            alt=""
                            />
                        </div>
                        </div>
                        <hr />
                        <div class="decription">
                        <div class="emotion">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment comment"></i>
                            <i class="fa-solid fa-share-nodes"></i>
                        </div>
                        <div class="donate-investment">
                            <Link to="../donate">
                            <p class="donate">Access</p>
                            </Link>
                            <p class="investment">Investment</p>
                        </div>
                        </div>

                        <div class="ctn_comment" style={{ height: "100px" }}>
                        <div class="bl__ctn_comment" style={{ width: "90%" }}>
                            <img class="avatar" src="{{users.img_author}}"></img>
                            <input type="text" placeholder="Viết bình luận ... " />
                        </div>
                        </div>
                    </div>

                    <div class="Infor" style={{margin: "0 auto 30px auto"}}>
                        <div class="author">
                        <img
                          src={props.avatar}
                        />
                        <div class="infor_author">
                            <span>{props.name}</span>
                           
                            <p>
                            1h <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                            </p>
                        </div>
                        </div>
                        <div class="info-des">
                        <p>Dự án được thực hiện bởi team Pro4! </p>
                        <p>Giới thiệu sơ lược:</p>
                        <p>
                            Smart Edge là giải pháp phân tích video đa vật thể, áp dụng mô
                            hình học sâu để biến đổi các camera và các thiết bị kiểm soát
                            quyền truy cập thông thường thành những hệ thống thông minh. Sản
                            phẩm cho phép chuyển đổi hình ảnh thành thông tin chi tiết hữu
                            ích để tạo ra các giá trị kinh doanh cho doanh nghiệp. Đặc biệt,
                            áp dụng mô hình học sâu, sản phẩm có thể nhận diện khuôn mặt ổn
                            định, kể cả khi người dùng đang sử dụng khẩu trang. Ngoài mục
                            đích thương mại, với dòng sản phẩm này, VinAI hi vọng có thể
                            chung tay bảo vệ sức khỏe cộng đồng trong bối cảnh đại dịch còn
                            đang diễn biến phức tạp.
                        </p>
                        <div class="img">
                            <div class="img1">
                            <img
                                class="item1"
                                src=""
                                alt=""
                            />
                            <img
                                class="item2"
                                src=""
                                alt=""
                            />
                            </div>
                            <img
                            class="item3"
                            src=""
                            alt=""
                            />
                        </div>
                        </div>
                        <hr />
                        <div class="decription">
                        <div class="emotion">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment comment"></i>
                            <i class="fa-solid fa-share-nodes"></i>
                        </div>
                        <div class="donate-investment">
                            <Link to="../donate">
                            <p class="donate">Access</p>
                            </Link>
                            <p class="investment">Investment</p>
                        </div>
                        </div>

                        <div class="ctn_comment" style={{ height: "100px" }}>
                        <div class="bl__ctn_comment" style={{ width: "90%" }}>
                            <img class="avatar" src="{{users.img_author}}"></img>
                            <input type="text" placeholder="Viết bình luận ... " />
                        </div>
                        </div>
                    </div>

                    <div class="Infor" style={{margin: "0 auto 30px auto"}}>
                        <div class="author">
                        <img
                          src={props.avatar}
                        />
                        <div class="infor_author">
                            <span>{props.name}</span>
                            <p>
                            1h <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                            </p>
                        </div>
                        </div>
                        <div class="info-des">
                        <p>Dự án được thực hiện bởi team Pro4! </p>
                        <p>Giới thiệu sơ lược:</p>
                        <p>
                            Smart Edge là giải pháp phân tích video đa vật thể, áp dụng mô
                            hình học sâu để biến đổi các camera và các thiết bị kiểm soát
                            quyền truy cập thông thường thành những hệ thống thông minh. Sản
                            phẩm cho phép chuyển đổi hình ảnh thành thông tin chi tiết hữu
                            ích để tạo ra các giá trị kinh doanh cho doanh nghiệp. Đặc biệt,
                            áp dụng mô hình học sâu, sản phẩm có thể nhận diện khuôn mặt ổn
                            định, kể cả khi người dùng đang sử dụng khẩu trang. Ngoài mục
                            đích thương mại, với dòng sản phẩm này, VinAI hi vọng có thể
                            chung tay bảo vệ sức khỏe cộng đồng trong bối cảnh đại dịch còn
                            đang diễn biến phức tạp.
                        </p>
                        <div class="img">
                            <div class="img1">
                            <img
                                class="item1"
                                src=""
                                alt=""
                            />
                            <img
                                class="item2"
                                src=""
                                alt=""
                            />
                            </div>
                            <img
                            class="item3"
                            src=""
                            alt=""
                            />
                        </div>
                        </div>
                        <hr />
                        <div class="decription">
                        <div class="emotion">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment comment"></i>
                            <i class="fa-solid fa-share-nodes"></i>
                        </div>
                        <div class="donate-investment">
                            <Link to="../donate">
                            <p class="donate">Access</p>
                            </Link>
                            <p class="investment">Investment</p>
                        </div>
                        </div>

                        <div class="ctn_comment" style={{ height: "100px" }}>
                        <div class="bl__ctn_comment" style={{ width: "90%" }}>
                            <img class="avatar" src="{{users.img_author}}"></img>
                            <input type="text" placeholder="Viết bình luận ... " />
                        </div>
                        </div>
                    </div>
                    
                    <div style={{width : '100%',display :'flex' , justifyContent : 'center'}}>
                      <div style={{textAlign : 'center', fontSize : '25px', marginBottom : '30px'}}>See more . . .</div>
                    </div>
                    
                    <div style={{marginBottom : '30px',width : '100%',display :'flex' , justifyContent : 'center'}}>
                      <hr style={{width : '70%'}} />
                    </div>

                    <div className="prj_profile_user">
                      <h1 style={{textAlign : 'center'}}>My project</h1>
                      <div style={{margin : '20px 0',width : '100%',display : 'flex',justifyContent: 'center'}}>

                        <Cpn_prj_prf_user image="https://ksr-ugc.imgix.net/assets/038/081/016/648ce214c7c28da558eaf30f61f56d23_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658869940&gif-q=50&lossless=true&s=8c68074e15b1fd239d8361d03ef93a54"/>
                        
                        <Cpn_prj_prf_user image="https://ksr-ugc.imgix.net/assets/038/081/016/648ce214c7c28da558eaf30f61f56d23_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658869940&gif-q=50&lossless=true&s=8c68074e15b1fd239d8361d03ef93a54"/>
                        
                      </div>
                      <ul>
                        <div style={{border : '1px double #333',width: '45%',display : 'flex', justifyContent: 'center',backgroundColor: '#e4f8ff',borderRadius : '100px'}}>
                          <i style={{margin : 'auto 0',fontSize : '15px'}} class="fa-solid fa-backward"></i>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                          <i style={{margin : 'auto 0',fontSize : '15px'}} class="fa-solid fa-forward"></i>
                        </div>
                      </ul>
                    </div>
                </div>
            
            </div>
        </div>
    )
}























