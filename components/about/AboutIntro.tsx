const AboutIntro = () => {
  return (
    <section className="h-fit">
      <div className="max-w-7xl h-[80vh] mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-2">
          <div className="space-y-8">
            <h2>Qui nous somme</h2>
            <p>
              CREACONSULT est un cabinet d’ingénieurs et de maîtrise d’œuvre
              créé en 2007 par l’architecte François Geoffroy CARRAD. Consultant
              dans plusieurs projets en Afrique subsaharienne et en occurrence
              au Cameroun.
            </p>
            <p>
              {" "}
              Certifiée ISO 9001 et 14001 en référentiel 2015, ce management de
              CREACONSULT est engagé dans une démarche qualité et une approche
              respectueuse de l’environnement.
            </p>

            <div className="flex gap-4 w-full">
              <div className="flex flex-col items-center">
                <img
                  src="/ui/isoveritas.png"
                  className="w-[150px] h-[70px] object-cover"
                  alt="veritas sertificate iso 14001"
                />
                <p className="small">
                  ISO 14001:2015 <br />
                  <span className="mariyam">Veritas</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-[160px] h-[70px] object-cover"
                  src="/ui/isoveritas2.png"
                  alt="veritas sertificate iso 9001"
                />
                <p className="small">
                  ISO 9001:2015 <br />
                  <span className="mariyam">Veritas</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-[40px] h-[70px] object-cover"
                  src="/ui/ukasMS.png"
                  alt="ukas managment system certificate 0006"
                />
                <p className="small">
                  0006 <br />
                  <span className="mariyam">Ukas</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative w-fit h-full ml-auto">
              <img
                src="/ui/services/company.jpeg"
                className="max-w-[500px] w-full h-full object-cover"
                alt=""
              />
              <img
                src="/ui/services/logo.png"
                className="max-w-[250px] w-full h-[250px] object-cover absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]"
                alt=""
              />

              <img
                src="/ui/services/douala.jpeg"
                className="absolute -z-[1] -left-[30%] -bottom-10 max-w-[300px] w-full max-h-[300px] object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
