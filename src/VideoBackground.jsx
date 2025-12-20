import React from "react";


const VideoBackground = () => {
  return (
    <div className="videoContainer">
      <video className="video" autoPlay loop muted>
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>
      {/* Is div ke andar aap apna content daal sakte hain */}
      <div className="contentOverlay">
          <h1>Welcome to my website</h1>
      </div>
    </div>
  );
};

export default VideoBackground;