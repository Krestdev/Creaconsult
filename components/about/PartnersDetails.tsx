import React from "react";

const PartnersDetails = () => {
  return (
    <section className="h-fit text-white bg-[url('/ui/partners/worldMap.jpeg')] bg-no-repeat bg-cover py-[60px]">
      <div className="max-w-7xl mx-auto w-full flex justify-center items-center h-fit">
        <div className="grid grid-cols-2">
          <div className="relative w-fit">
            <img
              src="/ui/partners/partner.jpeg"
              className="max-w-[500px] aspect-square w-full h-full"
              alt=""
            />
            <img
              src="/ui/services/logo.png"
              className="max-w-[250px] w-full h-[250px] object-cover absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]"
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                img: "tradex",
                title: "Tradex",
                desc: "Companie petroliere, activiter principale distributeur deproduits petrolier en Afrique",
              },
              {
                img: "bicec",
                title: "Bicec",
                desc: "Companie petroliere, activiter principale distributeur deproduits petrolier en Afrique",
              },
              {
                img: "feicom",
                title: "Feicom",
                desc: "Companie petroliere, activiter principale distributeur deproduits petrolier en Afrique",
              },
              {
                img: "smt",
                title: "SMT",
                desc: "Companie petroliere, activiter principale distributeur deproduits petrolier en Afrique",
              },
              {
                img: "banque",
                title: "World Banque",
                desc: "Companie petroliere, activiter principale distributeur deproduits petrolier en Afrique",
              },
            ].map((partner, index) => {
              return <PartnerItem {...partner} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerItem = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="relative space-y-4 flex flex-col items-center bg-[#000000dc] border border-transparent hover:border-[--primary] duration-300 p-2">
      <img
        src={`/ui/partners/${img}.png`}
        className="h-[100px] object-contain"
        alt=""
      />
      <div className="text-center hover:text-[--primary] hover:duration-300">
        <h5>{title}</h5>
        <p className="small">{desc}</p>
      </div>
    </div>
  );
};

export default PartnersDetails;
