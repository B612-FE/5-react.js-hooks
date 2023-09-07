import React, { useState, useCallback } from "react";
import ChattingProfile from "./ChattingProfile";
import ChattingListTopBar from "./ChattingListTopBar";
import userProfileSet from "../../data/User";

function ChattingList() {
  const [matchUserSet, setMatchUserSet] = useState(userProfileSet);

  const searchUser = useCallback((searchUserInput) => {
    setMatchUserSet([]);
    for (let userProfile of userProfileSet) {
      if (userProfile.name.includes(searchUserInput)) {
        setMatchUserSet((matchUser) => [...matchUser, userProfile]);
      }
    }
  });

  return (
    <div>
      <ChattingListTopBar searchUser={searchUser} viewTitle={"채팅"} />
      <ChattingProfile userProfileSet={matchUserSet} />
    </div>
  );
}

export default ChattingList;
