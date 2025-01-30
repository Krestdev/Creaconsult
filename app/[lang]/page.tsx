import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-jakarta-sans)]">
      <NavBar />
      <div className="bg-[#27323a] bg-none bg-repeat bg-auto bg-scroll relative">
        <Hero />
        <About />
        {/* Home Hero Main Background */}
        <div className=" overflow-hidden justify-center items-center flex fixed inset-0">
          <div className="w-full h-full">
            <img
              src="/ui/HomeMainImage.webp"
              className=" w-[1920px] h-[1080px] object-cover max-w-full inline-block"
            />
          </div>
        </div>
        {/* Home hero background change position */}
        <div className=" z-[111] h-[105vh] mt-[100vh] absolute inset-0 justify-center items-center flex hero-background-scroll-scale">
          <div className="w-[1000px] h-[1400px]">
            <img
              src="/ui/HomeMainImage.webp"
              alt="Home main image"
              className=" h-full w-full object-cover align-middle max-w-full inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
