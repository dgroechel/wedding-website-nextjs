import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
const Widget = dynamic(
  import("react-chat-widget").then((mod) => mod.Widget),
  { ssr: false }
);
const addResponseMessage = (message) =>
  import("react-chat-widget").then(
    (func) => new func.addResponseMessage(message)
  );
import "react-chat-widget/lib/styles.css";
import axios from "axios";
const toggleMsgLoader = () =>
  import("react-chat-widget").then((func) => new func.toggleMsgLoader());

const sessionId = nanoid();

export default function ChatWidget() {
  useEffect(() => {
    addResponseMessage("Hello Hooman!");
    handleNewUserMessage("initial-intent");
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    toggleMsgLoader();
    const url =
      "https://us-central1-wedding-chat-303415.cloudfunctions.net/dialogdlow-chat/chatbot";
    const body = { message: newMessage, sessionId };
    const messageResult = await axios.post(url, body);
    await addResponseMessage(messageResult.data.message.fulfillmentText);
    toggleMsgLoader();
  };

  return (
    <div>
      <Widget
        profileAvatar="/wilson.jpg"
        titleAvatar="wilson.jpg"
        handleNewUserMessage={handleNewUserMessage}
        title="Wilson"
        subtitle="The Wedding Bot"
      />
    </div>
  );
}
