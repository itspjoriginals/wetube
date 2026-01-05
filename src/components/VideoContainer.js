import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

const getVideos = async () => {
  try {
    const res = await fetch(YOUTUBE_VIDEO_URL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const json = await res.json();
    setVideos(json.items);
  } catch (error) {
    console.error("YouTube API error:", error);
  }
};


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
