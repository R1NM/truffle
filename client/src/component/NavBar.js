import React from "react";
import "./style/navBar.css";
import { FiHome, FiUser } from "react-icons/fi";
function NavVar() {
  return (
    <div>
      <div className="menubar">
        <header className="header">
          <a className="home" href="/">
            <FiHome />
          </a>
          <div className="Navi">
            <a className="Navs" href="/manager">
              프로젝트 생성
            </a>
            <a className="Navs">프로젝트 소개</a>
            <a className="Navs" href="/mypage">
              <FiUser />
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default NavVar;
