// src/components/VideoPlayer/index.tsx
import YoutubePlayer from "./Youtube";
import Html5Player from "./Html5";
import VideojsPlayer from "./Videojs";
import { getVideoType } from "@/utils/video-utils";
import { VideoProps } from "@/types/video";

const VideoPlayer = (props: VideoProps) => {
  const videoType = getVideoType(props.url);

  const PlayerComponent = {
    youtube: YoutubePlayer,
    mp4: Html5Player,
    stream: VideojsPlayer,
  }[videoType];

  return <PlayerComponent {...props} />;
};

export default VideoPlayer;
