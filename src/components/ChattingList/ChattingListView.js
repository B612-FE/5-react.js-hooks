import React, { useState } from "react";
import ChattingProfile from "./ChattingProfile";
import ChattingListTopBar from "./ChattingListTopBar";
import userProfileSet from "../../data/User";
import * as S from "../../styles/ChattingList.styled"

function ChattingList() {
  const [matchUserSet, setMatchUserSet] = useState(userProfileSet);

  function searchUser(searchUserInput) {
    setMatchUserSet([]);
    for (let userProfile of userProfileSet) {
      if (userProfile.name.includes(searchUserInput)) {
        setMatchUserSet((matchUser) => [...matchUser, userProfile]);
      }
    }
  }

  return (
    <div>
      <S.Margin />
      <ChattingListTopBar searchUser={searchUser} viewTitle={"채팅"} />
      <ChattingProfile userProfileSet={matchUserSet} />
    </div>
  );
}

export default ChattingList;
