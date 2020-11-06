import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class PersonalModelView extends Component {
  // Call API to get users' all custom models
  state = {
    modelList: [
      // get this from api
      {
        modelName: "aaa",
        date: "2020/09/10",
        base: "VGG",
      },
      {
        modelName: "bbb",
        date: "2020/09/11",
        base: "VGG",
      },
      {
        modelName: "ccc",
        date: "2020/09/12",
        base: "VGG",
      },
      {
        modelName: "ddd",
        date: "2020/09/13",
        base: "VGG",
      },
      {
        modelName: "ddd",
        date: "2020/09/13",
        base: "VGG",
      },
    ],
  };

  componentDidMount = () => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/signin";
      alert("請先登入再使用本功能!");
    }

    axios
      .get("http://140.119.19.99:8000/upload/load/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const result = res.data.result;
        console.log(result);
        this.setState({ modelList: result });
      })
      .catch((error) => {
        if (!error.response) {
          console.log("network error");
        } else {
          console.log(error.response.data.message);
        }
      });
  };

  renderTable = () => {
    return this.state.modelList.map((model) => (
      <>
        <div className="py-3 d-flex w-100 justify-content-around">
          <div>{model.name}</div>
          <div>{model.date}</div>
          <div>VGG16</div>
          <Link to={{pathname: '/execution'}}><div><button className='btn btn-main'>前往使用</button></div></Link>
        </div>
      </>
    ));
  };

  render() {
    return (
      <div
        className="py-5 d-flex align-items-center flex-column"
        style={{ backgroundColor: "#F6F8F8", fontSize: "20px" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div className="secondary-title">個人模型庫</div>
          <div className="ml-3" id="model-list-add">
            <Link to={{ pathname: "/new-model" }}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <FontAwesomeIcon icon={faPlus} style={{ color: "#F6F8F8" }} />
              </div>
            </Link>
          </div>
        </div>

        {/* table */}
        <div className="w-75 mt-5" id="model-list">
          <div className="py-3 d-flex w-100 justify-content-around w-100">
            <div>專案名稱</div>
            <div>創建日期</div>
            <div>模型基礎</div>
            <div>前往使用</div>
          </div>
          {this.renderTable()}
        </div>

        {/* add button */}
        <div className="border rounded-circle" id="add-model">
          {/* <img src="/images/custom/add.png" width="60" /> */}
        </div>
      </div>
    );
  }
}

export default PersonalModelView;
