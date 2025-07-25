import Brand1 from '../../assets/images/brands/brand1.webp';
import Brand2 from '../../assets/images/brands/brand2.webp';
import Brand3 from '../../assets/images/brands/brand3.webp';
import Brand4 from '../../assets/images/brands/brand4.webp';
import Brand5 from '../../assets/images/brands/brand5.webp';
import Brand6 from '../../assets/images/brands/brand6.webp';
import Brand7 from '../../assets/images/brands/brand7.webp';
import Brand8 from '../../assets/images/brands/brand8.webp';
import Brand9 from '../../assets/images/brands/brand9.webp';
import Brand10 from '../../assets/images/brands/brand10.webp';
import Brand11 from '../../assets/images/brands/brand11.webp';
import Brand12 from '../../assets/images/brands/brand12.webp';
import '../../App.css';

const brandLogos = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9, Brand10, Brand11, Brand12]; // repeat for effect

const PartnersCarousel = () => {
  return (
    <div className="w-full py-10 px-6 md:px-16" id='partners-heading'>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Trusted by the World's Largest Global Brands
          </h2>
        </div>

        {/* Right: Logos Carousel */}
        <div className="overflow-hidden w-full">
          <div className="flex partners-slider gap-10 items-center">
            {brandLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Brand ${index + 1}`}
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
