import ChatMessageBody from "../../components/aichat/ChatMessageBody";
import ChatHeader from "../../components/aichat/ChatHeader";
import ChatInput from "../../components/aichat/ChatInput";

const AIChatLayout = () => {
  return (
    <>
      {/* Full width responsive ChatHeader */}
      <div className="w-full">
        <ChatHeader />
      </div>

      {/* Constrained main chat layout */}
      <div className="flex flex-col h-[calc(100vh-110px)] max-w-5xl mx-auto rounded">
        <ChatMessageBody />
        <ChatInput />
      </div>
    </>
  );
};

export default AIChatLayout;
