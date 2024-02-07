"use client";
import { createChatBotMessage } from "react-chatbot-kit";
import MenuWidget from "./widget/MenuWidget";

const config = {
  initialMessages: [
    createChatBotMessage(`안녕하세요 메뉴를 선택해주세요!`, {
      widget: "menuWidget",
    }),
  ],
  customComponents: {
    headers: () => false,
    botAvatar: (props) => <div />,
  },
  widgets: [
    {
      widgetName: "menuWidget",
      widgetFunc: (props) => <MenuWidget {...props} />,
    },
  ],
};

export default config;
