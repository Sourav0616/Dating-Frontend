import React, { useRef, useEffect, useState } from "react";



const VideoPlayer = ({cloudinaryVideoUrl}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleVideoEnded = () => {
      
      // Add any logic you want to perform when the video ends
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setShowButton(false);

      // Set a timeout to make the button visible after 2 seconds
      // setTimeout(() => {
      //   setShowButton(true);
      // }, 2000);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowButton(true);
    };

    const videoElement = videoRef.current;

    if (videoElement) {
      // Adding event listeners for play, pause, and ended events
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePause);
      videoElement.addEventListener("ended", handleVideoEnded);

      // Cleanup function to remove the event listeners when the component unmounts
      return () => {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
        videoElement.removeEventListener("ended", handleVideoEnded);
      };
    }
  }, []);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  return (
    <div className="video-container flex-col relative justify-center items-center flex max-w-[360px] h-auto m-auto box-content rounded-xl border-2 border-yellow-600 object-cover p-1">
      <video
        ref={videoRef}
        src={cloudinaryVideoUrl}
        className="video-player rounded-xl"
        onClick={handlePlayPause}
        controls={false} // Remove the default controls
      />
      {/* Custom controls */}
      {showButton && (
        <div className="custom-controls bg-yellow-600 absolute w-16 h-16 rounded-full flex justify-center items-center ">
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          {/* You can add more custom controls here */}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
