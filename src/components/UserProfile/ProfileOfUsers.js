import React from "react";
// import styled from "styled-components";
import * as S from "../../styles/UserProfile.styled";
// import {
//   ProfileImage,
//   ProfileName,
//   ProfileBubbleContainer,
//   LastMessage,
// } from "../ChattingList/ChattingProfile";

// const ProfileImage = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 70%;
//   margin: 15px;
// `;

// const ProfileName = styled.div`
//   line-height: 25px;
//   font-size: 15px;
//   margin: 5px 0px 3px;
//   padding: 6px;
//   color: gray;
// `;

// const LastMessage = styled.p`
//   color: #4169e1;
//   font-size: 15px;
//   margin: 0;
//   padding-left: 10px;
// `;

// const ProfileBubbleContainer = styled.div`
//   display: flex;
//   background-color: #f4f4f4;
//   border-top: 1px solid #e99ba7;
//   margin-left: 8vw;
//   &:hover {
//     background-color: #f0d7d7;
//   }
// `;

// const ProfileMessage = styled(LastMessage)`
//   color: gray;
// `;

// const UserName = styled(ProfileName)`
//   font-size: 18px;
//   margin: 7px 0px 3px;
//   padding: 10px;
// `;

function ProfileBubble({ profile, handleModal }) {
  function profileClicked() {
    handleModal(profile);
  }
  //파라미터 쓰기
  return (
    <S.ProfileBubbleContainer onClick={profileClicked}>
      <S.ProfileImg
        src={process.env.PUBLIC_URL + "/" + profile.profileImage + ".jpg"}
      />
      <div>
        <S.UserName> {profile.name} </S.UserName>
        <S.ProfileMessage>{profile.profileMessage}</S.ProfileMessage>
      </div>
    </S.ProfileBubbleContainer>
  );
}

function ProfileOfUsers({ userProfileSet, handleModal }) {
  return (
    <div>
      {userProfileSet.map((profile, id) => (
        <ProfileBubble profile={profile} key={id} handleModal={handleModal} />
      ))}
    </div>
  );
}

export default ProfileOfUsers;
