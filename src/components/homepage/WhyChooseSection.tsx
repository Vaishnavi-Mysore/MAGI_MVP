import WhyChooseImage1 from "../../assets/images/whyChoose/whychoose-1.png";
import WhyChooseImage2 from "../../assets/images/whyChoose/whychoose-2.png";
import WhyChooseImage3 from "../../assets/images/whyChoose/whychoose-3.png";
import WhyChooseImage4 from "../../assets/images/whyChoose/whychoose-4.png";
import WhyChooseImage5 from "../../assets/images/whyChoose/whychoose-5.png";
import WhyChooseImage6 from "../../assets/images/whyChoose/whychoose-6.png";

const cards = [
    {
        img: WhyChooseImage1,
        title: "Endless Cloud Possibilities for Businesses",
        bg: "from-pink-50 to-pink-100"
    },
    {
        img: WhyChooseImage4,
        title: "Explore AI",
        bg: "from-yellow-50 to-yellow-100"
    },
    {
        img: WhyChooseImage2,
        title: "Chat Smarter with Natural Language Understanding",
        bg: "from-cyan-50 to-cyan-100"
    },
    {
        img: WhyChooseImage5,
        title: "Automates Tasks, Empowering Teams",
        bg: "from-green-50 to-green-100"
    },
    {
        img: WhyChooseImage3,
        title: "Get Actionable Insights",
        bg: "from-purple-50 to-purple-100"
    },
    {
        img: WhyChooseImage6,
        title: "Adaptable for Desktop and Mobile",
        bg: "from-pink-50 to-orange-100"
    }
];

const WhyChooseSection = () => {
    return (
        <div className="w-full px-6 md:px-16 py-12" id="whychoose-heading">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                <div className="max-w-7xl text-center lg:ml-10">
                    <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-3">
                        Why Choose Our AI Chatbot for Oil &amp; Gas Success?
                    </h2>
                    <p className="text-lg text-gray-700">
                        Enhance efficiency and ensure compliance with our AI chatbot,
                        specifically designed to drive success in the oil and gas industry
                    </p>
                </div>
            </div>

            {/* Grid Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`rounded-xl shadow-md bg-gradient-to-br ${card.bg} p-6 flex flex-col items-center text-center`}
                    >
                        <img src={card.img} alt={card.title} className="lg:h-56 h-32 w-auto object-contain mb-4" />
                        <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseSection;
