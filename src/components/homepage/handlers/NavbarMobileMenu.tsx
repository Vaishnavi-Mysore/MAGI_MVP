import { useState } from 'react';
import CustomButton from '../../common/button/CustomButton';
import NavbarSignInButton from './NavbarSignInButton';


const NavbarMobileMenu = () => {
    // State to Open the respective Dropdown
    const [isOpen, setIsOpen] = useState(false);
    // State to Open the Navbar Component
    const toggleMenu = () => setIsOpen(!isOpen);
    // Navbar Links 
    const navBarList1 = ['Platform', 'Solutions', 'Pricing', 'Enterprise'];
    const navBarList2 = ['🌐'];

    return (
        <div className="lg:hidden">
            {/* Hamburger Button */}
            <CustomButton
                usage='icon'
                label=''
                variant='secondary'
                onClick={toggleMenu}
                customContent={
                    <span className="material-icons text-3xl">{isOpen ? 'close' : 'menu'}</span>
                }
                aria-label="Toggle mobile menu"
            >
            </CustomButton>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 px-4 py-4 space-y-4 max-h-[80vh] flex flex-col">
                    {/* Scrollable navBarList1 */}
                    <div className="overflow-y-auto max-h-[50vh] pr-1">
                        <ul className="flex flex-col space-y-3 text-gray-700 font-medium">
                            {navBarList1.map((item, index) => (
                                <li key={index}>
                                    <CustomButton
                                        label={item}
                                        usage="link"
                                        variant="noStyle"
                                        onClick={() => setIsOpen(false)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* navBarList2 & Sign In */}
                    <div className="pt-4 flex flex-row justify-between border-t border-gray-200">
                        <ul className="flex space-x-4 text-gray-700 font-medium mb-2">
                            {navBarList2.map((item, index) => (
                                <li key={index}>
                                    <CustomButton label={item} usage="link" variant="noStyle" />
                                </li>
                            ))}
                        </ul>
                            
                        <NavbarSignInButton />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavbarMobileMenu;
