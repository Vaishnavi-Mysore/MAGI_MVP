import { Link } from "react-router-dom";
import magiLogoFooter from '../../assets/images/logo/magi-fab.png';

const Footer = () => {
    return (
        <footer className="bg-[#012a5b] text-white px-2 sm:px-6 py-8 flex flex-col items-center">
            <h2 id="footer-heading" className="sr-only">Website Footer</h2>

            <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-7xl">

                {/* Logo and Description */}
                <div className="text-center sm:text-left">
                    <img
                        src={magiLogoFooter}
                        alt="MAGI Logo"
                        className="w-24 mx-auto sm:mx-0 mb-4"
                    />
                    <p className="text-sm max-w-xs mx-auto sm:mx-0">
                        The advanced generative AI solution engineered to transform operations,
                        enhance productivity, and ensure compliance for upstream oil and gas companies.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="text-center sm:text-left">
                    <h3 className="font-bold text-lg mb-2">Get in Touch</h3>
                    <p className="text-sm mb-2 max-w-[220px] mx-auto sm:mx-0">
                        #309, 2nd Floor, Al Reyami Bld, Al Karama, Dubai, UAE.
                    </p>
                    <p className="text-sm">contact@vegascg.com</p>
                    <p className="text-sm">UAE: +971 52 777 3684</p>
                    <p className="text-sm">OMN: +968 7616 2626</p>
                    <p className="text-sm">INDIA: +91 90420 64300</p>
                </div>

                {/* Links */}
                <div className="text-center sm:text-left">
                    <h3 className="font-bold text-lg mb-2">More Information</h3>
                    <ul className="space-y-1">
                        <li><Link to="/about" className="hover:text-red-500 text-sm">About Us</Link></li>
                        <li><Link to="/blog" className="hover:text-red-500 text-sm">Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-red-500 text-sm">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="text-center sm:text-left">
                    <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                    <div className="flex justify-center sm:justify-start space-x-4 mb-4">
                        <a href="https://www.facebook.com/VegasConsultingInc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <span className="material-icons text-3xl">facebook</span>
                        </a>
                        <a href="https://www.instagram.com/vegas.consulting/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <span className="material-icons text-3xl">photo_camera</span>
                        </a>
                        <a href="https://www.youtube.com/@vegasconsulting" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <span className="material-icons text-3xl">play_circle_filled</span>
                        </a>
                        <a href="https://www.linkedin.com/company/vegas-consulting" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <span className="material-icons text-3xl">linkedin</span>
                        </a>
                    </div>
                    <p className="font-semibold text-sm max-w-xs mx-auto sm:mx-0">
                        One Click Away from Optimized Operations & Performance
                    </p>
                </div>
            </div>

            {/* Footer Bottom Text */}
            <p className="text-xs text-center mt-2 px-1">
                Proprietary product of Vegas ConnIT. For more information, reach out to contact@vegascg.com.
            </p>
        </footer>
    );
};

export default Footer;
