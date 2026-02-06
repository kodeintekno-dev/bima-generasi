import { Globe } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import Instagram from "../../public/img/instagram.png";
import Tiktok from "../../public/img/tiktok.png";
import Youtube from "../../public/img/youtube.png";
import Facebook from "../../public/img/facebook.png";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="kontak" className="py-12 lg:py-16 mb-8">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#024A71] mb-12">
          Kontak & Lokasi
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0029436861014!2d106.37544097591713!3d-6.5213085637555706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42734a8321159b%3A0xbe6d4c3031f98728!2sPKBM%20BINA%20GENERASI!5e0!3m2!1sid!2sid!4v1769149702308!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "12px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-md"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            {/* Address */}
            <div className="bg-[#DFF2FE] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-red-500 text-2xl" />
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    1971 University Blvd, Lynchburg, VA 24515, United States
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#DFF2FE] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Phone className="text-green-500 text-2xl" />
                <div>
                  <a
                    href="https://wa.me/6282118694751"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-sky-600 transition"
                  >
                    +628888888888
                  </a>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="bg-[#DFF2FE] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Globe className="text-sky-500 text-2xl" />
                <div>
                  <a
                    href="http://www.ldaasdas.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 transition"
                  >
                    www.ldaasdas.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pkbmbinagenerasi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Instagram} alt="Instagram" width={36} height={36} />
              </a>
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Tiktok} alt="Tiktok" width={36} height={36} />
              </a>
              <a
                href="https://www.youtube.com/@PKBMBinaGenerasi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Youtube} alt="Youtube" width={36} height={36} />
              </a>
              <a
                href="https://www.facebook.com/PKBMBinaPrestasi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Facebook} alt="Facebook" width={36} height={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
