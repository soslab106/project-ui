import { faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import React, { Component, useState, useEffect } from "react";

function Exam() {
  const api = [
    {
      question:
        "由於智慧一詞難以被定義,因此科學家在1950年代提出了一種測試機器是否有智慧的方式:若機器所表現的行為能不被辨識出其身分,則稱這台機器具有智慧。此測試的名稱為下列哪一項?",
      answers: {
        a: "圖靈(Turing)測試",
        b: "尤拉 (Euler)測試",
        c: "高斯(Gauss)測試",
        d: "范紐曼(Von Neumam)測試",
      },
      correctAnswer: "A",
    },
    {
      question: "影像辨識在未來自駕車的技術中微不可或缺的一部份",
      answers: {
        a: "是",
        b: "否",
      },
      correctAnswer: "A",
    },
    {
      question:
        "對神經元輸入一個輸入值（input）後，經過_______的運算、輸出輸出值（output），這個輸出值會再傳入下一個神經元，成為該神經元的輸入值，___中為",
      answers: {
        a: "變數",
        b: "激發函數",
        c: "應數",
        d: "自變數",
      },
      correctAnswer: "B",
    },
    {
      question:
        "當輸入值(Input)經過神經元激發函數後的值大於閾值(Threshold)時，將會繼續輸出至下一個神經元",
      answers: {
        a: "是",
        b: "否",
      },
      correctAnswer: "A",
    },
    {
      question: " 閾值(Threshold)在神經元中所扮演的腳色為?",
      answers: {
        a: "定義了該神經元在給定的輸入或輸入的集合下的輸出",
        b: "決定經過激活函數運算出的的值是否能夠進入下一個神經元",
      },
      correctAnswer: "B",
    },
    {
      question: "預測結果與真實結果的差距可以藉由____獲得?",
      answers: {
        a: "激活函數 (Activation Function)",
        b: "代價函數 (Lost Function)",
      },
      correctAnswer: "B",
    },
    {
      question:
        "自然語言處理(NLP)就是讓電腦能理解人類語言，分析詞意以及詞句間的關係，下列哪項並非常見應用?",
      answers: {
        a: "活動輿情分析",
        b: "詐騙郵件偵測",
        c: "機器翻譯",
        d: "影像辨識",
      },
      correctAnswer: "D",
    },
    {
      question: "激活函數(Activation function) 的主要功能為下列何者?",
      answers: {
        a: "發散權重",
        b: "計算相對於權重的誤差",
      },
      correctAnswer: "B",
    },
    {
      question: "圖零測試被譽為人工智慧的雛",
      answers: {
        a: "是",
        b: "否",
      },
      correctAnswer: "A",
    },
    {
      question: "類神經網路是基於統計學所衍生出的理論",
      answers: {
        a: "是",
        b: "否",
      },
      correctAnswer: "A",
    },
  ];
  const foo = new Array(api.length);
  const [useranswer, setuseranswer] = useState(foo);
  const [stylelist, setstylelist] = useState([]);
  const [done, setdone] = useState(false);

  function handleChange(e) {
    const copy = [...useranswer];
    const numofanswer = parseInt(
      e.target.name.charAt(e.target.name.length - 1),
      10
    );
    copy[numofanswer - 1] = e.target.value;
    setuseranswer(copy);
  }

  function showQuestion(questions) {
    const order = ["A", "B", "C", "D", "E"];
    return questions.map((question, index) => {
      return (
        <div className={`paper`}>
          <div className={`question ${stylelist[index]}`}>
            {index + 1}. &nbsp;
            {question["question"]}
          </div>
          <div className="answers my-3">
            {Object.values(question["answers"]).map((answer, index2) => {
              return (
                <div>
                  <input
                    type="radio"
                    name={`question-${index + 1}`}
                    value={order[index2]}
                    onChange={handleChange}
                  ></input>
                  <label>
                    ({order[index2]})&nbsp;
                    {answer}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  }
  function showResult() {
    const correctanswers = [];
    api.map((each) => correctanswers.push(each["correctAnswer"]));
    console.log(useranswer.includes(undefined));
    // const pass = useranswer.some((each, index) => {
    //   return each === correctanswers[index];
    // });
    const factlist = [];
    useranswer.map((each, index) => {
      factlist.push(each === correctanswers[index]);
    });
    const pre_stylelist = [];
    factlist.map((each) =>
      each ? pre_stylelist.push("correct") : pre_stylelist.push("wrong")
    );
    setstylelist(pre_stylelist);
    setdone(true);
    const pass = factlist.includes(false);
    // console.log(stylelist);
  }
  function renderResult() {
    if (done) {
      const totalscore = stylelist.reduce(
        (a, b) => (b == "correct" ? a + 1 : a),
        0
      );
      return <div>總分為： {(totalscore / stylelist.length) * 100}分</div>;
    }
  }

  //   useEffect(() => {
  //     console.log(useranswer);
  //   }, [useranswer]);

  return (
    <div className="h-100 panel">
      <div className="container d-flex flex-column align-items-center justify-content-center py-5 ">
        <div className="main-title mb-5">練習題庫</div>
        <div className="d-flex flex-column align-items-center w-100 mb-3 question-list">
          <div>填答說明請依據題目選出最適合的選項</div>
          <div className="">
            <div className="quiz">{showQuestion(api)}</div>
            <div className="d-flex justify-content-start">
              <button
                className="btn btn-main ml-3 my-4"
                onClick={() => showResult()}
              >
                提交
              </button>
            </div>
            <div id="result" className="d-flex justify-content-center">
              {renderResult()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
