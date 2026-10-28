"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { motion } from "framer-motion";

// Luxury hotel experience ambient showcase video
const VIDEO_ID = "Pj_79VzC2l4";
const AUTOPLAY_EMBED = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`;
const FULL_VIDEO = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`;

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
      className="relative h-[65vh] min-h-[420px] max-h-[720px] w-full overflow-hidden bg-black"
      aria-label="Hotel experience showcase video"
    >
      {/* 1. Autoplaying Background Video Stream (Indra Kumar: Auto play video) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none scale-105">
        <iframe
          ref={iframeRef}
          src={AUTOPLAY_EMBED}
          title="Shri Siddh Hotel room walkthrough video"
          className="w-full h-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          tabIndex={-1}
        />
      </div>

      {/* 2. Fallback Poster Layer (Figma bedroom from Image 2) */}
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

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* 3. Center Play/Pause & Fullscreen Button from Figma */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.button
          ref={triggerRef}
          onClick={() => setIsModalOpen(true)}
          aria-label="Watch full video with sound"
          className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
        >
          <Play size={24} className="fill-[#1a1208] text-[#1a1208] ml-1 group-hover:text-[#b8933f] transition-colors" />
        </motion.button>
      </div>

      {/* 4. Ambient Video Controls Bar (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        {/* Play / Pause Toggle */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>

        {/* Mute / Unmute Toggle */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        {/* Fullscreen Modal trigger */}
        <button
          onClick={() => setIsModalOpen(true)}
          aria-label="Open fullscreen cinema view"
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors"
        >
          <Maximize2 size={16} />
        </button>
      </div>

      {/* Fullscreen Video Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} triggerRef={triggerRef}>
        <div className="relative aspect-video w-full bg-black">
          {isModalOpen && (
            <iframe
              src={FULL_VIDEO}
              title="Shri Siddh Hotel cinematic experience"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </Modal>
    </section>
  );
}
