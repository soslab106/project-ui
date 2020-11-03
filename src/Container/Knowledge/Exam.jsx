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
          <div>
            填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答
            說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答說明填答
            說明填答說明填答說明填答說明填答說明填答說明
          </div>
          <div>
            <div className="quiz">{showQuestion(api)}</div>
            <button onClick={(event) => showResult(event)}>提交</button>
            <div id="result">{renderResult()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
