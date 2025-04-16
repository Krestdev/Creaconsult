import { title } from "process";
import type { Dictionary } from "../types";

export const en: Dictionary = {
  title: "CreaConsult",
  navbar: [
    { link: "/", title: "Home" },
    { link: "/about", title: "About us" },
    { link: "/services", title: "Services" },
    { link: "/jobs", title: "Jobs" },
    { link: "/news", title: "news" },
    { link: "/contact", title: "Contact" },
  ],
  footer: {
    links: [
      { link: "/", title: "Home" },
      { link: "/about", title: "About us" },
      { link: "/services", title: "Services" },
      { link: "/jobs", title: "Jobs" },
      { link: "/news", title: "news" },
      { link: "/contact", title: "Contact" },
    ],
    info: {
      title: "Information",
      links: [
        { href: "/about", label: "About us" },
        { href: "/news", label: "News" },
      ],
    },
    service: {
      title: "Our Services",
      links: [
        { href: "/services", label: "Services" },
        { href: "/terms", label: "Terms & Condition" },
      ],
    },
    help: {
      title: "Helpful Links",
      links: [
        { href: "/services", label: "Expertise" },
        { href: "/services", label: "Projects" },
        { href: "/services", label: "Case study" },
      ],
    },
    contact: {
      title: "Contact Us",
      links: [
        { href: "tel:+237 233 426 385", label: "+237 233 426 385" },
        { href: "mailto:creaconsult@yahoo.fr", label: "creaconsult@yahoo.fr" },
      ],
    },
  },
  pages: {
    about: {
      title: "About Us",
      subtitle: "About us title",
    },
    service: {
      title: "Service",
      subtitle:
        "Des solutions innovantes en ingénierie et maîtrise d’œuvre pour des projets d’exception.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Contact us title",
    },
  },
  hero: {
    title: {
      small: "Bureau d’Étude Catégorie A",
      main: "Turn your projects into reality with Creaconsult.",
      sub: "Experts in sector studies, technical control and infrastructure.",
    },
    action: {
      contact: "Contact us",
      devis: "Request a quote",
    },
  },
  why: {
    title: {
      main: "Why Choose Creaconsult ?",
      sub: "Chez CREACONSULT, nous mettons notre expertise et notre engagement au service de vos projets, garantissant des solutions innovantes et adaptées à vos besoins.",
    },
    reasons: [
      {
        title: "Recognised expertise",
        desc: "With over 15 years' experience in the field, particularly in sub-Saharan Africa and Cameroon, Crea Consult doesn't just take part in projects - it makes them succeed. Our experts only work in areas where we have 100% expertise. Clear objectives, concrete results. No improvisation.",
      },
      {
        title: "Certifications and Quality Commitment",
        desc: "Certified to ISO 9001 and 14001 (2015 standard), Crea Consult is renowned for its rigorous management and exemplary environmental commitment. Our continuous improvement system guarantees impeccable deliverables, on time and to the highest standards. Here, quality is not just a word, it's a method.",
      },
      {
        title: "References and Successful Projects",
        desc: "We have won the trust of institutions, commercial, industrial and academic companies through large-scale projects. As well as providing advice, we are a strategic partner: responsive, committed and always solution-oriented. We also support the training and integration of young people, because the future is being built today.",
      },
      {
        title: "Case studies and achievements",
        desc: "Our case studies are our best proof: before and after, quantified results, real transformation. Crea Consult is about concrete results, not theory. Each project is a visible, documented and reproducible success.",
      },
    ],
  },
  service: {
    title: {
      main: "Our Services",
      sub: "Innovative engineering and project management solutions for exceptional projects",
    },
    serviceList: [
      {
        title: "Engineering and Technical Studies",
        sub: "Technical expertise for infrastructure design and implementation.",
        link: "ingenierie-et-etudes-techniques",
        img: "/ui/home/service1.jpg",
        imgList: [
          "/ui/services/TechnicalStudies_pic1.jpg",
          "/ui/services/TechnicalStudies_pic2.jpg",
          "/ui/services/TechnicalStudies_pic3.jpg",
        ],
        sublist: [
          "Studies of roads and other networks",
          "Electrical engineering",
          "Topographic and GIS studies",
          "Geotechnical studies",
        ],
      },
      {
        title: "Project Ownership and Management",
        sub: "Overall management of projects, from planning to execution in the field",
        link: "maitrise-d-oeuvre",
        img: "/ui/home/service2.jpg",
        imgList: [
          "/ui/services/ProjectManagmant_pic1.jpg",
          "/ui/services/ProjectManagmant_pic2.jpg",
          "/ui/services/ProjectManagmant_pic3.jpg",
        ],
        sublist: [
          "Project management",
          "Operational planning",
          "Operational monitoring of works",
          "Drawing up specifications",
        ],
      },
      {
        title: "Design and Optimisation Consultancy",
        sub: "Preliminary studies to guide, plan and secure the feasibility of projects",
        link: "controle-technique",
        img: "/ui/home/service3.jpg",
        imgList: [
          "/ui/services/Conception_pic1.jpg",
          "/ui/services/Conception_pic2.jpg",
          "/ui/services/Conception_pic3.jpg",
        ],
        sublist: [
          "-	Opportunity studies",
          "Pre-feasibility studies",
          "Feasibility studies",
          "Socio-economic studies",
        ],
      },
      {
        title: "Sustainable Development and Certifications",
        sub: "Solutions focused on sustainability, environmental management and optimisation of natural resources.",
        link: "controle-technique",
        img: "/ui/home/service4.jpg",
        imgList: [
          "/ui/services/EcoDevelopment_pic1.jpg",
          "/ui/services/EcoDevelopment_pic2.jpg",
          "/ui/services/EcoDevelopment_pic3.jpg",
        ],
        sublist: [
          "Environmental professions",
          "Rural engineering",
          "Hydrogeology and hydrology studies",
          "Data analysis techniques",
        ],
      },
    ],
  },
  Partners: {
    title: {
      main: "Partners",
      sub: "they put their trust in us, then and now",
    },
  },
  contact: {
    title: {
      main: "Contact us",
      sub: "Share your projects and let's work together",
      slogan: "performing for real progress",
    },
    buttons: {
      link: "Contact us",
      reset: "Reset",
      send: "Send",
    },
    form: {
      name: "Name",
      email: "Mail",
      profession: "Profession",
      subject: "Subjet",
      message: "mesage",
    },
  },
  newsLetter: {
    title: {
      main: "Subscribe to our newsletter",
      sub: "Get the latest news and updates from Creacosult",
    },
    buttons: {
      link: "Subscribe",
    },
  },
  Jobs: {
    title: {
      title: {
        main: "Job Offers",
        sub: "Join our team of experts",
      },
    },
    filters: {
      all: "All",
      active: "Active",
    },
    banner: {
      title: "New Opportunities",
      message: "Apply now",
    },
  },

  about: {
    story: {
      title: "Our Story",
      desc: "CREACONSULT, an engineering and project management company founded in 2006, uses its proven expertise to create sustainable living environments. Committed to continuous improvement, we simplify every stage for project owners and investors.\n\nCertified ISO 9001 and 14001 (2015 standard), our management combines rigor, quality, and environmental commitment. As specialists in institutional, commercial, and industrial projects, we apply our cutting-edge technical expertise to ambitious projects.\n\nAt CREACONSULT, excellence is based on strong professional and ethical values, guaranteeing our customers and partners a privileged and efficient collaboration.\n\nInnovative engineering and project management solutions for exceptional projects.",
      boxImages: [
        {
          img: "/ui/services/Conception_pic1.jpg",
          title: "Engineering and Technical Studies",
        },
        {
          img: "/ui/services/EcoDevelopment_pic2.jpg",
          title: "Sustainable Development and Certifications",
        },
        {
          img: "/ui/services/ProjectManagmant_pic3.jpg",
          title: "Design Consulting and Optimization",
        },
      ],
    },
    certification: {
      title: "Certifications",
      sub: "Recognized Expertise",
      desc: `<p class="text-justify">
  Certified <strong>ISO 9001 and ISO 14001</strong>, and holder of <strong>Environmental Impact Study Accreditation</strong>, CREACONSULT reaffirms its commitment to quality, sustainable performance and environmental responsibility. These recognitions strengthen the rigor of our internal processes, enhance our image with partners, facilitate market access and ensure better risk management in an increasingly demanding economic environment.
</p>`,
    },
  },
  team: {
    title: "Team",
    posts: [
      {
        name: "Mr. Désiré FOTSO",
        post: "Chief Operating Officer",
        img: "/ui/team/Ceo.png",
        links: {
          linkedin: "https://linkedin.com/in/desire-fotso",
          facebook: "https://facebook.com/desire.fotso",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "Mr. Brice LEKIAGNI",
        post: "Studies and Monitoring Engineer",
        img: "/ui/team/Etude.png",
        links: {
          linkedin: "https://linkedin.com/in/brice-lekiagni",
          facebook: "https://facebook.com/brice.lekiagni",
          email: "blekiagni@creaconsult.com",
        },
      },
      {
        name: "Mme. Carole TEMOU HEUME",
        post: "Quality Assurance Manager",
        img: "/ui/team/qualite.png",
        links: {
          linkedin: "https://linkedin.com/in/carole-temou",
          facebook: "https://facebook.com/carole.temou",
          email: "ctemou@creaconsult.com",
        },
      },
      {
        name: "Mme. Amougou Mbassi",
        post: "Regulatory Compliance Manager",
        img: "/ui/team/Declaration.png",
        links: {
          linkedin: "https://linkedin.com/in/amougou-mbassi",
          facebook: "https://facebook.com/amougou.mbassi",
          email: "ambassi@creaconsult.com",
        },
      },
      {
        name: "Mme. Gladys Ngono",
        post: "Environmental Affairs Director",
        img: "/ui/team/Environnement.png",
        links: {
          linkedin: "https://linkedin.com/in/gladys-ngono",
          facebook: "https://facebook.com/gladys.ngono",
          email: "gngono@creaconsult.com",
        },
      },
    ],
  },
};
