import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import * as S from "../styles/MenuBar.styled";

// const MenuContainer = styled.div`
//   width: 8vw;
//   height: 100vh;
//   position: fixed;
//   background-color: #4169e1;
// `;

// const MenuButton = styled.button`
//   width: 6vw;
//   height: auto;
//   background: none;
//   border: none;
//   padding: 0;
//   margin: 1vw;
//   opacity: ${(props) => (props.clicked === 1 ? "100%" : "40%")};
//   &:focus {
//     outline: none;
//     opacity: 100%;
//   }
//   &:hover {
//     opacity: 60%;
//   }
// `;
// const ButtonImage = styled.img`
//   width: 100%;
//   height: 100%;
//   background-position: 0px 0px;
//   &:focus {
//     outline: none;
//   }
// `;

function MenuBar() {
  return (
    <S.MenuContainer>
      <Link to="/profile">
        <S.MenuButton>
          <S.ButtonImage src={process.env.PUBLIC_URL + "/profile.png"} />
        </S.MenuButton>
      </Link>
      <Link to="/chatting-list">
        <S.MenuButton>
          <S.ButtonImage src={process.env.PUBLIC_URL + "/chatting.png"} />
        </S.MenuButton>
      </Link>
      <Link to="/more">
        <S.MenuButton>
          <S.ButtonImage src={process.env.PUBLIC_URL + "/more.png"} />
        </S.MenuButton>
      </Link>
    </S.MenuContainer>
  );
}

export default MenuBar;
