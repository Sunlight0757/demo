"use client";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer
        width="100%"
        height="auto"
        url="/sample.mp4"
        controls={true}
        light={false}
        pip={true}
      />
      <source src="/sample.mp4" type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
