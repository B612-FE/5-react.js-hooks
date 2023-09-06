import styled from "styled-components";

export const SearchChatting = styled.input`
  height: 3vh;
  width: 70vw;
  border: 0.5px #e99ba7 solid;
  border-radius: 7px;
  padding: 1px 1.5vw;
  background-color: #ecd0d0;
  &:focus {
    outline: none;
  }
`;

export const ChattingListContainer = styled.div`
  padding-left: 9vw;
  margin-bottom: 1vh;
`;

export const Margin = styled.div`
  height: 1.9vh;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  margin: 15px;
`;

export const ProfileName = styled.div`
  line-height: 25px;
  font-size: 15px;
  margin: 5px 0px 3px;
  padding: 6px;
  color: gray;
`;

export const LastMessage = styled.p`
  color: #4169e1;
  font-size: 15px;
  margin: 0;
  padding-left: 10px;
`;

export const ProfileBubbleContainer = styled.div`
  display: flex;
  background-color: #f4f4f4;
  border-top: 1px solid #e99ba7;
  margin-left: 8vw;
  &:hover {
    background-color: #f0d7d7;
  }
`;