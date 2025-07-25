import CustomButton from '../common/button/CustomButton';
import { useNavigate } from 'react-router-dom';
import TooltipWrapper from '../common/button/TooltipWrapper';

const HeroSection = () => {
  const navigate = useNavigate();

  console.log('HeroSection rendered');

  // Sign Up Button Functionality must be isolated
  const handleHeroSectionSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Sign Up button clicked');
    navigate('/chat'); // Current Chat page
  };

  return (
    <>
      <h1 id="hero-heading" className="text-3xl md:text-5xl font-bold text-[#15477A] mb-3">
        Welcome to Magi Platform
      </h1>
      <p className="md:text-lg text-xs inline-block bg-pink-100 text-red-600 md:px-4 md:py-2 px-1 py-1 rounded-full font-thin mb-4">
        WORLD'S 1ST AI-POWERED UPSTREAM CONSULTING HOUSE FREE DEMO
      </p>
      <h2 className="md:text-3xl text-lg font-normal text-blue-900 max-w-2xl mx-auto mb-3">
        Generative{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-pink-600 to-red-700">
          AI Assistance
        </span>{" "}
        for Oil &amp; Gas Operations
      </h2>
      <p className="text-gray-800 md:text-lg text-xs tracking-wide max-w-3xl mx-auto mb-4">
        Boost productivity, streamline operations, and manage compliance seamlessly with{" "}
        <strong>magi</strong> — your innovative and reliable solution for the oil and gas industry.
      </p>
      {/* Isolate the CustomButton and do API calls and state changes */}
      <TooltipWrapper tooltipText='Click to Chat'>
        <CustomButton label="Get Started" usage="button" variant='secondary' onClick={handleHeroSectionSignUp} />
      </TooltipWrapper>
    </>
  );
};

export default HeroSection;
