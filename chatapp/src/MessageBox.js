import styled from "styled-components";

const MessageList = () => {
  return (
    <MessageListWrapper>
      <div>여기가 메시지 리스트 보여주는 곳</div>
    </MessageListWrapper>
  );
};

const MessageListWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: auto;
  flex-direction: column;
`;

export default MessageList;
