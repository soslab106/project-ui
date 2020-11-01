import React, { Component, useState, useEffect } from "react";
import Image from "../../Components/Image";
import { Link, useLocation } from "react-router-dom";
import { isConditionalExpression } from "typescript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function LabelandImage() {
  let location = useLocation();

  const [label, setlabel] = useState("");
  const [labelList, setlabelList] = useState(["default"]);
  const [imageList, setimageList] = useState([]);
  const [currentLabel, setcurrentLabel] = useState("default");

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

  function handleFileChange(e) {
    const origFile = [...imageList];
    let obj = {};
    obj[currentLabel] = [...e.target.files];
    origFile.push(obj);
    setimageList(origFile);
    console.log(currentLabel, imageList);
    console.log(e.target.files);
  }

  function handleshowLabel(event) {
    console.log(event.target);
    console.log("event name", event.currentTarget.getAttribute("name"));
    setcurrentLabel(event.currentTarget.getAttribute("name"));
    console.log("currentLabel", currentLabel);

    // ;
  }

  function getAPI() {
    let formData = new FormData();
    formData.append("pjName", location.state["pjName"]);
    formData.append("learningRate", location.state["learningRate"]);
    formData.append("epoch", location.state["epoch"]);
    formData.append("trainingData", imageList);

    imageList.forEach((e) => console.log(e));
  }

  function deleteLabel(e) {
    let label = e.target.getAttribute("name");
    let newLabels = labelList;
    setlabelList(newLabels.filter((oldLabel) => oldLabel != label));
    console.log(labelList);
  }

  function renderImgPreviews(imgs) {
    imgs.forEach((e) => console.log(e));
    let imgResult = [];
    imgs.forEach((e) => {
      if (currentLabel == Object.keys(e)) {
        e[currentLabel].forEach((img) => {
          imgResult.push(<img className='train-img' src={window.URL.createObjectURL(img)} onload={()=>window.URL.revokeObjectURL(this.src)}/>);
        });
      }
    });
    return imgResult;
  }

  return (
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
            <div className="d-flex flex-column justify-content-start align-items-center box p-3">
              <div className="third-title mb-3">標籤</div>
              <div id="label-config">
                <div id="labellist">
                  {labelList ? (
                    labelList.map((label) => (
                      <div className="row d-flex justify-content-between labellist-label">
                        <div className="w-25">{label}</div>
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
                <div className="d-flex mt-1">
                  <input
                    className="mt-10 w-100"
                    type="text"
                    onInput={handlelable}
                    value={label}
                  ></input>
                  <button onClick={handleAddButtonClick}>+</button>
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
              {imageList != false ? (
                renderImgPreviews(imageList)
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
  );
}

export default LabelandImage;
