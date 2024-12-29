import { VideoProps } from "@/types/video";
import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideojsPlayer: React.FC<VideoProps> = ({
  url,
  width = "100%",
  height = "100%",
  autoplay = false,
  controls = true,
  className,
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, {
        autoplay,
        controls,
        responsive: true,
        fluid: false,
        sources: [
          {
            src: url,
            type: "application/x-mpegURL",
          },
        ],
      }));

      player.on("error", (error: unknown) => {
        console.error("Video.js error:", error);
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [url, autoplay, controls]);

  return (
    <div
      data-vjs-player
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
      className={`${className}`}
    >
      <div
        ref={videoRef}
        style={{ width: "100%", height: "100%" }}
        className="w-full h-full aspect-video bg-red-500"
      />
    </div>
  );
};

export default VideojsPlayer;
