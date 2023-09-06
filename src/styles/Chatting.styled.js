import styled from "styled-components";

export const ChattingImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin: 15px 15px 0px 15px;
`;

export const ChattingContext = styled.div`
  padding-left: 20px;
  line-height: 28px;
  font-size: 15px;
  border: 1px solid #e99ba7;
  border-radius: 22px;
  margin: 15px 0px 0px;
  padding: 10px;
  background-color: #f4f4f4;
  color: gray;
`;
export const ChattingBubble = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.chattingUser === 1 ? "row-reverse" : "row"};
`;

export const ChattingContainer = styled.div`
  width: 92vw;
  height: available;
  flex-grow: 1;
  padding-top: 97px;
  padding-bottom: 100px;
  background-image: url(${process.env.PUBLIC_URL + "/backgroundImg.jpg"});
  background-repeat: repeat;
  margin-left: 8vw;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const MessageInputContainer = styled.div`
  color: grey;
  display: flex;
  margin: 1% 0% 0% 8vw;
  border-top: solid 1px #d16f80;
  align-items: stretch;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #e99ba7;
`;

export const MessageInputBox = styled.input`
  color: grey;
  width: 78vw;
  height: 40px;
  margin: 1% 0% 1% 2%;
  border: 0.5px #d16f80 solid;
  text-align: center;
  border-radius: 30px;
  &:focus {
    outline: none;
  }
`;
export const MessageInputButton = styled.button`
  color: #f4f4f4;
  width: 9vw;
  height: 44px;
  border-radius: 10px;
  background-color: #ba4f5f;
  border: 0.5px #ba4f5f solid;
  text-align: center;
  margin: 1%;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #d16f80;
  }
`;

export const TopBox = styled.div`
  background-color: #e99ba7;
  color: #ba4f5f;
  display: flex;
  padding: 1% 2% 1% 1.5%;
  border-bottom: solid 1px #d16f80;
  position: fixed;
  top: 0px;
  width: 100%;
  margin-left: 8vw;
`;

export const ProfileImageButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  overflow: hidden;
  padding: 0px;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  background-position: 0px 0px;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;
export const ProfileName = styled.div`
  padding-left: 20px;
  line-height: 60px;
  font-size: 20px;
`;