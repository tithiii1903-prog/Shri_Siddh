"use client";

import Image from "next/image";
import Link from "next/link";
import { BedDouble, Users, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import { type Room } from "@/data/rooms";
import { cn } from "@/lib/utils";

interface RoomCardProps {
  room: Room;
  className?: string;
}

export function RoomCard({ room, className }: RoomCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col bg-white overflow-hidden cursor-pointer",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
        "transition-shadow duration-500",
        className
      )}
    >
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={room.image}
          alt={room.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-luxury)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[var(--color-espresso)]/0 group-hover:bg-[var(--color-espresso)]/25 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            initial={{ y: 12 }}
            whileHover={{ y: 0 }}
            className="px-6 py-2.5 bg-white text-[var(--color-espresso)] text-sm font-semibold tracking-wide"
          >
            View Details
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="label-text">{room.tier}</span>
          <span className="text-xs text-[var(--color-brown-mid)]">
            Start{" "}
            <span className="font-semibold text-[var(--color-espresso)]">
              {room.currency}
              {room.pricePerNight.toLocaleString("en-IN")}
            </span>
            /night
          </span>
        </div>

        <h3 className="font-serif font-bold text-xl text-[var(--color-espresso)] leading-tight">
          {room.name}
        </h3>

        <div className="flex items-center gap-5 text-xs text-[var(--color-brown-mid)] mt-1">
          <span className="flex items-center gap-1.5">
            <Maximize2 size={14} strokeWidth={1.5} />
            {room.sqft} Sq Ft
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={14} strokeWidth={1.5} />
            {room.beds} Bed
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} strokeWidth={1.5} />
            {room.sleeps} Sleeps
          </span>
        </div>
      </div>

      <Link
        href={room.href}
        className="absolute inset-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
        aria-label={`View details for ${room.name} — ${room.currency}${room.pricePerNight.toLocaleString("en-IN")} per night`}
      />
    </article>
  );
}
