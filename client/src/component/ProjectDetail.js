import React from "react";
import { useLocation, useParams } from "react-router-dom";
// https://velog.io/@ryeon5789/useNavigate-useLocation
// useLoation, useNavigation 참조 링크
import { useNavigate } from "react-router-dom";
import "./style/projectDetail.css";
import { Button, NavItem } from "react-bootstrap";

function ProjectDetail(props) {
  const location = useLocation();
  const project_id = location.state.project_id;
  const project_img = location.state.project_img;
  const project_title = location.state.project_title;
  const project_description = location.state.project_description;
  // project_id에 해당하는 정보 불러오기
  console.log(project_description);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${project_id}/status`, {
      state: {
        project_id: project_id,
        project_title: project_title,
      },
    });
  };
  const donateClick = () => {
    navigate(`/detail/${project_id}/donate`, {
      state: {
        project_id: project_id,
        project_title: project_title,
      },
    });
  };

  return (
    <div className="app">
      <div className="details">
        <img src={project_img} alt="donate project image" className="big-img" />
        <div className="box">
          <div className="row">
            <h2>{project_title}</h2>
          </div>
          <p>{project_description}</p>
          <Button className="cart" onClick={handleClick}>
            기부 현황
          </Button>
          <Button className="cart" onClick={donateClick}>
            기부 하기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
