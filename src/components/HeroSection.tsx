import { RiShoppingBag4Line } from "react-icons/ri";
import { RxDoubleArrowRight } from "react-icons/rx";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className=" h-[95vh] lg:h-screen w-full aspect-ratio-16/9 relative"
    >
      <div className="absolute inset-0 z-10 bg-overlay-70 mix-blend-multiply" />
      <div className="absolute inset-0 z-20 bg-overlay-80 bg-(image:--overlay-gradient) mix-blend-multiply" />
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center h-full max-w-5xl text-center mx-auto gap-8 sm:gap-4 px-8 mt-8 lg:mt-0 text-balance">
        <h1 className="text-white/80 text-3xl sm:text-5xl lg:text-7xl/snug font-semibold">
          Skapa självförtroende i din handel med teknisk analys -{" "}
          <br className="hidden lg:block" />
          <span className="text-primary text-pretty lg:bg-foreground/50 lg:px-4">
            Hämta din gratis e-bok nu!
          </span>
        </h1>
        <p className="text-white/80 md:text-xl">
          Oavsett om du fokuserar på aktiv trading eller långsiktiga
          investeringar ger våra böcker inom teknisk analys dig den kunskap du
          behöver för att navigera börsen med självförtroende.
        </p>
        <div>
          <div className="font-heading sm:text-lg flex flex-col sm:flex-row justify-center mt-16 font-normal tracking-wide w-full px-8">
            <button className="bg-primary flex items-center justify-between p-4 md:p-5 gap-5 text-white">
              HÄMTA DIN GRATIS E-BOK NU{" "}
              <RxDoubleArrowRight className="rotate-45" />
            </button>
            <button className="bg-white/80 flex items-center justify-between p-4 md:p-5 gap-2">
              SE VÅRA PRODUKTER <RiShoppingBag4Line className="mb-1" />
            </button>
          </div>
          <div>
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
      </div>
    </section>
  );
}
