import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface VideoProps {
  url: string;
  width?: string;
  height?: string;
  autoplay?: boolean;
  controls?: boolean;
  className?: string;
}

const VideojsPlayer: React.FC<VideoProps> = ({
  url,
  width = "100%",
  height = "400px",
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

      const player = (playerRef.current = videojs(
        videoElement,
        {
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
          html5: {
            vhs: {
              overrideNative: true,
              enableLowInitialPlaylist: true,
              smoothQualityChange: true,
              allowSeeksWithinUnsafeLiveWindow: true,
            },
            nativeAudioTracks: false,
            nativeVideoTracks: false,
          },
          liveui: true,
        },
        () => {
          console.log("Player is ready");

          // Add event listeners for debugging
          player.on("waiting", () => {
            console.log("Player is buffering");
          });

          player.on("canplay", () => {
            console.log("Player can play");
          });
        }
      ));

      // Enhanced error handling
      player.on("error", (error: any) => {
        const errorDetails = {
          code: player.error()?.code,
          message: player.error()?.message,
          type: error.type,
        };
        console.error("Video.js player error:", errorDetails);
      });
    } else if (playerRef.current) {
      const player = playerRef.current;
      player.src({
        src: url,
        type: "application/x-mpegURL",
      });

      player.autoplay(autoplay);
      player.controls(controls);
    }

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [url, autoplay, controls]);

  const containerStyle = {
    width,
    height,
  };

  return (
    <div data-vjs-player style={containerStyle} className={className}>
      <div ref={videoRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default VideojsPlayer;
