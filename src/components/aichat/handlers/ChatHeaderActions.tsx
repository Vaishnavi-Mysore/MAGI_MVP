// ChatHeaderActions.tsx
import { useEffect, useRef, useState } from 'react';
import CustomButton from '../../common/button/CustomButton';
import TooltipWrapper from '../../common/button/TooltipWrapper';

const ChatHeaderActions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const popoverRef = useRef(null);

  const chatBubble = <span className="material-icons text-blue-500">chat</span>;
  const accountCircle = <span className="material-icons text-blue-500">account_circle</span>;
  const logOutIcon = <span className="material-icons">close</span>;
  const menuIcon = isMenuOpen ? '✕' : '☰';

  // Handle outside click
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

  return (
    <>
      {/* Mobile (Popover) */}
      <div className="sm:hidden relative" ref={popoverRef}>
        <CustomButton
          label=''
          usage='icon'
          onClick={() => setIsMenuOpen((prev) => !prev)}
          customContent={<span className="text-xl">{menuIcon}</span>}
        />

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 z-50 flex flex-col items-start gap-2 px-3">
            <div className="flex items-center gap-2">
              <CustomButton label='' usage='icon' variant='secondary' customContent={chatBubble} />
              <span className="text-sm text-gray-700">New Chat</span>
            </div>
            <div className="flex items-center gap-2">
              <CustomButton label='' usage='icon' variant='secondary' customContent={accountCircle} />
              <span className="text-sm text-gray-700">Profile</span>
            </div>
            <div className="flex items-center gap-2">
              <CustomButton label='' usage='icon' variant='danger' customContent={logOutIcon} />
              <span className="text-sm text-gray-700">Close</span>
            </div>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex gap-4 items-center">
        <TooltipWrapper tooltipText="New Chat">
          <CustomButton label='' usage='icon' variant='secondary' customContent={chatBubble} />
        </TooltipWrapper>
        <TooltipWrapper tooltipText="Profile">
          <CustomButton label='' usage='icon' variant='secondary' customContent={accountCircle} />
        </TooltipWrapper>
        <TooltipWrapper tooltipText="Close">
          <CustomButton label='' usage='icon' variant='danger' customContent={logOutIcon} />
        </TooltipWrapper>
      </div>
    </>
  );
};

export default ChatHeaderActions;
