import React, { useState } from "react";
import data from "./data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Faqs.css";

function Faqs() {
  const [qstns, setQstns] = useState(data);
  const [showInfo, setShowInfo] = useState(false);
  const [indexed, setIndexed] = useState();
  const showItem = (index) => {
    setShowInfo(!showInfo);
    setIndexed(index);
  };

  return (
    <main>
      <div className="container">
        <h1 className="page-title">Product FAQS:</h1>
        <p className="page-title-b">(Frequently asked questions)</p>

        <div className="faqs-container">
          {qstns.map((qstn, index) => {
            const { id, title, info } = qstn;
            return (
              <div key={id} className="faqs">
                <div className="faqs">
                  <div className="qstn-and-icons">
                    <h2 className="qstn-title">{title}</h2>
                    <div className="btn-container">
                      <button
                        onClick={() => showItem(index)}
                        // onClick={() => setShowInfo(!showInfo)}
                        className="icons-btn"
                      >
                        {showInfo && indexed === index ? (
                          <AiOutlineMinus className="icon" />
                        ) : (
                          <AiOutlinePlus className="icon" />
                        )}
                      </button>
                    </div>
                  </div>

                  {showInfo && (
                    <p
                      className={
                        indexed === index ? "qstn-answer" : "qstn-answer hide"
                      }
                      // className="qstn-answer"
                    >
                      {info}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Faqs;
