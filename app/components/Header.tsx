import Image from "next/image";
import Hero from "@/public/barae.png";

const Header = () => {
  return (
    <section className="header-section">
      {/* Glow Effects */}
      <div className="header-glow"></div>
      <div className="header-glow-secondary"></div>

      {/* Header Content */}
      <div className="header-content relative z-10 container mx-auto px-6 py-10 mt-10 min-h-screen flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Barae Matrane</h1>
          <p className="text-2xl">Full Stack Developer</p>
          <p className="text-lg text-gray-300">
            Hi, I’m Barae — a Full Stack Developer building scalable, modern web
            apps.
          </p>
        </div>
        <div className="relative">
          {/* Liquid background/mask */}
          <div className="water-blob w-[500px] h-[500px] bg-[#E5E5E5] overflow-hidden flex items-end justify-center shadow-2xl relative z-10 transition-all duration-500 hover:scale-[1.02]">
            <Image
              src={Hero}
              alt="Baraa Matrane"
              width={800}
              height={800}
              className="water-blob w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>

          {/* Decorative glow behind the liquid blob */}
          <div className="water-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-white/5 blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
