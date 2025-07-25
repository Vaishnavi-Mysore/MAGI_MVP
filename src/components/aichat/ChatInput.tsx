import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CustomButton from '../common/button/CustomButton';
import { receiveMessage, sendMessage } from '../../features/reduxslices/chatSlice/chatSlice';
import { useEffect } from 'react';
import { usePostItemMutation } from '../../services/chat-api/chat-api';

type ChatFormValues = {
  message: string;
};

const ChatInput = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ChatFormValues>();
  const [postItem] = usePostItemMutation();

  const onSubmit = async (data: ChatFormValues) => {
    const trimmedMessage = data.message.trim();
    if (!trimmedMessage) return;

    dispatch(sendMessage({ content: trimmedMessage }));
    reset();

    try {
      const apiResponse = await postItem({ query: trimmedMessage }).unwrap();

      let content = "";
      if ("content" in apiResponse && typeof apiResponse.content === "string") {
        content = apiResponse.content;
      } else if ("response" in apiResponse && typeof apiResponse.response === "string") {
        content = apiResponse.response;
      }
      dispatch(receiveMessage({ content }));
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const addIcon = (
    <CustomButton
      label=""
      usage="icon"
      variant="secondary"
      type="button"
      customContent={<span className="material-icons">add</span>}
    />
  );

  const sendIcon = (
    <CustomButton
      label=""
      usage="icon"
      variant="danger"
      type="submit"
      customContent={<span className="material-icons">send</span>}
    />
  );

  useEffect(() => {
    console.log("Chat Input rendered");
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white w-full">
      {/* Group container with border */}
      <div
        className={`border rounded-2xl shadow-md flex flex-col gap-2 p-2 ${errors.message ? "border-red-500" : "border-gray-300"
          }`}
      >
        {/* Textarea without border */}
        <textarea
          {...register("message", { required: true })}
          placeholder="Ask Magi"
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              // Find the closest form and submit it
              const form = (e.target as HTMLElement).closest('form');
              if (form) {
                form.requestSubmit();
              }
            }
          }}
          className="w-full resize-none overflow-hidden outline-none p-1 border-none focus:ring-0"
          rows={1}
        />

        {/* Icons row */}
        <div className="flex justify-between items-center px-1">
          {addIcon}
          {sendIcon}
          {/* Hidden submit button to allow Enter key to send messages */}
          <button type="submit" style={{ display: 'none' }} aria-hidden="true" tabIndex={-1}></button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
