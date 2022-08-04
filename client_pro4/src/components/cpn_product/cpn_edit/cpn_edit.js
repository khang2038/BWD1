import React ,{useContext,useEffect,useState} from "react";
import "./cpn_edit.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import "animate.css";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import axios from "axios";
import { useLocation,useParams } from 'react-router-dom'


export default function Cpn_edit() {
  const { state_user } = useContext(AppContext);
  const [data_product_checked, setData_product_checked] = useState(null);
  const location = useLocation();
  const params = useParams();
  console.log(data_product_checked);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product`)
      .then((res) => res.data)
      .then((data) => {
        data.map((rs) => {
          if (rs._id==params.id) {
            setData_product_checked(rs);
          }
        })
      });
  }, []);

  return (
    <div
      class="body_create_prj"
      style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
    >
      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          width: "40%",
          borderRadius: "20px",
          border: "2px solid rgb(212, 179, 179)",
        }}
      >
        <div
          class="author"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <img src={state_user.user.temp.img_author} alt="" />
            <div class="infor_author">
              <h3>{state_user.user.temp.name_author}</h3>
              <p>
                public <i class="fa-solid fa-earth-americas icon 3"></i>{" "}
              </p>
            </div>
          </div>
        </div>
        <form method="POST" action="../../../store/{{Product._id}}?_method=PUT">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              margin: "0 30px",
            }}
          >
            <div class="infor">
              <input
                value={data_product_checked==null? '' :data_product_checked.name}
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
                value={state_user.user.temp.name_author}
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
                value={state_user.user.temp.img_author}
                name="img_author"
              />
            </div>
            <div class="infor">
              <input
                value={data_product_checked==null? '' :data_product_checked.infor}
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
                value={data_product_checked==null? '' :data_product_checked.img1}
                style={{
                  height: "30px",
                  padding: "40px 0 150px 30px",
                  borderRadius: "5px",
                }}
                required="required"
                type="text"
                class="form-control"
                id="img1"
                name="img1"
              />
              <span>Copy link image for here</span>
            </div>
            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
