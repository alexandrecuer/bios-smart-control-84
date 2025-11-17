import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

//const isAndroid = /Android/i.test(navigator.userAgent);
const isMobile = window.innerWidth <= 768; // seuil à adapter

interface HlsVideoProps {
  src: string; // "videos/add_service"
}

export default function HlsVideo({ src }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (isMobile) {
    return (
      <img
        src={`${src}/preview.webp`}
        alt="Animation"
        className="w-full h-auto rounded-lg"
      />
    );
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSrc = `${src}/playlist.m3u8`;
    const mp4Src = `${src}/video.mp4`;

    // --- HLS.js on desktop browsers ---
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsSrc);
      hls.attachMedia(video);
    }
    // --- Native HLS (iOS Safari, macOS Safari) ---
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSrc;
    }
    // --- Fallback ---
    else {
      video.src = mp4Src;
    }

    const player = new Plyr(video, {
      autoplay: true,
      muted: true,
      loop: { active: true }
    });

    return () => player.destroy();
  }, [src]);

  return (
    <video
      ref={videoRef}
      preload="auto"
      webkit-playsinline="true"
      autoPlay
      muted
      playsInline
      loop
      controls
    />
  );
}
