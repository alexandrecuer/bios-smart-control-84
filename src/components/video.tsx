import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const isAndroid = /Android/i.test(navigator.userAgent);

interface HlsVideoProps {
  src: string; // "videos/add_service"
}

export default function HlsVideo({ src }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSrc = `${src}/playlist.m3u8`;
    const mp4Src = `${src}/video.mp4`;

    // --- HLS.js on desktop browsers ---
    if (!isAndroid && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsSrc);
      hls.attachMedia(video);
    }
    // --- Native HLS (iOS Safari, macOS Safari) ---
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSrc;
    }
    // --- Fallback MP4 for Android Chrome + all non-HLS browsers ---
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
      autoPlay
      muted
      playsInline
      webkit-playsinline
      loop
      controls
    />
  );
}
