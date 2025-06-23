import { title } from "process";
import type { Dictionary } from "../types";

export const en: Dictionary = {
  title: "CreaConsult",
  navbar: [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/services", title: "Our Services" },
    { link: "/jobs", title: "Jobs" },
    { link: "/news", title: "News" },
    { link: "/contact", title: "Contact" },
  ],
  footer: {
    links: [
      { link: "/", title: "Home" },
      { link: "/about", title: "About" },
      { link: "/services", title: "Our Services" },
      { link: "/jobs", title: "Jobs" },
      { link: "/news", title: "News" },
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
      title: "Services",
      links: [
        { href: "/services", label: "Our services" },
        { href: "/terms", label: "Terms & Conditions" },
      ],
    },
    help: {
      title: "Useful Links",
      links: [
        { href: "/services", label: "Expertise" },
        { href: "/services", label: "Projects" },
        { href: "/services", label: "Case studies" },
      ],
    },
    contact: {
      title: "Contact us",
      links: [
        { href: "tel:+237233426385", label: "+237 233 426 385" },
        {
          href: "mailto:infos@betcreaconsult.com",
          label: "infos@betcreaconsult.com",
        },
      ],
    },
  },
  apply: "Apply",
  app: "Apply now",
  new: "New jobs",
  autor: "Created by",
  voir: "See more",
  project: "Projects",
  droit: "All rights reserved",
  design: "Design by",
  lien: "Links",
  JobsDetail: {
    nombre: "Number of positions",
    lieu: "Location",
    contrat: "Contract type",
    delai: "Application deadline",
    competence: "Skills",
    description: "Description",
    postuler: "Apply for this position",
    copier: "Copy link",
    copie: "Copied",
    actif: "Active",
    expire: "Expired",
    intitule: "Job title",
    JobSubmit: {
      nom: "Full Name",
      cni: "National ID",
      diplome: "Highest Diploma (Optional)",
      lettre: "Letter",
      addresse: "Address",
      tel: "Phone Number",
      cv: "CV/Resume",
      mail: "Email Address",
      poste: "Desired Position",
    },
  },
  domainTitle: "Our Domains",
  domain: [
    {
      title: "Transport Infrastructure",
      contain: ["Road", "Port", "Maritime", "Civil engineering structures"],
    },
    {
      title: "Buildings",
      contain: ["Residential", "Industrial", "Commercial", "Tertiary"],
    },
    {
      title: "Environment",
      contain: [
        "Hydro-agricultural",
        "Sanitation",
        "Water and Energy Rehabilitation",
        "Environmental Protection",
      ],
    },
    {
      title: "Community Facilities",
      contain: ["Sports", "Hospital", "Educational", "Restoration"],
    },
  ],
  slides: [
    {
      image: "/ui/projects/regie.webp",
      title: "RTC Building",
      description:
        "Complete project management for a R+6 office building for the Container Terminal Authority (RTC)",
    },
    {
      image: "/ui/projects/carino.webp",
      title: "Le Carino",
      description:
        "Construction of the headquarters building for KREST HOLDING",
    },
    {
      image: "/ui/projects/japoma.webp",
      title: "Japoma Stadium Access Road",
      description:
        "Project management for rehabilitation works of the secondary access road to the Japoma sports complex",
    },
    {
      image: "/ui/projects/wouri.webp",
      title: "Wouri",
      description:
        "Project management for construction works of the Wouri river embankment road in Douala",
    },
    {
      image: "/ui/projects/bourse.webp",
      title: "Cameroon Subcontracting and Partnership Exchange",
      description:
        "Detailed preliminary studies for the construction of the headquarters building of the Cameroon Subcontracting and Partnership Exchange (BSTP-CMR)",
    },
    {
      image: "/ui/projects/Ngodi.webp",
      title: "Leisure and Recreation Area",
      description:
        "Complementary studies for a leisure and recreation area in Ngodi Akwa, Douala",
    },
  ],
  partner: {
    title: "Partners",
    description: "They have trusted us, yesterday as today.",
  },
  pages: {
    about: {
      title: "About Us",
      subtitle: "About us title",
    },
    service: {
      title: "Services",
      subtitle:
        "Innovative engineering and project management solutions for exceptional projects.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Contact us title",
    },
    news: {
      title: "News",
      subtitle: "News subtitle",
    },
  },
  hero: {
    title: {
      small: "Category A Engineering Firm",
      main: "Turn your projects into reality with Creaconsult.",
      sub: "Experts in sector studies, technical control and infrastructure.",
    },
    action: {
      contact: "contact us",
      devis: "request a quote",
    },
  },
  service: {
    title: {
      main: "Our Services",
      sub: "Technical expertise for the design and implementation of infrastructures.",
    },
    serviceList: [
      {
        title: "Engineering and Technical Studies",
        sub: "Technical expertise for the design and implementation of infrastructures.",
        imgList: [
          "/ui/services/TechnicalStudies_pic1.webp",
          "/ui/services/TechnicalStudies_pic2.webp",
          "/ui/services/TechnicalStudies_pic3.webp",
        ],
        link: "engineering-and-technical-studies",
        img: "/ui/home/service1.webp",
        sublist: [
          "Road and utility network studies",
          "Electrical engineering",
          "Topographic and GIS studies",
          "Geotechnical studies",
        ],
      },
      {
        title: "Project Management and Supervision",
        sub: "Global project management, from planning to on-site execution",
        link: "project-management",
        img: "/ui/home/service2.webp",
        imgList: [
          "/ui/services/ProjectManagmant_pic1.webp",
          "/ui/services/ProjectManagmant_pic2.webp",
          "/ui/services/ProjectManagmant_pic3.webp",
        ],
        sublist: [
          "Operational planning",
          "Construction site supervision",
          "Technical specifications preparation",
        ],
      },
      {
        title: "Design Consulting and Optimization",
        sub: "Preliminary studies to guide, plan and secure project feasibility.",
        link: "technical-control",
        img: "/ui/home/service3.webp",
        imgList: [
          "/ui/services/Conception_pic1.webp",
          "/ui/services/Conception_pic2.webp",
          "/ui/services/Conception_pic3.webp",
        ],
        sublist: [
          "Opportunity studies",
          "Pre-feasibility studies",
          "Feasibility studies",
          "Socio-economic studies",
        ],
      },
      {
        title: "Sustainable Development and Certifications",
        sub: "Solutions focused on sustainability, environmental management and natural resource optimization.",
        link: "technical-control",
        img: "/ui/home/service4.webp",
        imgList: [
          "/ui/services/EcoDevelopment_pic1.webp",
          "/ui/services/EcoDevelopment_pic2.webp",
          "/ui/services/EcoDevelopment_pic3.webp",
        ],
        sublist: [
          "Environmental engineering",
          "Rural engineering",
          "Hydrogeology and hydrology studies",
          "Data analysis techniques",
        ],
      },
    ],
  },
  why: {
    title: {
      main: "Why Choose Creaconsult?",
      sub: "At CREACONSULT, we put our expertise and commitment at the service of your projects, guaranteeing innovative solutions tailored to your needs.",
    },
    reasons: [
      {
        title: "Targeted expertise and real impact",
        desc: `With over 15 years of experience, particularly in Sub-Saharan Africa, Crea Consult doesn't just contribute: it makes projects succeed. Our experts intervene only where they excel. Clear objectives, concrete results.`,
      },
      {
        title: "Proven quality, sustainable performance",
        desc: `Certified ISO 9001 and 14001, our management rigor and environmental approach ensure reliable deliverables, on time. For us, quality is a method, not a promise.`,
      },
      {
        title: "Solid references, measurable results",
        desc: `From large institutions to local companies, we are a strategic and responsive partner. We also train young talents to build the future today.`,
      },
    ],
  },
  Partners: {
    title: {
      main: "Partners",
      sub: "they have trusted us, yesterday as today",
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
      email: "Email address",
      profession: "Profession",
      subject: "Subject",
      message: "Message",
    },
  },
  newsLetter: {
    title: {
      main: "Subscribe to our newsletter",
      sub: "Receive the latest news and updates from Creaconsult",
    },
    buttons: {
      link: "Subscribe",
    },
  },
  actu: "Featured",
  Jobs: {
    title: {
      title: {
        main: "Job offers",
        sub: "Join our team of experts",
      },
    },
    filters: {
      all: "All",
      active: "Active",
    },
    banner: {
      title: "New opportunities",
      message: "Apply now",
      all: "All",
      active: "Active",
    },
  },
  about: {
    story: {
      title: "Our Story",
      desc: `
      CREACONSULT, an engineering and project management company founded in 2006, puts its proven expertise at the service of creating sustainable living environments. Committed to continuous improvement, we simplify every step for project owners and investors.\n\nCertified ISO 9001 and 14001 (2015 standard), our management combines rigor, quality and environmental commitment. Specialists in institutional, commercial and industrial projects, we mobilize our cutting-edge technical expertise to carry out ambitious projects. \n\nAt CREACONSULT, excellence is based on strong professional and ethical values, guaranteeing our clients and partners a privileged and high-performance collaboration.\n\nInnovative engineering and project management solutions for exceptional achievements.
      `,
      boxImages: [
        {
          img: "/ui/services/Conception_pic1.webp",
          title: "Engineering and Technical Studies",
        },
        {
          img: "/ui/services/EcoDevelopment_pic2.webp",
          title: "Sustainable Development and Certifications",
        },
        {
          img: "/ui/services/ProjectManagmant_pic3.webp",
          title: "Design Consulting and Optimization",
        },
      ],
    },
    certification: {
      title: "Certifications",
      sub: "Recognized Expertise",
      desc: `<p class="text-justify">
  Certified <strong>ISO 9001 and ISO 14001</strong>, and holder of the <strong>Environmental Impact Studies Accreditation</strong>, CREACONSULT affirms its commitment to quality, sustainable performance and environmental responsibility. These recognitions consolidate the rigor of its internal processes, enhance its image with partners, facilitate access to markets and ensure better risk management in an increasingly demanding economic environment.
</p>`,
    },
  },
  team: {
    title: "Team",
    posts: [
      {
        name: "Mr. Désiré FOTSO",
        post: "Directeur des Opérations",
        img: "/ui/team/Ceo.webp",
        links: {
          linkedin: "https://linkedin.com/in/desire-fotso",
          facebook: "https://facebook.com/desire.fotso",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "Mr. Alfred BAYIGA",
        post: "Chef de projet",
        img: "/ui/team/ALFRED BAYIGA Chef de projet - crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "Mme. Alphonsine TOUKAM",
        post: "Assistante de direction",
        img: "/ui/team/ALPHONSINE TOUKAM  Assistante de direction-crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "Mme. Carole TEMOU",
        post: "Responsable Qualité",
        img: "/ui/team/CAROLE LACAINE TEMOU  Responsable Qualité - crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "M. Caulrade TAMANJONG",
        post: "Architecte",
        img: "/ui/team/CAULRADE TAMANJONG Architecte- crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "M. Christian KOMBOU",
        post: "Chef de projet",
        img: "/ui/team/CHRISTIAN KOMBOU Chef de projet - crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "M. David YOUMSI",
        post: "Assistant QHSE",
        img: "/ui/team/DAVID YOUMSI Assistant QHSE - crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "M. Eric TENAMOU",
        post: "Chef de projet",
        img: "/ui/team/ERIC TENAMOU Chef de projet - crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "Mme. Gladys NGONO",
        post: "Responsable Volet Environnemental",
        img: "/ui/team/GLADYS NGONO Responsable Volet Environnemental - crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "M. Ivan KADJI MONKAM",
        post: "Architecte",
        img: "/ui/team/IVAN KADJI MONKAM Architecte - crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "M. Junior NITCHEU",
        post: "Directeur des Affaires Financières",
        img: "/ui/team/JUNIOR NITCHEU Directeur des Affaires Financières - crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "M. KLOTER KOUAM",
        post: "Responsable IT et Maintenance",
        img: "/ui/team/KLOTER KOUAM Responsable IT et Maintenance - crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "M. Valery SOULEY",
        post: "Chef de projet",
        img: "/ui/team/VALERY SOULEYChef de projet- crea.webp",
        links: {
          linkedin: "https://linkedin.com/in/alfred-bahiha",
          facebook: "https://facebook.com/alfred-bahiha",
          email: "dfotso@creaconsult.com",
        },
      },
      // {
      //   name: "Mr. Brice LEKIAGNI",
      //   post: "Technicien d’Étude et de Suivi",
      //   img: "/ui/team/Etude.webp",
      //   links: {
      //     linkedin: "https://linkedin.com/in/brice-lekiagni",
      //     facebook: "https://facebook.com/brice.lekiagni",
      //     email: "blekiagni@creaconsult.com",
      //   },
      // },
      // {
      //   name: "Mme. Amougou Mbassi",
      //   post: "Responsable Déclaration et Télédéclaration",
      //   img: "/ui/team/Declaration.webp",
      //   links: {
      //     linkedin: "https://linkedin.com/in/amougou-mbassi",
      //     facebook: "https://facebook.com/amougou.mbassi",
      //     email: "ambassi@creaconsult.com",
      //   },
      // },
      // {
      //   name: "Mme. Alphonsine Toukam",
      //   post: "Assistante de direction",
      //   img: "/ui/team/assDir.webp",
      //   links: {
      //     linkedin: "https://linkedin.com/in/gladys-ngono",
      //     facebook: "https://facebook.com/gladys.ngono",
      //     email: "gngono@creaconsult.com",
      //   },
      // },
    ],
  },
};
