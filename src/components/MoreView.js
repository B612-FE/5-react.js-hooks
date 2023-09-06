import React from "react";
// import styled from "styled-components";
import * as S from "../styles/MoreView.styled";
import userProfileSet from "../data/User";
// import { ProfileImage } from "./Chatting/MessageTopBar";

// const MenuSelectContainer = styled.h3`
//   padding: 1.5vh 2vw;
//   border-top: 1px solid #e99ba7;
//   margin: 0;
// `;

// const Container = styled.div`
//   padding-top: 3vh;
//   margin-left: 10vw;
// `;
// const ProfileName = styled.div`
//   padding: 1vh 3vw 0.2vh;
// `;

// const ProfileImage = styled.img`
//   width: 60px;
//   height: 60px;
//   border-radius: 70%;
//   background-position: 0px 0px;
//   overflow: hidden;
//   &:focus {
//     outline: none;
//   }
// `;

// const ProfileImageNew = styled(ProfileImage)`
//   width: 30vw;
//   height: auto;
//   margin-left: 25vw;
//   margin-bottom: 2vh;
// `;
// const ProfileContainer = styled.div`
//   width: auto;
//   height: auto;
//   margin: 1vh 2vw 1vh 0vw;
//   border: 1px;
//   border-color: #b1b1b1;
//   background-color: #fffffa;
//   border-radius: 10px;
// `;

function MoreView() {
  return (
    <S.Container>
      <h1>더보기</h1>
      <S.ProfileContainer>
        <S.ProfileName>
          <h2>{userProfileSet[0].name}</h2>
          <S.ProfileImageNew
            src={process.env.PUBLIC_URL + "/1.jpg"}
            alt=""
          ></S.ProfileImageNew>
        </S.ProfileName>
        <div></div>
      </S.ProfileContainer>
    </S.Container>
  );
}

export default MoreView;
