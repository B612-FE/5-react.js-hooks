import styled from "styled-components";

export const Container = styled.div`
  padding-top: 3vh;
  margin-left: 10vw;
`;
export const ProfileName = styled.div`
  padding: 1vh 3vw 0.2vh;
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

export const ProfileImageNew = styled(ProfileImage)`
  width: 30vw;
  height: auto;
  margin-left: 25vw;
  margin-bottom: 2vh;
`;
export const ProfileContainer = styled.div`
  width: auto;
  height: auto;
  margin: 1vh 2vw 1vh 0vw;
  border: 1px;
  border-color: #b1b1b1;
  background-color: #fffffa;
  border-radius: 10px;
`;
