import type { Dictionary } from "../types";

export const fr: Dictionary = {
  title: "CreaConsult",
  navbar: [
    { link: "/", title: "Accueil" }, // Corrected from "Acceuille"
    { link: "/about", title: "À Propos" }, // Added the accent on "À"
    { link: "/services", title: "Nos Services" },
    { link: "/jobs", title: "Emploi" },
    { link: "/news", title: "Actualité" }, // Corrected from "Actualite" with the accent
    { link: "/contact", title: "Contact" },
  ],
  footer: {
    links: [
      { link: "/", title: "Accueil" }, // Corrected from "Acceuille"
      { link: "/about", title: "À Propos" }, // Added the accent on "À"
      { link: "/services", title: "Nos Services" },
      { link: "/jobs", title: "Emploi" },
      { link: "/news", title: "Actualité" }, // Corrected from "Actualite" with the accent
      { link: "/contact", title: "Contact" },
    ],
    info: {
      title: "Informations",
      links: [
        { href: "/about", label: "À propos de nous" },
        { href: "/news", label: "Actualité" },
      ],
    },
    service: {
      title: "Services",
      links: [
        { href: "/services", label: "Nos services" },
        { href: "/terms", label: "Conditions générales" },
      ],
    },
    help: {
      title: "Liens utiles",
      links: [
        { href: "/services", label: "Expertise" },
        { href: "/services", label: "Projets" },
        { href: "/services", label: "Étude de cas" },
      ],
    },
    contact: {
      title: "Contactez-nous",
      links: [
        { href: "tel:+237233426385", label: "+237 233 426 385" },
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
    news: {
      title: "Actualités",
      subtitle: "sous titres Actualités",
    },
  },
  hero: {
    title: {
      small: "Bureau d’Études Catégorie A",
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
        title: "Ingénierie et Études Techniques",
        sub: "Expertises techniques pour la conception et la mise en œuvre d’infrastructures.",
        imgList: [
          "/ui/services/TechnicalStudies_pic1.jpg",
          "/ui/services/TechnicalStudies_pic2.jpg",
          "/ui/services/TechnicalStudies_pic3.jpg",
        ],
        link: "ingenierie-et-etudes-techniques",
        img: "/ui/home/service1.jpg",
        sublist: [
          "-	Les études de voiries et réseaux divers",
          "L’ingénierie électrique",
          "Les études topographiques et SIG",
          "Les études géotechniques",
        ],
      },
      {
        title: "Maîtrise d’Œuvre et Gestion de Projets",
        sub: "Pilotage global des projets, de la planification à l’exécution sur le terrain Les maîtrises d'œuvre",
        link: "maitrise-d-oeuvre",
        img: "/ui/home/service2.jpg",
        imgList: [
          "/ui/services/ProjectManagmant_pic1.jpg",
          "/ui/services/ProjectManagmant_pic2.jpg",
          "/ui/services/ProjectManagmant_pic3.jpg",
        ],
        sublist: [
          "-	La planification opérationnelle",
          "Les suivis opérationnels des travaux",
          "La rédaction des cahiers de charges",
        ],
      },
      {
        title: "Conseil en Conception et Optimisation",
        sub: "Études préliminaires pour orienter, planifier et sécuriser la faisabilité des projets.",
        link: "controle-technique",
        img: "/ui/home/service3.jpg",
        imgList: [
          "/ui/services/Conception_pic1.jpg",
          "/ui/services/Conception_pic2.jpg",
          "/ui/services/Conception_pic3.jpg",
        ],
        sublist: [
          "Les études d'opportunité",
          "Les études de préfaisabilité",
          "Les études de faisabilité",
          "Les études socioéconomiques",
        ],
      },
      {
        title: "Développement Durable et Certifications",
        sub: "Solutions axées sur la durabilité, la gestion environnementale et l’optimisation des ressources naturelles.",
        link: "controle-technique",
        img: "/ui/home/service4.jpg",
        imgList: [
          "/ui/services/EcoDevelopment_pic1.jpg",
          "/ui/services/EcoDevelopment_pic2.jpg",
          "/ui/services/EcoDevelopment_pic3.jpg",
        ],
        sublist: [
          "Les métiers de l'environnement",
          "Le génie rural",
          "Les études hydrogéologie et hydrologie",
          "Les techniques d'analyse des données",
        ],
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
  Partners: {
    title: {
      main: "Partenaires",
      sub: "ils nous ont fait confiance, hier comme aujourd'hui",
    },
  },
  contact: {
    title: {
      main: "Contactez-nous",
      sub: "Partagez vos projets et travaillons ensemble",
      slogan: "performing for real progress",
    },
    buttons: {
      link: "Contactez-nous",
      reset: "Réinitialiser",
      send: "Envoyer",
    },
    form: {
      name: "Nom",
      email: "Address mail",
      profession: "Profession",
      subject: "Sujet",
      message: "Mesage",
    },
  },
  newsLetter: {
    title: {
      main: "Abonnez-vous à notre newsletter",
      sub: "Recevez les dernières actualités et mises à jour de Creacosult",
    },
    buttons: {
      link: "S'abonner",
    },
  },
  actu: "À la Une",
  Jobs: {
    title: {
      title: {
        main: "Offres d'emploi",
        sub: "Rejoignez notre équipe d'experts",
      },
    },
    filters: {
      all: "Tous",
      active: "Actives",
    },
    banner: {
      title: "Nouvelles opportunités",
      message: "Postuler maintenant",
    },
  },
  about: {
    story: {
      title: "Our Story",
      desc: `
      CREACONSULT, an engineering and project management company founded in 2006, uses its proven expertise to create sustainable living environments. Committed to continuous improvement, we simplify every stage for project owners and investors. \n\n Certified ISO 9001 and 14001 (2015 standard), our management combines rigour, quality and environmental commitment. As specialists in institutional, commercial and industrial projects, we apply our cutting-edge technical expertise to ambitious projects. \n\nAt CREACONSULT, excellence is based on strong professional and ethical values, guaranteeing our customers and partners a privileged and efficient collaboration. \n\nInnovative engineering and project management solutions for exceptional projects.
      `,
      boxImages: [
        {
          img: "/ui/services/Conception_pic1.jpg",
          title: "Ingénierie et Études Techniques",
        },
        {
          img: "/ui/services/EcoDevelopment_pic2.jpg",
          title: "Développement Durable et Certifications",
        },
        {
          img: "/ui/services/ProjectManagmant_pic3.jpg",
          title: "Conseil en Conception et Optimisation",
        },
      ],
    },
    certification: {
      title: "Certifications",
      sub: "Une Expertise Reconnue",
      desc: `<p class="text-justify">
  Certifiée <strong>ISO 9001 et ISO 14001</strong>, et détentrice de <strong>l'Agrément pour les études d'impact environnemental</strong>, CREACONSULT affirme son engagement pour la qualité, la performance durable et la responsabilité environnementale. Ces reconnaissances consolident la rigueur de ses processus internes, valorisent son image auprès des partenaires, facilitent l'accès aux marchés et assurent une meilleure gestion des risques dans un environnement économique de plus en plus exigeant.
</p>`,
    },
  },
  team: {
    title: "Equipe",
    posts: [
      {
        name: "Mr. Désiré FOTSO",
        post: "Directeur des Opérations",
        img: "/ui/team/Ceo.png",
        links: {
          linkedin: "https://linkedin.com/in/desire-fotso",
          facebook: "https://facebook.com/desire.fotso",
          email: "dfotso@creaconsult.com",
        },
      },
      {
        name: "Mr. Brice LEKIAGNI",
        post: "Technicien d’Étude et de Suivi",
        img: "/ui/team/Etude.png",
        links: {
          linkedin: "https://linkedin.com/in/brice-lekiagni",
          facebook: "https://facebook.com/brice.lekiagni",
          email: "blekiagni@creaconsult.com",
        },
      },
      {
        name: "Carole TEMOU HEUME",
        post: "Responsable Qualité",
        img: "/ui/team/qualite.png",
        links: {
          linkedin: "https://linkedin.com/in/carole-temou",
          facebook: "https://facebook.com/carole.temou",
          email: "ctemou@creaconsult.com",
        },
      },
      {
        name: "Mme. Amougou Mbassi",
        post: "Responsable Déclaration et Télédéclaration",
        img: "/ui/team/Declaration.png",
        links: {
          linkedin: "https://linkedin.com/in/amougou-mbassi",
          facebook: "https://facebook.com/amougou.mbassi",
          email: "ambassi@creaconsult.com",
        },
      },
      {
        name: "Mme. Gladys Ngono",
        post: "Responsable du Volet Environnemental",
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
