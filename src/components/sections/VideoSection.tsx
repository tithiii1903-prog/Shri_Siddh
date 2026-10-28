"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { motion } from "framer-motion";

const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      className="relative h-[70vh] min-h-[400px] max-h-[700px] overflow-hidden"
      aria-label="Hotel showcase video"
    >
      {/* Background image */}
      <Image
        src="https://res.cloudinary.com/dgsjdegrj/image/upload/v1793132223/copy_of_f8d5fbeb71b5f40087f3f420561632e6dfa92552.png"
        alt="Towel swan sculpture on luxury hotel bed at Shri Siddh"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.button
          ref={triggerRef}
          onClick={() => setIsOpen(true)}
          aria-label="Play hotel video"
          className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Play size={28} className="fill-[var(--color-espresso)] text-[var(--color-espresso)] ml-1" />
        </motion.button>
      </div>

      {/* Video modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} triggerRef={triggerRef}>
        <div className="relative aspect-video w-full bg-black">
          {isOpen && (
            <iframe
              src={VIDEO_URL}
              title="Shri Siddh Hotel experience video"
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
