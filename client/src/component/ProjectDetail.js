import React from "react";
import { useLocation, useParams } from "react-router-dom";
// https://velog.io/@ryeon5789/useNavigate-useLocation
// useLoation, useNavigation 참조 링크
import { useNavigate } from "react-router-dom";
import "./style/projectDetail.css";
import { Button } from "react-bootstrap";

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

  return (
    <div className="prj__detail">
      <div className="prj__title">{project_title}</div>
      <div className="prj__header">
        <img src={project_img} alt="prj-img" className="prj__img" />
        <div className="prj__buttons">
          <Button className="prj__button" onClick={handleClick}>
            기부 현황
          </Button>
          <Button className="prj__button">기부 하기</Button>
        </div>
      </div>
      <h3>{project_description}</h3>
    </div>
  );
}

export default ProjectDetail;
