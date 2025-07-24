import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../ui/homepage-ui/CustomButton';
import { setNavbarButtonLabel, setNavbarButtonVariant } from '../../../features/reduxslices/uiSlices/buttonSlices';
import { setSpinLoader } from '../../../features/reduxslices/loaderToggles/isSpinner';
import type { RootState } from '../../../store/reduxStore';
import ButtonSpinner from '../../ui/spinners/ButtonSpinner';
import TooltipWrapper from '../../ui/homepage-ui/TooltipWrapper';

const NavbarSignInButton = () => {
    const dispatch = useDispatch();
    const isSpinLoader = useSelector((state: RootState) => state.isSpinner.spinLoader);

    // Set label and variant only when not loading
    useEffect(() => {
        if (!isSpinLoader) {
            dispatch(setNavbarButtonLabel('Sign In'));
            dispatch(setNavbarButtonVariant('primary'));
        }
    }, [dispatch, isSpinLoader]);

    const handleNavbarSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isSpinLoader) {
            dispatch(setSpinLoader(true));
            // fake delay for loader
            setTimeout(() => dispatch(setSpinLoader(false)), 2000);
            console.log('Sign In button clicked');
        }
    };

    return (
        <TooltipWrapper tooltipText='Currently non-functional'>
        <CustomButton
            source="navbar"
            onClick={handleNavbarSignIn}
            customContent={
                isSpinLoader ? (
                    <ButtonSpinner />
                ) : undefined // fallback to buttonLabel if not loading
            }
        />
        </TooltipWrapper>
    );
};

export default NavbarSignInButton;
