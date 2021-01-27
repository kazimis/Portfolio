import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import profilePic from "./img/saraj.jfif";

const Chat = () => {
  addResponseMessage("Hi there!");

  const handleNewUserMessage = (message) => {
    console.log(`New message incoming! ${message}`);
    addResponseMessage("00response");
  };
  return (
    <container>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={profilePic}
        title="Saraj Kazimi"
        subtitle="Welcome"
      />
    </container>
  );
};

export default Chat;
