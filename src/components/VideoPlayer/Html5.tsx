import { VideoProps } from "../../types/video";

const Html5Player = ({
  url,
  width = "100%",
  height = "400px",
  autoplay = false,
  controls = true,
  className,
}: VideoProps) => {
  return (
    <video
      src={url}
      width={width}
      height={height}
      controls={controls}
      autoPlay={autoplay}
      className={className}
    />
  );
};

export default Html5Player;
