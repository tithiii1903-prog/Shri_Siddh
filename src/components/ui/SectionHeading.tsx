import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  className?: string;
  light?: boolean;
}

/** Section heading with optional label above and animated gold underline */
export function SectionHeading({
  label,
  heading,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <span
          className={cn(
            "label-text",
            light ? "text-white/60" : "text-[var(--color-brown-mid)]"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "heading-section gold-underline in-view",
          light ? "text-white" : "text-[var(--color-espresso)]"
        )}
      >
        {heading}
      </h2>
    </div>
  );
}
