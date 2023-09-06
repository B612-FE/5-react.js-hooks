import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 8vw;
  height: 100vh;
  position: fixed;
  background-color: #4169e1;
`;

export const MenuButton = styled.button`
  width: 6vw;
  height: auto;
  background: none;
  border: none;
  padding: 0;
  margin: 1vw;
  opacity: ${(props) => (props.clicked === 1 ? "100%" : "40%")};
  &:focus {
    outline: none;
    opacity: 100%;
  }
  &:hover {
    opacity: 60%;
  }
`;
export const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  background-position: 0px 0px;
  &:focus {
    outline: none;
  }
`;
