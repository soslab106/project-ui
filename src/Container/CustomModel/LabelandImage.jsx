import React, { Component, useState } from "react";
import Image from "../../Components/Image";

function LabelandImage() {
  const [label, setlabel] = useState("");
  const [labelList, setlabelList] = useState([]);

  const newlabel = (label) => {
    setlabelList((oldlabelList) => [...oldlabelList, label]);
  };

  const renderLabel = () => {
    // if (labelList) {
    //   console.log("目前尚無標籤");
    // } else {
    //   console.log("hihihi");
    // }
    //useEffect
    console.log(labelList);
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
          <div className="col-12 col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-start box p-3">
              <div className="third-title">標籤</div>
              <div id="label-config">
                <div id="labellist">{renderLabel()}</div>
                <div className="d-flex">
                  <input
                    className="mt-20"
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
          <div className="col-12 col-md-9 d-flex flex-column justify-content-center align-items-end">
            <div className="d-flex flex-wrap box p-3">
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
