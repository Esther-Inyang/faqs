import React, { useState } from "react";
import data from "./data";
import Faqs from "./Faqs";
import "./Faqs.css";

function Qstn() {
  const [qstns, setQstns] = useState(data);

  return (
    <div>
      <h1 className="page-title">Product FAQS:</h1>
      <p className="page-title-b">(Frequently asked questions)</p>

      {qstns.map((qstn) => {
        return <Faqs key={qstn.id} {...qstn} />;
      })}
    </div>
  );
}

export default Qstn;
