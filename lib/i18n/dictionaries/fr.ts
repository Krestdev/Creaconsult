import type { Dictionary } from "../types";

export const fr: Dictionary = {
  title: "CreaConsult",
  navbar: [
    { link: "/", title: "Creaconsult" },
    { link: "/", title: "Acceuille" },
    { link: "/about", title: "A Propos" },
    { link: "/service", title: "Service" },
    { link: "/contact", title: "contacte nous" },
  ],
  footer: [
    { link: "/", title: "Creaconsult" },
    { link: "/", title: "Acceuille" },
    { link: "/about", title: "A Propos" },
    { link: "/service", title: "Service" },
    { link: "/contact", title: "contacte nous" },
  ],
  pages: {
    about: {
      title: "A props de nous",
      subtitle: "About us title",
    },
    service: {
      title: "Nos Service",
      subtitle:
        "Des solutions innovantes en ingénierie et maîtrise d’œuvre pour des projets d’exception.",
    },
    contact: {
      title: "Contactez nous",
      subtitle: "Contact us title",
    },
  },
  hero: {
    title: {
      small: "Bureau d’Étude Catégorie A",
      main: "Transformez vos projets en réalité avec Creaconsult.",
      sub: "Experts en études sectorielles, contrôle technique et infrastructures.",
    },
    experience: {
      years: "2007",
      message: "15+ anns d'experience",
    },
    workers: {
      number: "300+",
      message: "Employees",
    },
    certification: {
      title: "Certification International",
    },
    action: {
      contact: "contactez-nous",
      devis: "demandez un devis",
    },
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
