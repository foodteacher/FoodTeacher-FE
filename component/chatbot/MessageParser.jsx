import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const MessageParser = ({ children, actions, setState }) => {
  // const { checker } = children.props.state;
  const parse = (message) => {
    // console.log(checker);
    console.log(children.props);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
