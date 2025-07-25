import { useEffect, useState } from "react";
import CustomButton from "../../common/button/CustomButton";
import Platform from "../../magi/navbarComponents/Platform";
import Solutions from "../../magi/navbarComponents/Solutions";
import { useDispatch } from "react-redux";
import { setNavbarLinks } from "../../../features/reduxslices/navbarSlice/navBarSlice";
import NavbarSignInButton from "./NavbarSignInButton";
import { Link } from 'react-router-dom';
import MagiLogo from '../../../assets/images/logo/magi-logo-beta.png';
import NavbarMobileMenu from "./NavbarMobileMenu";

const NavbarLinks = () => {
  // State to Open the respective Dropdown and change the dropdown icon
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // State to Open the Navbar Component
  const [openComponents, setOpenComponents] = useState(-1);

  const dispatch = useDispatch();

  const navBarList1 = ['Platform', 'Solutions', 'Pricing', 'Enterprise'];
  const navBarList2 = ['🌐'];

  const handleLinkClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
    setOpenComponents(prev => (prev === index ? -1 : index));
  };

  const getDropdownIcon = (index: number) => {
    const iconName = activeIndex === index ? 'arrow_drop_up' : 'arrow_drop_down';
    return <span className="material-icons transition-transform duration-200">{iconName}</span>;
  };

  const shouldShowDropdownIcon = (item: string) => {
    return item === 'Platform' || item === 'Solutions';
  };

  const componentMap: Record<string, React.ReactNode> = {
    Platform: <Platform />,
    Solutions: <Solutions />,
  };

  useEffect(() => {
    if (openComponents !== -1) dispatch(setNavbarLinks(true));
    return () => {
      dispatch(setNavbarLinks(false));
    };
  }, [openComponents, dispatch]);


  return (
    <div className="w-full px-4 md:px-8" id="Primary Navigation">
      <div className="flex items-center justify-between w-full py-2">
        {/* LEFT SIDE: Logo + navBarList1 */}
        <div className="flex items-center space-x-10">
          {/* Magi Logo */}
          <Link to="/">
            <img src={MagiLogo} alt="Magi Logo" className="lg:w-44 w-32 inline-block mr-2" />
          </Link>

          <ul className="hidden lg:flex space-x-8 text-gray-700 font-medium">
            {navBarList1.map((item, index) => (
              <li key={index}>
                <CustomButton
                  label={!shouldShowDropdownIcon(item) ? item : ""}
                  usage="link"
                  variant="noStyle"
                  onClick={() => handleLinkClick(index)}
                  customContent={
                    shouldShowDropdownIcon(item) ? (
                      <span className="flex items-center gap-1 relative">
                        {item}
                        {getDropdownIcon(index)}
                      </span>
                    ) : undefined
                  }
                />
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE: navBarList2 + SignIn Button */}
        <div className="flex items-center space-x-4">
          {/* Desktop items */}
          <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
            {navBarList2.map((item, index) => (
              <li key={index}>
                <CustomButton label={item} usage="link" variant="noStyle" />
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <NavbarSignInButton />
          </div>

          {/* Mobile menu button */}
          <NavbarMobileMenu />
        </div>
      </div>

      {/* Dynamic dropdown components */}
      {openComponents !== -1 && (
        <div className="fixed top-[80px] left-0 w-full z-40 pointer-events-auto">
          <div className="bg-white bg-opacity-90 shadow-md p-4">
            {componentMap[navBarList1[openComponents]]}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarLinks;
