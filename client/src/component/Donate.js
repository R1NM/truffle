import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./style/projectDetail.css";

function Donate() {
  const navigate = useNavigate();
  const [coin, setCoin] = useState("");

  const onCoinChange = (e) => {
    setCoin(e.target.value);
    console.log(coin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(coin);
    navigate(`/`);
  };

  return (
    <div className="wrapper">
      <div className="title"> donate </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="inputfield">
          <label>Donate Amount</label>
          <input type="number" className="input" onChange={onCoinChange} />
        </div>
        <button type="submit" className="btn">
          기부하기
        </button>
      </form>
    </div>
  );
}

export default Donate;
