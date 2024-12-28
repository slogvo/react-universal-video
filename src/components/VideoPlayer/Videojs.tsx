// src/components/VideoPlayer/Videojs.tsx
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { VideoProps } from "../../types/video";

const VideojsPlayer = ({
  url,
  width = "100%",
  height = "400px",
  autoplay = false,
  controls = true,
  className,
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    playerRef.current = videojs(videoRef.current, {
      sources: [
        {
          src: url,
          type: url.includes(".m3u8")
            ? "application/x-mpegURL"
            : "application/x-mpegURL",
        },
      ],
      width,
      height,
      autoplay,
      controls,
      fluid: true,
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [url]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className={`video-js vjs-big-play-centered ${className || ""}`}
      />
    </div>
  );
};

export default VideojsPlayer;
