import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for Shri Siddh Hotel.",
};

export default function TermsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-[var(--color-cream)] flex flex-col items-center justify-center text-center">
      <span className="label-text mb-4">Legal</span>
      <h1 className="heading-section mb-4">Terms of Service</h1>
      <p className="text-[var(--color-brown-mid)] max-w-md mb-8">
        Our full terms and conditions are being prepared. Please contact us with any questions.
      </p>
      <Button variant="gold" href="/">← Back to Home</Button>
    </section>
  );
}
