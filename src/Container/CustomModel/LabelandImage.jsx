import React, { Component, useState, useEffect } from "react";
import Image from "../../Components/Image";
import { Link, useLocation } from "react-router-dom";

function LabelandImage() {
  let location = useLocation();
  console.log(location);

  const [label, setlabel] = useState("");
  const [labelList, setlabelList] = useState(["aaa"]);

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
                  {labelList === null ? (
                    <div>空</div>
                  ) : (
                    labelList.map((label) => (
                      <div className="d-flex justify-content-between labellist-label">
                        <div>{label}</div>
                        <input id="file" type="file" />
                        <label for="file">上傳圖片</label>
                      </div>
                    ))
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
            <div className="d-flex flex-wrap align-items-start box p-3">
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
              <Image />
            </div>
            <button className="btn-main my-4">開始訓練</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabelandImage;
