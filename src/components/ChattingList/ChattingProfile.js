import React from "react";
import { useHistory } from "react-router";
// import styled from "styled-components";
import * as S from "../../styles/ChattingList.styled"
import ChatSet from "../../data/BasicChat";

// export const ProfileImage = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 70%;
//   margin: 15px;
// `;

// export const ProfileName = styled.div`
//   line-height: 25px;
//   font-size: 15px;
//   margin: 5px 0px 3px;
//   padding: 6px;
//   color: gray;
// `;

// export const LastMessage = styled.p`
//   color: #4169e1;
//   font-size: 15px;
//   margin: 0;
//   padding-left: 10px;
// `;

// export const ProfileBubbleContainer = styled.div`
//   display: flex;
//   background-color: #f4f4f4;
//   border-top: 1px solid #e99ba7;
//   margin-left: 8vw;
//   &:hover {
//     background-color: #f0d7d7;
//   }
// `;

function ChattingProfileBubble({ profile }) {
  //파라미터 쓰기
  const history = useHistory();
  function handleProfileBubbleClick() {
    history.push({
      pathname: "/chat-with/" + profile.profileImage,
      state: { userID: profile.profileImage },
    });
  }
  return (
    <S.ProfileBubbleContainer onClick={handleProfileBubbleClick}>
      <S.ProfileImage
        src={process.env.PUBLIC_URL + "/" + profile.profileImage + ".jpg"}
      />
      <div>
        <S.ProfileName> {profile.name} </S.ProfileName>
        <S.LastMessage>
          {ChatSet[profile.profileImage - 1].messageContext}
        </S.LastMessage>
      </div>
    </S.ProfileBubbleContainer>
  );
}

function ChattingProfile({ userProfileSet }) {
  return (
    <div>
      {userProfileSet.map((profile, id) => (
        <ChattingProfileBubble profile={profile} key={id} />
      ))}
    </div>
  );
}

export default ChattingProfile;
