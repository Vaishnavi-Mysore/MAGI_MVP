import AISectionIllustrator from "../../components/homepage/AISectionIllustrator";
import Footer from "../../components/homepage/Footer";
import HeroSection from "../../components/homepage/HeroSection";
import Navbar from "../../components/homepage/Navbar";
import PartnersCarousel from "../../components/homepage/PartnersCarousel";
import VideoSection from "../../components/homepage/VideoSection";
import WhyChooseSection from "../../components/homepage/WhyChooseSection";

const Home = () => {
    console.log("Homepage rendered");

    return (
        <>
            {/* Header & Navigation */}
            <header>
                <nav
                    className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 shadow-md px-6 py-4 flex items-center justify-between transition-colors duration-300"
                    aria-label="Primary Navigation"
                >
                    <Navbar />
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-28 md:pt-24">
                {/* Hero Section */}
                <section
                    className="flex flex-col items-center justify-center text-center py-10 md:py-20 px-3 md:px-6 bg-gradient-to-b from-white to-blue-50"
                    aria-labelledby="hero-heading"
                >
                    <HeroSection />
                </section>

                {/* Video Section */}
                <section
                    className="flex flex-col items-center lg:pt-6 md:pb-16 md:pt-4 px-3 md:px-6 bg-gradient-to-t from-white to-blue-50"
                    aria-labelledby="video-heading"
                >
                    <VideoSection />
                </section>

                {/* Partners Carousel */}
                <section
                    className="flex flex-col items-center py-16 md:py-20 px-3 md:px-6 bg-gradient-to-t from-blue-50  to-white"
                    aria-labelledby="partners-heading"
                >
                    <PartnersCarousel />
                </section>

                {/* Why Choose Us Features of Magi */}
                <section
                    className="flex flex-col items-center py-16 md:py-20 px-3 md:px-6 bg-gradient-to-t from-blue-50 to-white"
                    aria-labelledby="whychoose-heading"
                >
                    <WhyChooseSection />
                </section>

                {/* AI Section Illustrator */}
                <section
                    className="flex flex-col items-center py-16 md:py-20 px-3 md:px-6 bg-gradient-to-t from-white to-blue-50"
                    aria-labelledby="ai-heading"
                >
                    <AISectionIllustrator />
                </section>
            </main>

            {/* Footer */}
            <footer aria-labelledby="footer-heading">
                <Footer />
            </footer>
        </>
    );
};

export default Home;
