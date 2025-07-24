import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import InputField from '../../components/ui/form-ui/InputField';
import CustomButton from '../ui/homepage-ui/CustomButton';
import { sendMessage } from '../../features/reduxslices/chatSlice/chatSlice'; // <-- import your action
import TooltipWrapper from '../ui/homepage-ui/TooltipWrapper';
import { useEffect } from 'react';

type ChatFormValues = {
  message: string;
};

const ChatInput = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChatFormValues>();

  // Messages are dispatched to the Redux store
  const onSubmit = (data: ChatFormValues) => {
    const trimmedMessage = data.message.trim();
    if (trimmedMessage) {
      dispatch(sendMessage({ content: trimmedMessage }));
      reset();
    }
  };

  // Icons to add files
  const addIcon = (
    <TooltipWrapper tooltipText='File'>
      <CustomButton
        source="chatHeaderNewChat"
        type="button"
        customContent={<span className="material-icons">add</span>}
      />
    </TooltipWrapper>
  );

  // Icon to send messages
  const sendIcon = (
    <TooltipWrapper tooltipText='Send'>
      <CustomButton
        source="chatHeaderLogOut"
        type="submit"
        customContent={<span className="material-icons">send</span>}
      />
    </TooltipWrapper>
  );

  // Render the chat input Onchange the component not rendered 
  useEffect(() => {
    console.log('Chat Input rendered');
  }, []);


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-white flex items-center"
    >
      <InputField
        name="message"
        label=""
        placeholder="Send a message"
        register={register}
        error={errors.message}
        required
        rightElement={
          <div className="flex items-center gap-2 pr-1">
            {addIcon}
            {sendIcon}
          </div>
        }
      />
    </form>
  );
};

export default ChatInput;
