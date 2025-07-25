import AISectionGif from "../../assets/gifs/AISection.gif";

const AISectionIllustrator = () => {

    const list = [{
        id: 1,
        text: 'What are the biggest risks in deepwater drilling?',

    }, {
        id: 2,
        text: 'How can we reduce the risk of drilling accidents?',
    }, {
        id: 3,
        text: 'What are the benefits of holding an API Monogram license?',
    }];

    return (
        <div className="w-full lg:px-5 flex flex-col md:flex-row items-center gap-10" id="ai-heading">
            {/* Left Text Section */}
            <div className="max-w-xl text-left">
                <h3
                    className="text-3xl md:text-4xl font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                        Experience Intelligent&nbsp;
                    </span>
                    Gen AI Conversations with&nbsp;
                    <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                        magi
                    </span>
                </h3>

                <p
                    className="text-gray-700 mb-4 ml-1"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    'magi' – API Monogram Augmented Generative AI, delivers intelligent,
                    high-quality conversations for a smooth and reliable experience,
                    tailored to your needs. Request queries like this,
                </p>

                {/* List with Material Icons */}
                <ul className="space-y-3" data-aos="fade-up" data-aos-duration="1500">
                    {list.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <span className="material-icons text-blue-600 mr-2">
                                check_circle
                            </span>
                            <span className="text-gray-800">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Gif Section */}
            <div className="flex justify-center md:justify-end w-full md:w-1/2">
                <img
                    src={AISectionGif}
                    alt="AI Section Gif"
                    className="w-full max-w-md object-contain"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                />
            </div>
        </div>
    );
};

export default AISectionIllustrator;
