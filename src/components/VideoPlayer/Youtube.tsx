import { getYoutubeId } from "@/utils/video-utils";
import { VideoProps } from "../../types/video";
const YoutubePlayer = ({
  url,
  width = "100%",
  height = "400px",
}: VideoProps) => {
  const videoId = getYoutubeId(url);

  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default YoutubePlayer;
