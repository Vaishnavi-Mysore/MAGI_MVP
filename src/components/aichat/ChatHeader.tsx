import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import MagiBetaLogo from '../../assets/images/logo/magi-logo-beta.png';
import CustomButton from '../ui/homepage-ui/CustomButton';
import {
  setChatHeaderLogOutButtonLabel,
  setChatHeaderLogOutButtonVariant,
  setChatNewChatHeaderButtonLabel,
  setChatNewChatHeaderButtonVariant,
} from '../../features/reduxslices/uiSlices/buttonSlices';
import TooltipWrapper from '../ui/homepage-ui/TooltipWrapper';

const ChatHeader = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    dispatch(setChatNewChatHeaderButtonLabel('+'));
    dispatch(setChatNewChatHeaderButtonVariant('secondary'));

    dispatch(setChatHeaderLogOutButtonLabel('✕'));
    dispatch(setChatHeaderLogOutButtonVariant('danger'));
  }, [dispatch]);

  // Close popover on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        popoverRef.current &&
        !(popoverRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Define Chat Bubble
  const chatBubble = (
    <span className="material-icons text-blue-500">chat</span>
  );

  // Define Account circle
  const accountCircle = (
    <span className="material-icons text-blue-500">account_circle</span>
  );

  // Define Log Out
  const logOutIcon = (
    <span className="material-icons">close</span>
  );

  // Render the chat header 
  console.log('Chat Header rendered');

  return (
    <div className="w-full px-4 sm:px-8 lg:px-14 py-2 bg-white relative z-10">
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <div>
          <img
            src={MagiBetaLogo}
            alt="Magi Logo"
            className="w-[160px] sm:w-[200px] h-[80px] sm:h-[100px] object-contain"
          />
        </div>
        {/* Hamburger / Close Button (Mobile Only) */}
        <div className="sm:hidden relative" ref={popoverRef}>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-black p-2 rounded-md hover:bg-gray-100 text-xl"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Popover directly below hamburger */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 z-50 flex flex-col items-start gap-2 px-3">
              <div className="flex items-center gap-2">
                <CustomButton source="chatHeaderNewChat" customContent={chatBubble} />
                <span className="text-sm text-gray-700">New Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <CustomButton source="chatHeaderProfile" customContent={accountCircle} />
                <span className="text-sm text-gray-700">Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <CustomButton source="chatHeaderLogOut" customContent={logOutIcon} />
                <span className="text-sm text-gray-700">Close</span>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex gap-4 items-center">
          <TooltipWrapper tooltipText='New Chat'>
            <CustomButton source="chatHeaderNewChat" customContent={chatBubble} />
          </TooltipWrapper>
          <TooltipWrapper tooltipText='Profile'>
            <CustomButton source="chatHeaderProfile" customContent={accountCircle} />
          </TooltipWrapper>
          <TooltipWrapper tooltipText='Close'>
            <CustomButton source="chatHeaderLogOut" customContent={logOutIcon} />
          </TooltipWrapper>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
