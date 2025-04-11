import type { Dictionary } from "../types";

export const fr: Dictionary = {
  title: "CreaConsult",
  navbar: [
    { link: "/", title: "Acceuille" },
    { link: "/about", title: "A Propos" },
    { link: "/service", title: "Nos Service" },
    { link: "/jobs", title: "Emploi" },
    { link: "/news", title: "Actualite" },
    { link: "/contact", title: "Contact" },
  ],
  footer: [
    { link: "/", title: "Home" },
    { link: "/about", title: "About us" },
    { link: "/service", title: "Service" },
    { link: "/jobs", title: "Jobs" },
    { link: "/news", title: "news" },
    { link: "/contact", title: "Contact" },
  ],
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
      main: "Transformez vos projets en réalité avec Creaconsult.",
      sub: "Experts en études sectorielles, contrôle technique et infrastructures.",
    },
    action: {
      contact: "contactez-nous",
      devis: "demandez un devis",
    },
  },
  service: {
    title: {
      main: "Nos Services",
      sub: "Expertises techniques pour la conception et la mise en œuvre d’infrastructures.",
    },
    serviceList: [
      {
        title: "Engineering and Technical Studies",
        sub: "Technical expertise for infrastructure design and implementation.",
        link: "ingenierie-et-etudes-techniques",
        img: "/ui/home/service1.jpg",
      },
      {
        title: "Project Ownership and Management",
        sub: "Overall management of projects, from planning to execution in the field",
        link: "maitrise-d-oeuvre",
        img: "/ui/home/service2.jpg",
      },
      {
        title: "Design and Optimisation Consultancy",
        sub: "Preliminary studies to guide, plan and secure the feasibility of projects",
        link: "controle-technique",
        img: "/ui/home/service3.jpg",
      },
      {
        title: "Sustainable Development and Certifications",
        sub: "Solutions focused on sustainability, environmental management and optimisation of natural resources.",
        link: "controle-technique",
        img: "/ui/home/service4.jpg",
      },
    ],
  },
  why: {
    title: {
      main: "Pourquoi Choisir Creaconsult ?",
      sub: "Chez CREACONSULT, nous mettons notre expertise et notre engagement au service de vos projets, garantissant des solutions innovantes et adaptées à vos besoins.",
    },
    reasons: [
      {
        title: "Une Expertise Reconnue",
        desc: `Avec plus de 15 ans d’expérience , nous avons accompagné de nombreux projets à travers l’Afrique subsaharienne, en particulier au Cameroun.`,
      },
      {
        title: "Certifications et Engagement Qualité",
        desc: `Nous sommes certifiés ISO 9001 et 14001 (référentiel 2015), garantissant une gestion rigoureuse de la qualité et une approche respectueuse de l’environnement.`,
      },
      {
        title: "Références et Projets Réussis",
        desc: `Nos collaborations avec des institutions, des entreprises commerciales et industrielles ont permis la réalisation de projets d’envergure.`,
      },
      {
        title: "Études de Cas et Réalisations",
        desc: `Nous mettons en avant des projets concrets, illustrant notre savoir-faire à travers des études de cas détaillées, avec images avant/après et résultats obtenus.`,
      },
    ],
  },
};
