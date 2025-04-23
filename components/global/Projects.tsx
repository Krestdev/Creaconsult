"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    image: "/ui/projects/project3.jpg",
    title: "Batiment RTC",
  },
  {
    image: "/ui/projects/project1.jpg",
    title: "Le Carino",
  },
  {
    image: "/ui/projects/project4.png",
    title: "Japoma Stadium Construction",
  },
  {
    image: "/ui/projects/project2.jpg",
    title: "Projet PAK",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div
      className="containerParent relative w-full h-screen flex transition-all duration-500 overflow-hidden"
      style={{
        backgroundImage: `url(${slides[activeIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container h-full px-4 flex justify-between gap-8 flex-col md:flex-row">
        <div className="md:w-fit h-fit space-y-8 backdrop-blur-lg rounded-3xl p-4">
          <h4 className="font-bold md:hidden">Projects</h4>
          <h2 className="font-semibold hidden md:block">Projects</h2>
          <div className="space-y-4 max-w-[500px]">
            <h5 className="font-semibold md:hidden">
              {slides[activeIndex].title}
            </h5>
            <h3 className="font-semibold hidden md:block">
              {slides[activeIndex].title}
            </h3>
            <p>
              {
                "Avec plus de 15 ans d'expérience , nous avons accompagné de nombreux projets à travers l'Afrique subsaharienne, en particulier au Cameroun."
              }
            </p>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={"auto"}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onMouseEnter={() => swiperInstance?.autoplay.stop()}
          onMouseLeave={() => swiperInstance?.autoplay.start()}
          className="flex items-end w-[650px] h-full !mr-2"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className=" !w-[200px] !h-fit mt-auto">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-[200px] h-[300px] object-cover object-center bg-gray-400 shadow-lg shadow-black"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    // <div className="flex gap-4 flex-col md:flex-row">
    //   <div className="md:w-1/2 space-y-8">
    //     <h4 className="font-bold md:hidden">Projects</h4>
    //     <h2 className="font-semibold hidden md:block">Projects</h2>
    //     <div className="space-y-4 max-w-[500px]">
    //       <h5 className="font-semibold md:hidden">
    //         Djapoma Stadium Construction
    //       </h5>
    //       <h3 className="font-semibold hidden md:block">
    //         Djapoma Stadium Construction
    //       </h3>
    //       <p>
    //         {
    //           "Avec plus de 15 ans d'expérience , nous avons accompagné de nombreux projets à travers l'Afrique subsaharienne, en particulier au Cameroun."
    //         }
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex w-1/2 gap-4 h-fit md:h-[500px] items-end p-6">
    //     <img
    //       src="/ui/projects/project1.jpeg"
    //       alt="Djapoma Stadium Construction"
    //       className="w-[200px] h-[300px] object-cover object-center bg-gray-400 shadow-lg shadow-black"
    //     />
    //     <img
    //       src="/ui/projects/project3.jpeg"
    //       alt="Djapoma Stadium Construction"
    //       className="w-[200px] h-[300px] object-cover object-center bg-gray-400 shadow-lg shadow-black"
    //     />
    //     <img
    //       src="/ui/projects/project2.jpeg"
    //       alt="Djapoma Stadium Construction"
    //       className="w-[200px] h-[300px] object-cover object-center bg-gray-400 shadow-lg shadow-black"
    //     />
    //     <img
    //       src="/ui/projects/project3.jpeg"
    //       alt="Djapoma Stadium Construction"
    //       className="w-[200px] h-[300px] object-cover object-center bg-gray-400 shadow-lg shadow-black"
    //     />
    //   </div>
    //   <div></div>
    // </div>
  );
};

export default Projects;
