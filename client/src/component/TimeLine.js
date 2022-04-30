import React, { memo } from "react";
import styled, { keyframes } from "styled-components";
//import "./style/timeline.css";

function TimeLine() {
  return (
    <div className="contain">
      <div className="timelineList">
        <li className="timelineItemContainer">
          <div className="tiemlineItem">
            <div className="date">2021년 1월 1일</div>
            <div className="title">20 코인이 기부되었습니다</div>
          </div>
        </li>

        <li className="timelineItemContainer">
          <div className="tiemlineItem">
            <div className="date">2021년 1월 1일</div>
            <div className="title">상품 준비 중</div>
          </div>
        </li>

        <li className="timelineItemContainer">
          <div className="tiemlineItem">
            <div className="date">2021년 1월 1일</div>
            <div className="title">상품 준비 중</div>
          </div>
        </li>
      </div>
    </div>
  );
}

export default TimeLine;
