import { useEffect, useRef, useState } from "react";
import CustomButton from "../common/button/CustomButton";

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    // Toggle mute/unmute state
    const toggleMute = () => {
        if (!videoRef.current) return;
        const newMutedState = !videoRef.current.muted;
        videoRef.current.muted = newMutedState;
        setIsMuted(newMutedState);
    };

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.muted = true;
            video.play().catch(() => { });

            // Restart the video when it ends
            const handleEnded = () => {
                video.currentTime = 0;
                video.play().catch(() => { });
            };
            video.addEventListener("ended", handleEnded);

            // Handle tab visibility changes
            const handleVisibilityChange = () => {
                if (document.hidden) {
                    video.pause();
                } else {
                    video.play().catch(() => { });
                }
            };
            document.addEventListener("visibilitychange", handleVisibilityChange);

            // Cleanup
            return () => {
                video.removeEventListener("ended", handleEnded);
                document.removeEventListener("visibilitychange", handleVisibilityChange);
                video.pause();
                video.currentTime = 0;
            };
        }
    }, []);

    return (
        <div className="relative w-full h-[calc(100vh-120px)]" id="video-heading">
            <video
                ref={videoRef}
                className="rounded-4xl absolute top-0 left-0 w-full h-full object-cover"
                playsInline
            >
                <source
                    src="https://www.vegascg.com/wp-content/themes/vegas/assets/media/workflow-video.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Volume Toggle Button */}
            <div className="absolute top-4 left-4 p-2 rounded-full hover:bg-black/80 transition">
                <CustomButton
                    label=""
                    usage="icon"
                    variant="secondary"
                    onClick={toggleMute}
                    customContent={
                        <span className="material-icons text-xl">
                            {isMuted ? "volume_off" : "volume_up"}
                        </span>
                    }
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                />
            </div>
        </div>
    );
};

export default VideoSection;
