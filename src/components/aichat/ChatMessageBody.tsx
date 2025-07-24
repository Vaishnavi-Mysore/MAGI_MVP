import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MagiLogo from '../../assets/images/logo/magi-fab.png'
import type { RootState } from '../../store/reduxStore'; // Adjust based on your structure

const ChatMessageBody: React.FC = () => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // If Messages are empty, show welcome message
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md">
        <div className="flex flex-col items-center space-y-2">
          <img
            src={MagiLogo}
            alt="Magi Logo"
            className="w-24 opacity-90"
          />
          <p className="text-lg font-bold font-sans text-gray-500">
            <span className='text-[#15477A]'>Welcome{" "}</span>
            <span className='text-[#AA0732]'>Guest</span>
          </p>
        </div>
      </div>
    );
  }

  // For every message the components gets renders can be optimized
  console.log('Chat Body rendered');

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50 rounded-md">
      {messages.map((msg) => (
        <div
          key={msg.timestamp}
          className={`flex flex-col items-${msg.sender === 'user' ? 'end' : 'start'
            }`}
        >
          <div
            className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg text-sm shadow-md ${msg.sender === 'user'
              ? 'bg-[#15477A] text-white rounded-br-none'
              : 'bg-[#AA0732] text-white rounded-bl-none'
              }`}
          >
            {msg.content}
          </div>
          <span className="text-xs text-gray-500 mt-0.5 px-2">
            {formatTime(msg.timestamp)}
          </span>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatMessageBody;
