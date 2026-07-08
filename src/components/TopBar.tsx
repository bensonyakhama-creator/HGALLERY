import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-[#5B1F1F] text-white border-b border-[#8C5A3C]/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        <div className="flex items-center gap-6">
          <a
            href="tel:+254726335283"
            className="flex items-center gap-2 hover:text-amber-300 transition"
          >
            <Phone size={14} />
            +254 726 335 283
          </a>

          <a
            href="mailto:hgalleryltd@gmail.com"
            className="flex items-center gap-2 hover:text-amber-300 transition"
          >
            <Mail size={14} />
            hgalleryltd@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            Our Mall, Magadi Road, Nairobi
          </div>

          <div className="flex items-center gap-2">
            <Clock size={14} />
            Mon - Sat | 8:00 AM - 6:00 PM
          </div>
        </div>
      </div>
    </div>
  );
}
