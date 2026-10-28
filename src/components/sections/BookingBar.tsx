"use client";

import { useState } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate, formatDisplayDate } from "@/lib/utils";

interface BookingState {
  checkin: Date | null;
  checkout: Date | null;
  guests: number;
}

interface ValidationErrors {
  checkin?: string;
  checkout?: string;
  guests?: string;
}

type OpenPicker = "checkin" | "checkout" | null;

export function BookingBar() {
  const [booking, setBooking] = useState<BookingState>({
    checkin: null,
    checkout: null,
    guests: 2,
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [openPicker, setOpenPicker] = useState<OpenPicker>(null);
  const [minDateStr, setMinDateStr] = useState<string>("");

  const openDatePicker = (picker: "checkin" | "checkout") => {
    setMinDateStr(formatDate(new Date()));
    setOpenPicker((prev) => (prev === picker ? null : picker));
  };

  const handleDateSelect = (type: "checkin" | "checkout", dateStr: string) => {
    const date = new Date(dateStr);
    setBooking((prev) => ({ ...prev, [type]: date }));
    setErrors((prev) => ({ ...prev, [type]: undefined }));
    setOpenPicker(null);
  };

  const whatsappUrl = `https://wa.me/911234567890?text=${encodeURIComponent(
    `Hi, I'd like to enquire about a room booking.${booking.checkin ? ` Check-in: ${formatDisplayDate(booking.checkin)}.` : ""}${booking.checkout ? ` Check-out: ${formatDisplayDate(booking.checkout)}.` : ""} Guests: ${booking.guests}.`
  )}`;

  return (
    <div
      id="booking-bar"
      className="relative z-20 bg-white shadow-2xl p-2.5 sm:p-3 mx-auto max-w-5xl"
      role="search"
      aria-label="Room booking form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        <DateField
          label="Check in Date"
          value={booking.checkin}
          error={errors.checkin}
          minDate={minDateStr}
          isOpen={openPicker === "checkin"}
          onOpen={() => openDatePicker("checkin")}
          onSelect={(d) => handleDateSelect("checkin", d)}
          onClose={() => setOpenPicker(null)}
        />

        <DateField
          label="Check out Date"
          value={booking.checkout}
          error={errors.checkout}
          minDate={booking.checkin ? formatDate(booking.checkin) : minDateStr}
          isOpen={openPicker === "checkout"}
          onOpen={() => openDatePicker("checkout")}
          onSelect={(d) => handleDateSelect("checkout", d)}
          onClose={() => setOpenPicker(null)}
        />

        <div className="relative border border-[#d5d5d5] px-4 py-2.5 flex items-center justify-between min-h-[50px] bg-white">
          <span className="text-sm text-[#444] font-normal">Guest</span>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setBooking((p) => ({ ...p, guests: Math.max(1, p.guests - 1) }))}
              aria-label="Decrease guests"
              className="text-[#666] hover:text-black font-semibold text-base transition-colors px-1"
            >
              —
            </button>
            <span className="w-6 text-center font-semibold text-sm text-[#222] tabular-nums">
              {String(booking.guests).padStart(2, "0")}
            </span>
            <button
              onClick={() => setBooking((p) => ({ ...p, guests: Math.min(10, p.guests + 1) }))}
              aria-label="Increase guests"
              className="text-[#666] hover:text-black font-semibold text-base transition-colors px-1"
            >
              +
            </button>
          </div>
          {errors.guests && (
            <p className="absolute -bottom-5 left-0 text-red-500 text-[11px]" role="alert">{errors.guests}</p>
          )}
        </div>

        <div className="flex items-stretch">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex-1 flex items-center justify-center gap-2 px-5 py-2.5",
              "bg-[#22c55e] text-white font-semibold text-sm tracking-wide",
              "hover:bg-[#16a34a] transition-colors duration-200",
              "min-h-[50px] cursor-pointer shadow-xs"
            )}
          >
            <MessageCircle size={17} className="fill-white stroke-none" />
            <span>Booking Enquiry →</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function DateField({
  label,
  value,
  error,
  minDate,
  isOpen,
  onOpen,
  onSelect,
  onClose,
}: {
  label: string;
  value: Date | null;
  error?: string;
  minDate?: string;
  isOpen: boolean;
  onOpen: () => void;
  onSelect: (date: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onOpen}
        className="w-full border border-[#d5d5d5] px-4 py-2.5 flex items-center justify-between min-h-[50px] bg-white text-left transition-colors hover:border-[#999] focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={`${label}: ${value ? formatDisplayDate(value) : "Not selected"}`}
      >
        <span className={cn("text-sm", value ? "text-[#111] font-medium" : "text-[#555] font-normal")}>
          {value ? formatDisplayDate(value) : label}
        </span>
        <Calendar size={18} className="text-[#666] shrink-0" />
      </button>
      {error && (
        <p className="absolute -bottom-5 left-0 text-red-500 text-[11px]" role="alert">{error}</p>
      )}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={onClose} aria-hidden="true" />
          <div
            className="absolute top-full left-0 z-20 mt-1 bg-white shadow-xl border border-[var(--color-cream-dark)] p-3"
            role="dialog"
            aria-label={`Select ${label}`}
          >
            <input
              type="date"
              min={minDate}
              className="block p-2 border border-[var(--color-cream-dark)] text-sm text-[var(--color-espresso)] focus:outline-none focus:border-[var(--color-gold)]"
              onChange={(e) => {
                if (e.target.value) onSelect(e.target.value);
              }}
              aria-label={`${label} date picker`}
              autoFocus
            />
          </div>
        </>
      )}
    </div>
  );
}
