import React from "react";
import "./style/navBar.css";
function NavVar() {
  return (
    <div>
      <div className="menubar">
        <header className="header">
          <a className="home" href="/">
            LE-GO!
          </a>
          <div className="Navi">
            <a className="Navs" href="/manager">
              프로젝트 생성
            </a>
            <a className="Navs">프로젝트 소개</a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default NavVar;
