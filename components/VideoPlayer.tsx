"use client";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="w-[345px] tablet:w-[594px] desktop:w-[558px]">
      <ReactPlayer
        width="100%"
        height="auto"
        url="/videos/sample.mp4"
        controls={true}
        light={false}
        pip={true}
      />
      <source src="/sample.mp4" type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
