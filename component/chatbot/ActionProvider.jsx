"use client";
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initialAction = () => {
    const message = createChatBotMessage("아침");
    updateState(message, "lunch");
  };

  const afterMorningMessage = () => {
    const message = createChatBotMessage("점심");
    updateState(message, "dinner");
  };

  const afterLunchMessage = () => {
    const message = createChatBotMessage("저녁");
    updateState(message);
  };

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterMorningMessage,
            afterLunchMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
