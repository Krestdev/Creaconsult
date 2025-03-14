import React from "react";
import SectionContainer from "../global/SectionContainer";

const NewsDetails = () => {
  return (
    <SectionContainer>
      <div className="space-y-4">
        <h2 className="font-semibold hidden md:block">Our Latest News</h2>
        <h5 className="font-semibold md:hidden">Our Latest News</h5>
        <h6>
          by <span className="font-bold">Michelle Marie</span>
        </h6>
        <div className="space-y-4">
          <img
            src="/ui/news/main1.jpeg"
            alt="news"
            className="w-full max-h-[300px] object-cover object-center"
          />
          <h4>Etude des Cas et Realisation</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
            molestias dolorum est tenetur ut cupiditate laborum. Sit iusto quod
            doloremque inventore voluptatibus impedit, recusandae sint optio,
            sed velit incidunt culpa. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Esse accusantium adipisci sapiente repudiandae,
            consequuntur delectus temporibus non magnam quod. Vitae ab eum
            delectus facilis beatae suscipit neque consequatur sint dolor. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Perferendis, non.
            Fugiat placeat nostrum a voluptates commodi qui cum sint neque
            laudantium eligendi reiciendis, dolores nulla nihil amet
            reprehenderit animi perferendis!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
          {[
            { title: "banquet", img: "/ui/news/main1.jpeg" },
            { title: "Presentation", img: "/ui/news/main2.jpeg" },
            { title: "Evening Event", img: "/ui/news/main3.jpeg" },
            { title: "Team Reunion", img: "/ui/news/main4.jpeg" },
          ].map((imgData, index) => {
            return (
              <div className="relative w-full h-fit" key={index}>
                <img
                  src={imgData.img}
                  alt={imgData.title}
                  className="w-full h-full max-h-[200px] object-cover"
                />
                <div className="absolute p-4 w-full bottom-0 bg-gradient-to-b from-transparent to-[#700032]">
                  <small className="font-semibold text-white">
                    {imgData.title}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          perspiciatis facilis ratione voluptas quis pariatur aspernatur neque
          reiciendis, sequi obcaecati voluptatum itaque possimus. Debitis
          eligendi illo inventore esse natus facilis? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Voluptatem, excepturi quasi
          nesciunt, minima repudiandae et modi autem sed tempora veritatis optio
          debitis quibusdam minus eveniet tempore sint, accusamus qui fuga!
        </p>
      </div>
    </SectionContainer>
  );
};

export default NewsDetails;
