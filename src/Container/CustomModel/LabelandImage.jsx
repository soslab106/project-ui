import React, { Component, useState, useEffect } from "react";
import Image from "../../Components/Image";
import { Link, useLocation } from "react-router-dom";
import { isConditionalExpression, isConstructorDeclaration } from "typescript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

function LabelandImage() {
  let location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(true);
  const [label, setlabel] = useState("");
  const [labelList, setlabelList] = useState([]);
  const [imageList, setimageList] = useState([]);
  const [currentLabel, setcurrentLabel] = useState("a");
  const [currentimageList, setcurrentimageList] = useState([]);

  const newlabel = (label) => {
    setlabelList((oldlabelList) => [...oldlabelList, label]);
  };

  function handleAddButtonClick() {
    if (label === "") {
      alert("請輸入標籤名稱");
    } else {
      newlabel(label);
      setlabel("");
    }
  }
  function handlelable(e) {
    setlabel(e.target.value);
  }

  function checkhaslabelimage(origList) {
    for (let i in origList) {
      if (currentLabel == Object.keys(origList[i])) {
        return [true, i];
      }
    }
    return [false, -100];
  }

  function handleFileChange(e) {
    const origFile = [...imageList];
    const [flag, index] = checkhaslabelimage(origFile);
    if (e.target.files != undefined) {
      if (flag) {
        const temp = [...Object.values(origFile[index])];
        temp[0].push(...e.target.files);
        origFile[index][currentLabel] = temp;
        setimageList(origFile);
      } else {
        let obj = {};
        obj[currentLabel] = [...e.target.files];
        origFile.push(obj);
        setimageList(origFile);
      }
      setcurrentimageList([...e.target.files]);
    }
  }

  function handleshowLabel(event) {
    setcurrentLabel(event.currentTarget.getAttribute("name"));
  }

  function getAPI() {
    setLoading(true);
    let formData = new FormData();
    formData.append("pjName", location.state["pjName"]);
    formData.append("learningRate", location.state["learningRate"]);
    formData.append("epoch", location.state["epoch"]);
    imageList.forEach((each) => {
      for (const value of Object.values(each)[0]) {
        const train_name = `train_${Object.keys(each)[0]}`;
        formData.append(train_name, value);
      }
    });
    if (
      // Object.keys(trainingData).length === 0 &&
      // trainingData.constructor === Object
      Array.isArray(imageList) &&
      imageList.length
    ) {
      axios
        .post("http://140.119.19.99:8000/upload/trans/", formData, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `JWT ${localStorage.getItem("token").toString()}`,
          },
        })
        .then((res) => {
          console.log(res.status);
          setLoading(false);
          setFinished(true);
        })
        .catch((error) => {
          console.log(error.response.headers);
        });
    } else {
      alert("未上傳圖片！");
    }
  }

  function deleteLabel(e) {
    let label = e.target.getAttribute("name");
    let newLabels = labelList;
    setlabelList(newLabels.filter((oldLabel) => oldLabel != label));
    // console.log(labelList);
  }

  function renderImgPreviews() {
    return currentimageList.map((e) => (
      <Image imgPath={window.URL.createObjectURL(e)} />
    ));
  }

  function handlecurrentImage() {
    let currentLabelList = [];
    imageList.forEach((each) => {
      currentLabelList.push(Object.keys(each)[0]);
    });
    let [flag, index] = checkhaslabelimage(imageList);
    console.log(flag, index);
    if (flag) {
      setcurrentimageList(imageList[index][currentLabel]);
    } else {
      setcurrentimageList([]);
    }
  }

  useEffect(() => {
    handlecurrentImage();
    // const [flag, index] = checkhaslabelimage(imageList);
    // console.log(flag);
    // console.log(index);
    console.log(currentLabel);
    console.log(currentimageList);
    console.log(imageList);
  }, [currentLabel]);

  // useEffect(() => {
  // handlecurrentImage();
  // const [flag, index] = checkhaslabelimage(imageList);
  // console.log(flag);
  // console.log(index);
  console.log(currentLabel);
  console.log(currentimageList);
  // console.log(imageList);
  // }, [currentimageList]);

  function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  function renderPlantPics() {
    let pics = [];
    for (let i = 0; i < 52; i++) {
      pics.push(
        <img
          className="m-1"
          src={`/images/custom/plants/${i}.jpg`}
          width="200"
        />
      );
    }
    return pics;
  }

  function renderPlantLabels() {
    const labels = [
      "月桃",
      "屯鹿月桃",
      "屈尺月桃",
      "高良薑",
      "水茄苳",
      "洋紫荊",
      "羊蹄甲",
      "射干",
      "芥藍菜",
      "朝鮮紫珠",
      "茶梅",
      "細葉山茶",
      "紫葳",
      "重瓣麥李",
      "火炬刺桐",
      "火炬薑",
      "臺灣山菊",
      "山芙蓉",
      "臺灣欒樹",
      "大花紫薇",
      "九芎",
      "金銀花",
      "紅花繼木",
      "龍爪花",
      "臺灣野牡丹藤",
      "密花野牡丹藤",
      "野牡丹",
      "含笑",
      "小葉魚藤",
      "芒",
      "紅玉葉金花",
      "荷花",
      "鈍頭緬梔",
      "紅花緬梔",
      "水黃皮",
      "菲律賓紫檀",
      "炮仗花",
      "豆梨",
      "使君子",
      "石斑木",
      "金毛杜鵑",
      "烏來杜鵑",
      "廣東薔薇",
      "黃花鼠尾草",
      "火燄木",
      "太魯閣繡線菊",
      "風鈴木",
      "毛風鈴木",
      "黃花夾竹桃",
      "大鄧伯花",
      "黃荊",
      "紫藤",
    ];
    let plantLabels = [];
    for (let i = 0; i < 8; i++) {
      plantLabels.push(
        <tr>
          <td style={{ background: "#F6F8F8", border: "1px solid #ffffff" }}>
            {labels[i]}
          </td>
          <td style={{ background: "#F6F8F8", border: "1px solid #ffffff" }}>
            {labels[i + 1]}
          </td>
          <td style={{ background: "#F6F8F8", border: "1px solid #ffffff" }}>
            {labels[i + 2]}
          </td>
          <td style={{ background: "#F6F8F8", border: "1px solid #ffffff" }}>
            {labels[i + 3]}
          </td>
          <td style={{ background: "#F6F8F8", border: "1px solid #ffffff" }}>
            {labels[i + 4]}
          </td>
          <td style={{ background: "#F6F8F8", border: "1px solid #ffffff" }}>
            {labels[i + 5]}
          </td>
          <td style={{ background: "#F6F8F8", border: "1px solid #ffffff" }}>
            {labels[i + 6]}
          </td>
          <td style={{ background: "#F6F8F8", border: "1px solid #ffffff" }}>
            {labels[i + 7]}
          </td>
        </tr>
      );
    }
    return plantLabels;
  }

  const loadingPage = (
    <div className="loading d-flex flex-column align-items-center justify-content-center">
      <img src="/images/Loading_2.gif" width="50" />
      <div className="mt-3">Loading...</div>
    </div>
  );

  function labelListHtml() {
    return labelList.map((e) => <span className="ml-2">e</span>);
  }

  const finishedPage = (
    <div className="background-close d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between">
          <div className="box text-center p-5">
            <div className="main-title">訓練完成！</div>
            <div className="content-color pt-3 third-title">
              模型名稱:{" "}
              <span className="main-color" style={{ fontWeight: "1000" }}>
                {location.state.pjName}
              </span>
            </div>
            <div className="content-color">Labels: {labelListHtml()}</div>
            <Link to={{pathname:'/execution'}}><button className="btn-main btn">前往使用</button></Link>
          </div>
        </div>
    </div>
  );

  const plantModal = (
    <div
      className="background-close d-flex justify-content-center align-items-center"
      onClick={() => setShowModal(false)}
    >
      <div className="plant-modal" onClick={(e) => modalClick(e)}>
        <div className="d-flex justify-content-between">
          <h4 className="third-title">台北植物園花曆植物開花照片資料集</h4>
          <h4 className="close-modal" onClick={() => setShowModal(false)}>
            &times;
          </h4>
        </div>
        <div
          className="content-color text-center mt-3"
          style={{ height: "90%", overflow: "auto" }}
        >
          <div>
            本服務可採用台北植物園開花照片資料及進行訓練，預設類別如下52類。
            <br />
            若選擇此資料及進行訓練，系統會自動為52個標籤各選20張照片作為訓練圖片，
            <br />
            並且在訓練結果頁回傳每類各五張可測試圖片，供使用者進行模型測試
          </div>
          <div className="info-title mt-3">辨識類別</div>
          <table className="mt-1 justify-content-between" id="plant-table">
            {renderPlantLabels()}
          </table>

          <div className="info-title mt-3">圖片示例</div>
          <div className="mt-1 justify-content-between">
            {renderPlantPics()}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {loading ? loadingPage : ""}
      {finished ? finishedPage : ""}
      {showModal ? plantModal : ""}
      <div className="panel">
        <div className="container py-5">
          <div className="pb-3">
            <div className="secondary-title mb-3">設定標籤及上傳圖片</div>
            <span className="trainning-progress-bar">
              &#x25BA; 建立客製化模型
            </span>
            <span className="trainning-progress-bar">&#x25BA; 模型設定</span>
            <span className="trainning-progress-bar-active">
              &#x25BA; 設定標籤及上傳圖片
            </span>
            <span className="trainning-progress-bar">&#x25BA; 開始訓練</span>
          </div>
          <div className="d-flex flex-wrap">
            <div className="col-12 col-md-3" id="labelandimage-left">
              <div
                id="label-config"
                className="d-flex flex-column justify-content-start align-items-center box"
              >
                <div className="third-title my-3">標籤</div>
                <div className="d-flex flex-column justify-content-center align-items-center w-100">
                  {labelList ? (
                    labelList.map((label) => (
                      <div
                        className="d-flex justify-content-between align-items-center labellist-label w-100"
                        style={{ height: "40px" }}
                        name={label}
                      >
                        <div
                          name={label}
                          style={{ width: "100%" }}
                          onClick={handleshowLabel}
                        >
                          {label}
                        </div>
                        <input
                          id="file"
                          type="file"
                          onChange={handleFileChange}
                          multiple
                        />
                        <div className="d-flex">
                          <label
                            for="file"
                            name={label}
                            onClick={handleshowLabel}
                          >
                            <FontAwesomeIcon icon={faUpload} />
                          </label>
                          <div
                            className="text-center pointer ml-20"
                            name={label}
                            onClick={deleteLabel}
                          >
                            x
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>空</div>
                  )}
                </div>
                <div className="d-flex mt-1 w-100 justify-content-between add-label">
                  <input
                    type="text"
                    onInput={handlelable}
                    value={label}
                  ></input>
                  <button
                    style={{ padding: "0" }}
                    onClick={handleAddButtonClick}
                  >
                    +
                  </button>
                </div>

                <div className="mt-4 d-flex justify-content-between plant w-100">
                  <div>
                    選用植物資料集
                    <span
                      className="pointer main-color ml-2"
                      onClick={() => setShowModal(true)}
                    >
                      說明
                    </span>
                  </div>
                  <div className="d-flex">
                    <label for="plant" onClick={(e) => console.log(e.target)}>
                      <input type="checkbox" name="plant" />
                      {/* <FontAwesomeIcon icon={faSquare} className="pointer" /> */}
                    </label>
                  </div>
                </div>
              </div>
              <button className="btn-main my-4">上一步</button>
            </div>
            <div
              className="col-12 col-md-9 d-flex flex-column justify-content-center align-items-end"
              id="labelandimage-right"
            >
              <span className="setting-info box d-flex align-items-center justify-content-start">
                <div>
                  <span>專案名稱: </span>
                  {location.state.pjName}
                </div>
                <div>
                  <span>Learning Rate: </span>
                  {location.state.learningRate}
                </div>
                <div>
                  <span>Epoch數: </span>
                  {location.state.epoch}
                </div>
              </span>
              <div className="d-flex flex-wrap align-items-start box p-3">
                {currentimageList != false ? (
                  renderImgPreviews()
                ) : (
                  <div>請新增圖片</div>
                )}
              </div>
              <button className="btn-main my-4" onClick={() => getAPI()}>
                開始訓練
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabelandImage;
