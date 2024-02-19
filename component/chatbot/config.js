"use client";
import { createChatBotMessage } from "react-chatbot-kit";
import MenuWidget from "./widget/MenuWidget";
import DietChattingMsgCart from "../card/DietChattingMsgCard";

const config = {
  initialMessages: [
    createChatBotMessage(`안녕하세요 메뉴를 선택해주세요!`, {
      widget: "overview",
    }),
  ],
  customComponents: {
    headers: () => false,
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <MenuWidget {...props} />,
    },
    {
      widgetName: "dietResponse",
      widgetFunc: (props) => <DietChattingMsgCart {...props} />,
    },
  ],
};

export default config;
