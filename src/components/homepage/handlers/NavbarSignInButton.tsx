import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../common/button/CustomButton';
import { setSpinLoader } from '../../../features/reduxslices/loaderToggles/isSpinner';
import type { RootState } from '../../../store/reduxStore';
import ButtonSpinner from '../../common/spinners/ButtonSpinner';
import TooltipWrapper from '../../common/button/TooltipWrapper';

const NavbarSignInButton = () => {
    const dispatch = useDispatch();
    // Access the isSpinLoader value from the Redux store
    const isSpinLoader = useSelector((state: RootState) => state.isSpinner.spinLoader);

    const handleNavbarSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isSpinLoader) {
            dispatch(setSpinLoader(true));
            setTimeout(() => dispatch(setSpinLoader(false)), 2000);
            console.log('Sign In button clicked');
        }
    };

    return (
        <div className="flex items-center gap-4 relative">
            <div className='md:flex hidden h-6 w-0 border border-gray-300'></div>
            {/* Sign In Button with Tooltip */}
            <TooltipWrapper tooltipText="Currently non-functional">
                <CustomButton
                    label="Sign In"
                    usage="button"
                    onClick={handleNavbarSignIn}
                    customContent={isSpinLoader ? <ButtonSpinner /> : undefined}
                />
            </TooltipWrapper>
        </div>
    );
};

export default NavbarSignInButton;