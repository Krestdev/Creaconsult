import { Mail, Mailbox, MailCheck, MapPin, Phone } from "lucide-react";
import BorderDecoration from "../utils/BorderDecoration";

const ContactIntro = () => {
  return (
    <section className="h-fit line_decoration">
      <div className="max-w-7xl w-full mx-auto h-fit">
        <div className="grid grid-cols-2 gap-4 py-[80px]">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div>
                  <h6 className="flex items-center gap-2">
                    <Mail strokeWidth={0.8} /> Emails
                  </h6>
                  <p>creaconsult@yahoo.fr</p>
                </div>
                <div>
                  <h6 className="flex items-center gap-2">
                    <MapPin strokeWidth={0.8} /> Adresse
                  </h6>
                  <p>1665 Blvd de la République</p>
                </div>

                <div>
                  <h6 className="flex items-center gap-2">
                    <Mailbox strokeWidth={0.8} /> BP
                  </h6>
                  <p>11735 Douala-Cameroun</p>
                </div>
              </div>
              <div>
                <h6 className="flex items-center gap-2">
                  <Phone strokeWidth={0.8} /> Contacts
                </h6>
                <p>
                  +237 233 426 385 <br /> +237 699 519 585 <br /> +237 650 645
                  615
                </p>
              </div>

              <div className="col-span-2">
                <h6 className="flex items-center gap-2">Legal</h6>
                <p>Bureau d’Étude Catégorie « A » Agrément ENV. MINEPDEP</p>
              </div>
              <div>
                <h6>Certifications Bureau Veritas</h6>
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

              <div className="flex gap-2 col-span-2">
                <img
                  src="/ui/img/img300x300.webp"
                  className="aspect-square max-w-[100px] w-full h-full object-cover"
                />
                <div>
                  <h6>Directeur des Opérations</h6>
                  <p>Désire FOTSO NDIE</p>
                  <p>fotsondie@betcreaconsult.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 border border-[--primary-transparent] p-4">
            <h4 className="text-center">Send us a message</h4>
            <form action="" className="space-y-2">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="name" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="name" />
              </div>
              <div>
                <label htmlFor="">subject</label>
                <input type="text" placeholder="name" />
              </div>
              <div>
                <label htmlFor="">Message</label>
                <textarea placeholder="message" className="h-full" />
              </div>
              <div className="flex justify-end px-10">
                <BorderDecoration color="--primary">
                  <button type="button" className="flex gap-2 text-[--primary]">
                    Submit <MailCheck strokeWidth={0.8} />
                  </button>
                </BorderDecoration>
              </div>
            </form>
          </div>
        </div>
        <div className="py-[100px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.847702742975!2d9.700542975894853!3d4.051469595922284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128a84a4b551%3A0x46d9016c649d794b!2s1665%20Bd%20de%20la%20R%C3%A9publique%2C%20Douala%2C%20Cameroon!5e0!3m2!1sen!2sde!4v1740485572640!5m2!1sen!2sde"
            width="600"
            height="450"
            className="border-none w-full h-[450px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
