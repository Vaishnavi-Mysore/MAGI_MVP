// Sample page to find the effectiveness in redux setup
import CustomButton from '../ui/homepage-ui/CustomButton';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setHeroButtonLabel, setHeroButtonVariant } from '../../features/reduxslices/uiSlices/buttonSlices';
import { useNavigate } from 'react-router-dom';
import TooltipWrapper from '../ui/homepage-ui/TooltipWrapper';

const HeroSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Conditionally label and variant can be changed 
    // Set initial button style and label for hero section
    dispatch(setHeroButtonLabel('Get Started'));
    dispatch(setHeroButtonVariant('secondary'));
  }, [dispatch]);
  console.log('HeroSection rendered');

  // Sign Up Button Functionality
  const handleHeroSectionSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Logic for sign up can be added here
    console.log('Sign Up button clicked');
    navigate('/chat'); // Navigate to the sign-up page
  };

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
        Welcome to Magi Platform
      </h1>
      <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl">
        Generative AI Assistance for Oil & Gas Operations
        Boost productivity, streamline operations, and manage compliance seamlessly with magi—your innovative and reliable solution for the oil and gas industry.
      </p>
      <TooltipWrapper tooltipText='Click to Chat'>
        <CustomButton source="hero" onClick={handleHeroSectionSignUp} />
      </TooltipWrapper>
    </section>
  );
};

export default HeroSection;
