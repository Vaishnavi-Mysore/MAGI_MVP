import MagiBetaLogo from '../../assets/images/logo/magi-logo-beta.png';
import ChatHeaderActions from './handlers/ChatHeaderActions';

const ChatHeader = () => {

  console.log('Chat Header rendered');

  return (
    <div className="w-full px-4 sm:px-8 lg:px-14 py-1 backdrop-blur-xl bg-white/30 shadow-md relative z-10">
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <div>
          <img
            src={MagiBetaLogo}
            alt="Magi Logo"
            className="w-[160px] sm:w-[200px] h-[80px] sm:h-[100px] object-contain"
          />
        </div>

        {/* Button Handlers*/}
        <ChatHeaderActions />
      </div>
    </div>
  );
};

export default ChatHeader;
