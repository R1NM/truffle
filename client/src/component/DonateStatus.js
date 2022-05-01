import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useLocation } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import "./style/donateStatus.css";
import { Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./style/addNewProject.css";

function DonateStatus() {
  const location = useLocation();
  const project_id = location.state.project_id;
  const project_title = location.state.project_title;
  console.log(project_title);
  const percentage = 66;

  const donateList = [
    {
      id: 1,
      coin: 10,
      date: "2022-04-29",
    },
    {
      id: 2,
      coin: 10,
      date: "2022-04-29",
    },
    {
      id: 3,
      coin: 10,
      date: "2022-04-29",
    },
  ];

  return (
    <div>
      <div className="donate__title">{project_title}</div>
      <div>
        <div>
          <div style={{ display: "flex" }}>
            <div className="wrapper__list">
              <div className="wrapper__title"> 기부 현황 </div>
              <div></div>
              <ProgressBar
                now={percentage}
                label={`${percentage}%`}
                style={{ "max-width": "500px", display: "center" }}
              />

              {donateList.map((donate) => {
                console.log(donate);
                return (
                  <div className="wrapper__donate" key={donate.id}>
                    <div> {donate.date} </div>
                    <div>{donate.coin} 코인이 기부되었습니다</div>
                  </div>
                );
              })}

              <Button className="donate__button">기부하러가기</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateStatus;
