import React, { useEffect } from "react";
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

export default function ChatWidget({ fullScreenMode }) {
  useEffect(() => {
    addResponseMessage("Hello Hooman!");
    handleNewUserMessage("initial-intent");
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    toggleMsgLoader();
    const url =
      "https://us-central1-wedding-chat-303415.cloudfunctions.net/dialogdlow-chat/chatbot";
    const body = { message: newMessage };
    const messageResult = await axios.post(url, body);
    await addResponseMessage(messageResult.data.message.fulfillmentText);
    toggleMsgLoader();
  };

  return (
    <div>
      <Widget
        fullScreenMode={fullScreenMode}
        profileAvatar="/wilson.jpg"
        titleAvatar="wilson.jpg"
        handleNewUserMessage={handleNewUserMessage}
        title="Wilson"
        subtitle="The Wedding Bot"
      />
    </div>
  );
}
