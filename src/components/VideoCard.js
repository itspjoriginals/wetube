const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics || {};

  return (
    <div className="w-full cursor-pointer">
      {/* Thumbnail */}
      <img
        className="w-full rounded-xl object-cover"
        alt="video-thumbnail"
        src={thumbnails?.medium?.url}
      />

      {/* Video Info */}
      <div className="mt-3">
        <h2 className="font-semibold text-sm line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          {channelTitle}
        </p>

        <div className="text-gray-500 text-xs mt-1">
          <span>{Number(viewCount).toLocaleString()} views</span>
          <span className="mx-1">•</span>
          <span>{new Date(publishedAt).toDateString()}</span>
        </div> 
      </div>
    </div>
  );
};

export default VideoCard;
