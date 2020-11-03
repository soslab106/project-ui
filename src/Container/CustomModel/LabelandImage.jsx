import React, { Component, useState, useEffect } from "react";
import Image from "../../Components/Image";
import { Link, useLocation } from "react-router-dom";
import { isConditionalExpression } from "typescript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

function LabelandImage() {
  let location = useLocation();

  const [showModal, setShowModal] = useState(false);

  const [label, setlabel] = useState("");
  const [labelList, setlabelList] = useState(["default"]);
  const [imageList, setimageList] = useState([
    { default: "lalla" },
    // { secondary: "second" },
  ]);
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
    for (let i in origFile) {
      if (currentLabel == Object.keys(origFile[i])) {
        const temp = [...Object.values(origFile[i])];
        // temp.push(...e.target.files);
        temp.push("success");
        console.log(Object.values(origFile[i]));
        console.log(temp);
      } else {
        let obj = {};
        // obj[currentLabel] = [...e.target.files];
        obj[currentLabel] = "success no label";
        origFile.push(obj);
        setimageList(origFile);
        console.log(currentLabel, imageList);
        // console.log(e.target.files);
      }
    }
  }

  function handleshowLabel(event) {
    // console.log(event.target);
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
    // console.log(labelList);
  }

  function renderImgPreviews(imgs) {
    // imgs.forEach((e) => console.log(e));
    let imgResult = [];
    // imgs.forEach((e) => {
    //   if (currentLabel == Object.keys(e)) {
    //     e[currentLabel].forEach((img) => {
    //       imgResult.push(<Image src={window.URL.createObjectURL(img)} />);
    //       // imgResult.push(<img className='train-img' src={window.URL.createObjectURL(img)} onload={()=>window.URL.revokeObjectURL(this.src)}/>);
    //     });
    //   }
    // });
    return imgResult;
  }

  useEffect(() => {
    console.log(imageList);
  }, [imageList]);

  function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  function renderPlantPics() {
    let pics = [];
    for (let i = 0; i < 52; i++) {
      pics.push(<img className='m-1' src={`/images/custom/plants/${i}.jpg`} width='200'/>);
    }
    return pics;
  }

  function renderPlantLabels(){
    const labels = ['月桃', '屯鹿月桃', '屈尺月桃', '高良薑', '水茄苳', '洋紫荊', '羊蹄甲', '射干', '芥藍菜',
    '朝鮮紫珠', '茶梅', '細葉山茶', '紫葳', '重瓣麥李', '火炬刺桐', '火炬薑', '臺灣山菊', '山芙蓉',
    '臺灣欒樹', '大花紫薇', '九芎', '金銀花', '紅花繼木', '龍爪花', '臺灣野牡丹藤', '密花野牡丹藤',
    '野牡丹', '含笑', '小葉魚藤', '芒', '紅玉葉金花', '荷花', '鈍頭緬梔', '紅花緬梔', '水黃皮',
    '菲律賓紫檀', '炮仗花', '豆梨', '使君子', '石斑木', '金毛杜鵑', '烏來杜鵑', '廣東薔薇',
    '黃花鼠尾草', '火燄木', '太魯閣繡線菊', '風鈴木', '毛風鈴木', '黃花夾竹桃', '大鄧伯花', '黃荊',
    '紫藤'];
    let plantLabels = []
    for(let i = 0; i <8;i++){
      plantLabels.push(
        <tr>
          <td style={{background:'#F6F8F8', border:'1px solid #ffffff'}}>{labels[i]}</td>
          <td style={{background:'#F6F8F8', border:'1px solid #ffffff'}}>{labels[i+1]}</td>
          <td style={{background:'#F6F8F8', border:'1px solid #ffffff'}}>{labels[i+2]}</td>
          <td style={{background:'#F6F8F8', border:'1px solid #ffffff'}}>{labels[i+3]}</td>
          <td style={{background:'#F6F8F8', border:'1px solid #ffffff'}}>{labels[i+4]}</td>
          <td style={{background:'#F6F8F8', border:'1px solid #ffffff'}}>{labels[i+5]}</td>
          <td style={{background:'#F6F8F8', border:'1px solid #ffffff'}}>{labels[i+6]}</td>
          <td style={{background:'#F6F8F8', border:'1px solid #ffffff'}}>{labels[i+7]}</td>
        </tr>
      )
    }
    return plantLabels
  }

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
          <table className="mt-1 justify-content-between" id='plant-table'>{renderPlantLabels()}</table>

          <div className="info-title mt-3">圖片示例</div>
          <div className="mt-1 justify-content-between">{renderPlantPics()}</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
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
                      >
                        <div>{label}</div>
                        <input
                          id="file"
                          type="file"
                          onChange={handleFileChange}
                          multiple
                        />
                        {handleFileChange()}
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
                    <label
                      for="plant"
                      onClick={(e) => console.log(e.target)}
                    >
                      <input type='checkbox' name='plant'/>
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
    </>
  );
}

export default LabelandImage;
