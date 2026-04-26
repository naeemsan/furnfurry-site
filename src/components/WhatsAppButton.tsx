import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/18555578702?text=Hi%20FurNFurry%2C%20I%27d%20like%20to%20request%20a%20custom%20fursuit%20quote."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message FurNFurry on WhatsApp"
      className="group fixed bottom-5 right-5 z-[80]"
    >
      {/* Glow ring */}
      <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping opacity-40" />

      {/* Button */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_45px_rgba(139,92,246,0.7)] active:scale-95">
        <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
      </div>
    </a>
  );
}