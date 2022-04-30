import React from "react";
import DonateBanner from "./DonateBanner";
import "./style/homepage.css";

function HomePage() {
  // axios로 데이터 받아옴

  //임시 데이터 생성
  const projectList = [
    {
      id: 1,
      img: "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D",
      title: "test 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      img: "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D",
      title: "test 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      img: "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D",
      title: "test 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      img: "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D",
      title: "test 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <div>
      <div className="title__header">Let's Go to Donate!</div>
      <hr />
      <div className="container">
        {projectList.map((project) => {
          console.log(project);
          return (
            <DonateBanner
              className="item"
              key={project.id}
              img={project.img}
              id={project.id}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
