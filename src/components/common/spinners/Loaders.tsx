import MagiLogo from "../../../assets/images/logo/magi-fab.png"
const Loaders = () => {
    return (

        <div className="flex items-center justify-center h-screen">
            <img
                src={MagiLogo}
                alt="Loading..."
                className="animate-pulse w-12 h-12"
            />
        </div>

    )
}

export default Loaders