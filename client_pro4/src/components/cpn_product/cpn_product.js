import React from "react";
import "./style_product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import { useEffect, useState } from "react";
import axios
 from "axios";

const body = document.querySelector("body");

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


function Ctn_product_get_data(get) {
  return (
    <div class={`Infor ${get.product.name}`}>
      <div class="author">
        {
          validURL(get.product.img_author)==false && check_link_data(get.product.img_author)==false ? 
          <img src={require(`../../public/${get.product.img_author}`)} />
          : 
          <img src={get.product.img_author} alt=""/>
        }

        <div class="infor_author">
          <span>{get.product.name_author}</span>
          <p>
            1m <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
          </p>
        </div>
      </div>
      <div class="info-des">
        <p>{get.product.infor}</p>
        <div class="img-App">
          {
            validURL(get.product.img1)==false && check_link_data(get.product.img1)==false ? 
            <img src={require(`../../public/${get.product.img1}`)} />
            : 
            <img src={get.product.img1} alt=""/>
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
          <a href="mess" class="investment">
            Investment
          </a>
        </div>
      </div>

      <div class="ctn_comment" style={{ height: "100px" }}>
        <div class="bl__ctn_comment" style={{ width: "90%" }}>
          <img class="avatar" src="" />
          <form action="">
            <input type="text" placeholder="Write a comment ... " />
            <button>
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function print_Ctn_product_get_data(data_product) {
  if (data_product !== null) {
    data_product=data_product.reverse();
    return (
      <div>
        {
          data_product.map(temp => (
            <Ctn_product_get_data
              key={temp._id}
              product = {temp}
            />
          )
            // console.log(1);
          )
        }
      </div>
    );
  }
}

export default function Cpn_product() {
  const [data_product, setData_product] = useState(null);

  useEffect(() => {
    if (data_product == null) {
      // console.log(1);
      axios 
        .get(`http://localhost:5000/product`)
        .then((res) => res.data)
        .then((data) => {
          setData_product(data);
        });
    }
  }, []);

  function handle_light_dark() {
    body.classList.toggle("dark");
    var logo1 = document.querySelector(".logo1");
    var logo2 = document.querySelector(".logo2");
    if (body.classList.contains("dark")) {
      Object.assign(logo1.style, {
        display: "none",
      });
      Object.assign(logo2.style, {
        display: "block",
      });

      // modeText.innerText="Light Mode";
    } else {
      Object.assign(logo2.style, {
        display: "none",
      });
      Object.assign(logo1.style, {
        display: "block",
      });
      // modeText.innerText="Dark Mode";
    }
  }

  return (
    <div>
      <div class="page">
        <ul class="the_left_page_product letf_page">
          <div class="menu">
            <a href="add_product">
              {" "}
              <li class="menu-create">
                <i
                  class="fa-solid fa-file-export"
                  style={{ fontSize: "20px", marginRight: "15px" }}
                ></i>
                <span>POST PROJECT</span>
              </li>
            </a>
            <a href="me">
              {" "}
              <li class="menu-me">
                <i
                  class="fa-solid fa-calendar"
                  style={{ fontSize: "20px", marginRight: "15px" }}
                ></i>
                <span>MY PROJECT</span>
              </li>
            </a>
            <a href="Game">
              {" "}
              <li class="menu-game">
                <i class="fa-solid fa-gamepad icon"></i>
                <span>Game</span>
              </li>
            </a>
            <a href="App">
              <li class="menu-app">
                <i class="fa-brands fa-app-store icon"></i>
                <span>App</span>
              </li>
            </a>
            <a href="Ai">
              {" "}
              <li class="menu-AI">
                <i class="fa-solid fa-robot icon"></i>
                <span>AI</span>
              </li>
            </a>
            <a href="costume">
              <li class="menu-costume">
                <i class="fa-solid fa-shirt icon"></i>
                <span>Costume</span>
              </li>
            </a>
            <a href="ecommerce">
              {" "}
              <li class="menu-ecommerce">
                <i class="fa-brands fa-shopify icon"></i>
                <span>Ecommerce</span>
              </li>
            </a>
            <a href="home">
              {" "}
              <li class="menu-logout">
                <i
                  class="fa-solid fa-arrow-right-from-bracket"
                  style={{ fontSize: "20px", marginRight: "15px" }}
                ></i>
                <span>Log out</span>
              </li>
            </a>
          </div>
          <li class="mode">
            <div class="moon-sun">
              <i class="fa-solid fa-moon moon "></i>
              <i class="fa-solid fa-sun sun"></i>
            </div>
            <span class="mode-text">Dark Mode</span>
            <div class="toggle-switch" onClick={handle_light_dark}>
              <span class="switch"></span>
            </div>
          </li>
        </ul>

        <div class="center_page">
          {
              print_Ctn_product_get_data(data_product)
          }
          <div class="Infor AI">
            <div class="author">
              <img
                src={require("../../public/content/AI/author/242671915_948353739079553_3477742332105636451_n.jpg")}
              />
              <div class="infor_author">
                <span>Trần Văn Khang</span>
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
                    src={require("../../public/content/AI/Smart Edge/Smart Edge.png")}
                    alt=""
                  />
                  <img
                    class="item2"
                    src={require("../../public/content/AI/Smart Mobility/Hình/Smart Mobility1.jpg")}
                    alt=""
                  />
                </div>
                <img
                  class="item3"
                  src={require("../../public/content/AI/Smart Mobility/Hình/Smart Mobility2.jpg")}
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div class="decription">
              <div class="emotion">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment comment" onClick></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
              <div class="donate-investment">
                <a href="donate">
                  <p class="donate">Donate</p>
                </a>
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
          <div class="Infor Game">
            <div class="author">
              <img
                src={require("../../public/content/Game/author/14720536_1797565987159824_7956249866022643798_n_njek.jpg")}
                alt=""
              />
              <div class="infor_author">
                <span>Trực tiếp game</span>
                <p>
                  5h <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                </p>
              </div>
            </div>
            <div class="info-des">
              <p>Dự án được thực hiện bởi DUT team </p>
              <p>
                Thần Trùng (The Death) là dự án game kinh dị do DUT Studio (chỉ
                gồm 3 thành viên) sản xuất, lấy bối cảnh 100% tại Việt Nam.
                Fanpage studio:{" "}
                <a href="https://www.facebook.com/dutstudiovn">
                  {" "}
                  https://www.facebook.com/dutstudiovn{" "}
                </a>
                Trailer game có những hình ảnh rùng rợn, khán giả cân nhắc trước
                khi xem. Các nhân vật, tình huống và sự kiện trong video này đều
                là sản phẩm hư cấu. Mọi sự trùng hợp nếu có chỉ là ngẫu nhiên.
                Gameplay, nhân vật và bối cảnh trong trailer có thể sẽ được sửa
                đổi trong tương lai. Trong trailer có sử dụng một số hình ảnh
                tranh cổ động phòng chống dịch COVID - 19 (Bức tranh với thông
                điệp “Ở nhà là yêu nước” của họa sỹ Lê Đức Hiệp; tranh của họa
                sĩ Lưu Yên Thế) cùng với bài hát nổi tiếng "Đồi Thông Hai Mộ"
                của nhạc sĩ Hồng Vân và trình bày bởi ca sĩ Hoàng Oanh.
              </p>
              <div class="video-game">
                <video style={{ width: "100%" }} controls>
                  <source
                    src={require("../../public/content/Game/Thần trùng/than-trung-gameplay-trailer-game-kinh-di-viet-nam-vietnam-horror-game-dut-studio-2021.mp4")}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <hr />
            <div class="decription">
              <div class="emotion">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment comment1" onClick></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
              <div class="donate-investment">
                <a href="donate">
                  {" "}
                  <p class="donate">Donate</p>{" "}
                </a>
                <p class="investment">Investment</p>
              </div>
            </div>
            <div class="ctn_comment_1" style={{ height: "100px" }}>
              <div class="bl__ctn_comment_1" style={{ width: "90%" }}>
                <img class="avatar" src="{{users.img_author}}"></img>
                <input type="text" placeholder="Viết bình luận ... " />
              </div>
            </div>
          </div>
          <div class="Infor Costume">
            <div class="author">
              <img
                src={require("../../public/content/Costume/author/20170417234658-thoi-trang-xuan-he-2017.jpg")}
                alt=""
              />
              <div class="infor_author">
                <span>Xuân Lê</span>
                <p>
                  6h <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
                </p>
              </div>
            </div>
            <div class="info-des">
              <p>
                Trong vài năm trở lại đây, thời trang Việt đã có sự dịch chuyển
                đến với con đường bền vững. Các nhà thiết kế đã và đang quan tâm
                nhiều hơn đến các giải pháp giúp cho nền thời trang trở nên thân
                thiện hơn với môi trường thông qua nhiều hoạt động khác nhau, từ
                tận dụng chất liệu các loại chất liệu cũ đến sử dụng các phương
                pháp thiết kế mới, hay quan tâm đến công nghệ… nhằm biến cho sản
                phẩm thời trang vừa thân thiện với môi trường vừa gần gũi với
                chọn lựa mua sắm của khách hàng. Trên hành trình xanh hơn mỗi
                ngày đó, sự sáng tạo từ các các sinh viên thời trang cho đến các
                nhà thiết kế Việt thành danh, đã tạo nên những tác phẩm thú vị.
                Họ đã biến rác thải, vải thừa hay quần áo cũ thành những thiết
                kế đầy lãng mạn và mộng mơ. Nhà thiết kế Chung Thanh Phong cũng
                tạo nên trang phục cũng tạo nên những mẫu đầm dạ hội với bao ni
                lông và vỏ chai nhựa. Không dừng lại ở đó, thương hiệu More Than
                Blue của Christy tận dụng từng chút vải thừa để ra mắt bộ sưu
                tập Chắp vá sau những tháng giãn cách xã hội. Ấn tượng hơn với
                SAND khi biết được rằng SAND Thu Đông đã dùng những mét vải cuối
                cùng của kho lưu trữ hay bộ sưu tập Reborn của NTK Xuân Lê với
                sự kêu gọi đóng góp trang phục cũ từ cộng đồng. Cùng
                Style-Republik điểm qua những nét ấn tượng từ làn sóng
                “upcycling” của thời trang Việt.
              </p>
              <div class="img-Costume">
                <img
                  class="img_item1"
                  src={require("../../public/content/Costume/Upcycling/ntk-xuan-le-style-reborn-khanh-linh-deponline-01-20210410.jpeg")}
                  alt=""
                />
                <div class="img-item">
                  <img
                    class="img_item2"
                    src={require("../../public/content/Costume/Upcycling/ntk-xuan-le-style-reborn-khanh-linh-deponline-02-20210410.jpeg")}
                    alt=""
                  />
                  <img
                    class="img_item3"
                    src={require("../../public/content/Costume/Upcycling/ntk-xuan-le-style-reborn-khanh-linh-deponline-05-20210410.jpeg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr />
            <div class="decription">
              <div class="emotion">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment comment2" onClick></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
              <div class="donate-investment">
                <a href="donate">
                  {" "}
                  <p class="donate">Donate</p>{" "}
                </a>
                <p class="investment">Investment</p>
              </div>
            </div>

            <div
              class="ctn_comment_2"
              style={{ height: "100px", position: "relative" }}
            >
              <div class="bl__ctn_comment_2" style={{ width: "90%" }}>
                <img class="avatar" src="{{users.img_author}}"></img>
                <input type="text" placeholder="Viết bình luận ... " />
              </div>
            </div>
          </div>
        </div>

        <div class="the_right_page">
          <ul class="investor_rankings">
            <p class="ranking"> Investor Rankings </p>
            <li class="Investor 1">
              <img
                src={require("../../public/content/277822595_675257793692053_156162619594281754_n.jpg")}
                alt=""
              />
              <div class="infor_Investor">
                <span>Trần Hoàng</span>
                <div class="star">
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                </div>
              </div>
            </li>
            <li class="Investor 2">
              <img
                src={require("../../public/content/shark-hung-la-ai.jpg")}
                alt=""
              />
              <div class="infor_Investor">
                <span>Phạm Thanh Hưng</span>
                <div class="star">
                  <i class="fa-regular fa-star"></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                </div>
              </div>
            </li>
            <li class="Investor 3">
              <img
                src={require("../../public/content/ElonMusk-2017-stageshot-9046-1650013535.jpg")}
                alt=""
              />
              <div class="infor_Investor">
                <span>Elon Musk</span>
                <div class="star">
                  <i class="fa-regular fa-star"></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "rgb(255, 230, 0)" }}
                    class="fa-solid fa-star"
                  ></i>
                </div>
              </div>
            </li>
          </ul>

          <ul class="Top_project Top_project_fix">
            <hr />
            <p class="ranking"> Top Project</p>
            <a href="App">
              <li class="Project 1">
                <img
                  src={require("../../public/content/App/Tích hợp thực tế tăng cường (AR)/Thực tế ảo.jpeg")}
                  alt=""
                />
                <div class="infor_project">
                  <span>Tích hợp thực tế tăng cường (AR)</span>
                </div>
              </li>
            </a>
            <a href="App">
              <li class="Project 2">
                <img
                  src={require("../../public/content/App/Công nghệ Beacon/Công nghệ Beacon.jpg")}
                  alt=""
                />
                <div class="infor_project">
                  <span>Công nghệ Beacon Sự phát triển</span>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}