// Wrapper Reusable Button Component
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/reduxStore';

/**
 * Reusable button component that supports multiple variants and sources.
 * It renders a button with optional icon or custom content.
 *
 * @param source - Where the button is used (e.g. navbar, hero section)
 * @param onClick - Callback when the button is clicked
 * @param customContent - Custom content to render inside the button (e.g. icon or images)
 * @param type - Button type (button, submit, or reset)
 */

interface CustomButtonProps {
    source: 'navbar' | 'hero' | 'chatHeaderNewChat' | 'chatHeaderProfile' | 'chatHeaderLogOut';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customContent?: React.ReactNode; // Avatar, Icon, etc.
    type?: 'button' | 'submit' | 'reset'; // Default is 'button'
}

const CustomButton: React.FC<CustomButtonProps> = ({ source, onClick, customContent, type }) => {
    const { buttonLabel, buttonVariant, isDisabled } = useSelector(
        (state: RootState) => state.uiButtons[source]
    );

    // Base style for the button
    const baseStyle = `flex items-center justify-center ${source === 'chatHeaderNewChat' || source === 'chatHeaderProfile' || source === 'chatHeaderLogOut' ? 'w-8 rounded' : 'w-32 rounded-lg '} h-10 cursor-pointer  font-medium transition duration-300`;
    // Determine the variant style based on the buttonVariant
    const variantStyle = (() => {
        switch (buttonVariant) {
            case 'primary':
                return 'bg-blue-600 text-white hover:bg-blue-700 px-4 py-2';
            case 'noStyle':
                return 'bg-transparent text-black hover:bg-blue-100 px-4 py-2';
            case 'secondary':
                return 'bg-gray-200 text-black hover:bg-gray-300 px-4 py-2';
            case 'danger':
                return 'bg-red-600 text-white hover:bg-red-700 px-4 py-2';
            default:
                return 'px-4 py-2';
        }
    })();
    // Enable/Disable styles
    const disabledStyle = isDisabled ? 'opacity-50 cursor-not-allowed' : '';
    // If customContent is provided, use it for the button content
    const avatarStyle = customContent ? 'w-10 h-10 rounded-full p-1 hover:bg-blue-100' : '';
    // Combine all styles
    const finalClassName = `${baseStyle} ${variantStyle} ${disabledStyle} ${avatarStyle}`;

    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={finalClassName}
            type={type || 'button'} // Default to 'button' if not specified
        >
            {customContent ?? buttonLabel}
        </button>
    );
};

export default CustomButton;
