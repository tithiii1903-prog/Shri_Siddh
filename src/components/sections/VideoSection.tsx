"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

const VIDEO_ID = "u6QDeejM0M4";
const AUTOPLAY_EMBED = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0`;
const FULL_VIDEO = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`;

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (data?.event === "onStateChange" && data?.info === 0) {
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "seekTo", args: [0, true] }),
            "*"
          );
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "playVideo" }),
            "*"
          );
        }
      } catch {}
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: isPlaying ? "pauseVideo" : "playVideo" }),
        "*"
      );
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: isMuted ? "unMute" : "mute" }),
        "*"
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[65vh] min-h-[420px] max-h-[720px] w-full overflow-hidden bg-black"
      aria-label="Hotel experience showcase video"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none scale-105">
        {shouldLoadVideo && (
          <iframe
            ref={iframeRef}
            src={AUTOPLAY_EMBED}
            title="Shri Siddh Hotel room walkthrough video"
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            tabIndex={-1}
            loading="lazy"
          />
        )}
      </div>

      <div className="absolute inset-0 -z-10">
        <Image
          src="https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167007/f867bf494ac30e8ad11e1c7e4e4c825dd0c205d9.png"
          alt="Shri Siddh luxury bedroom sanctuary with arched headboard"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <div className="absolute inset-0 z-10 pointer-events-auto" />

      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>

        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        <button
          ref={triggerRef}
          onClick={() => setIsModalOpen(true)}
          aria-label="Open fullscreen cinema view"
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors cursor-pointer"
        >
          <Maximize2 size={16} />
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} triggerRef={triggerRef}>
        <div className="relative aspect-video w-full bg-black">
          {isModalOpen && (
            <iframe
              src={FULL_VIDEO}
              title="Shri Siddh Hotel cinematic experience"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </Modal>
    </section>
  );
}
