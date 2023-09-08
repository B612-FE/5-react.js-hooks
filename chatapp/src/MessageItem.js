import styled from "styled-components";

const MessageItem = ({ time, content }) => {
  return (
    <MessageItemWrapper>
      <ProfileImage />
      <UserName>{}</UserName>
      <MessageContent>{content}</MessageContent>
      <MessageTime>{time}</MessageTime>
    </MessageItemWrapper>
  );
};

const MessageItemWrapper = styled.div``;

const ProfileImage = styled.img``;

const UserName = styled.span``;

const MessageContent = styled.span``;

const MessageTime = styled.span``;

export default MessageItem;
