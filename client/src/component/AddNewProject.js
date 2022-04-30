import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/addNewProject.css";

function AddNewProject() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [coin, setCoin] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const onImgChange = (e) => {
    setImg(e.target.value);
    console.log(img);
  };

  const onCoinChange = (e) => {
    setCoin(e.target.value);
    console.log(coin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, img, coin);
    navigate(`/`);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="title"> New Project </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputfield">
            <label>Title</label>
            <input type="text" className="input" onChange={onTitleChange} />
          </div>
          <div className="inputfield">
            <label>Photo</label>
            <input type="file" className="input" />
          </div>

          <div className="inputfield">
            <label>Description</label>
            <textarea
              className="textarea"
              onChange={onDescriptionChange}
            ></textarea>
          </div>
          <div className="inputfield">
            <label>Target Amount</label>
            <input type="number" className="input" onChange={onCoinChange} />
          </div>
          <button type="submit" className="btn">
            프로젝트 생성
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewProject;
