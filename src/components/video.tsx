import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

interface HlsVideoProps {
  src: string;
}

export default function HlsVideo({ src }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Required for autoplay on all browsers
    video.muted = true;

    let hls: Hls | null = null;
    let player: Plyr | null = null;

    // HLS support
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src; // For Safari
    }

    // Plyr initialization (CSS required)
    player = new Plyr(video, {
      autoplay: true,
      muted: true,
      loop: { active: true }
    });

    // Force looping manually (HLS + Plyr)
    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (hls) hls.destroy();
      if (player) player.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      preload="auto"
      autoPlay
      muted
      playsInline
      webkit-playsinline
      loop
      controls
    />
  );
}
