import React, { Component, useState, useEffect } from "react";
import Image from "../../Components/Image";
import { Link, useLocation } from "react-router-dom";

function LabelandImage() {
  let location = useLocation();
  console.log(location);

  const [label, setlabel] = useState("");
  const [labelList, setlabelList] = useState(["aaa"]);
  const [imageList, setimageList] = useState([]);

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
    origFile.push(...e.target.files);
    setimageList(origFile);
    // console.log(imageList);
    // console.log(e.target.files);
  }

  function handleshowLabel(event) {
    // console.log(event.currentTarget);
    console.log("hi");
  }

  function getAPI() {
    let formData = new FormData();
    formData.append("pjName", location.state["pjName"]);
    formData.append("learningRate", location.state["learningRate"]);
    formData.append("epoch", location.state["epoch"]);
    formData.append("trainingData", imageList);
  }

  useEffect(() => {
    console.log(imageList);
  }, [imageList]);

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
            <div className="d-flex flex-column justify-content-start align-items-start box p-3">
              <div className="third-title mb-3">標籤</div>
              <div id="label-config">
                <div id="labellist">
                  {labelList ? (
                    labelList.map((label) => (
                      <div
                        className="d-flex justify-content-between labellist-label"
                        name={label}
                        onclick={handleshowLabel}
                      >
                        <div>{label}</div>
                        <input
                          id="file"
                          type="file"
                          onChange={handleFileChange}
                        />
                        <label for="file">上傳圖片</label>
                      </div>
                    ))
                  ) : (
                    <div>空</div>
                  )}
                </div>
                <div className="d-flex mt-1">
                  <input
                    className="mt-10"
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
              {imageList ? <div>ddd</div> : <div>aaa</div>}
              {/* {imageList ? (
                imageList.forEach((image) => <Image src="/images/nopic.png" />)
              ) : (
                <div>NO PICTURE</div>
              )} */}
            </div>
            <button className="btn-main my-4" onclick={() => getAPI()}>
              開始訓練
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabelandImage;
