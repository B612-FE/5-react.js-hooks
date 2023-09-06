import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import * as S from "../../styles/ChattingList.styled";

// const SearchChatting = styled.input`
//   height: 3vh;
//   width: 70vw;
//   border: 0.5px #e99ba7 solid;
//   border-radius: 7px;
//   padding: 1px 1.5vw;
//   background-color: #ecd0d0;
//   &:focus {
//     outline: none;
//   }
// `;

// const ChattingListContainer = styled.div`
//   padding-left: 9vw;
//   margin-bottom: 1vh;
// `;

function ChattingListTopBar({ searchUser, viewTitle }) {
  const [searchUserInput, setSearchUserInput] = useState("");

  function handleChange(e) {
    setSearchUserInput(e.target.value);
  }

  useEffect(() => {
    searchUser(searchUserInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchUserInput]);

  return (
    <S.ChattingListContainer>
      <h1>{viewTitle}</h1>
      <form>
        <S.SearchChatting
          name="search"
          placeholder="참여자 검색"
          onChange={handleChange}
        />
      </form>
    </S.ChattingListContainer>
  );
}

export default ChattingListTopBar;
