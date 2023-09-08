import React from "react";
import styled from "styled-components";

const MyHeader = ({ leftChild, rightChild }) => {
  return (
    <MyHeaderWrapper>
      <MyHeaderButton>{leftChild}</MyHeaderButton>
      <MyHeaderText>세빈</MyHeaderText>
      <MyHeaderButton>{rightChild}</MyHeaderButton>
    </MyHeaderWrapper>
  );
};

const MyHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
`;
const MyHeaderButton = styled.button`
  width: 15%;
  background-color: #f0f0f0;
  align-items: center;
  border-radius: 100%;
  font-size: 2rem;
  cursor: pointer;
`;

const MyHeaderText = styled.span`
  width: 70%;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
`;
export default MyHeader;
