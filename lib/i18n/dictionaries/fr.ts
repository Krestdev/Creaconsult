import { title } from "process";
import type { Dictionary } from "../types";

export const fr: Dictionary = {
  title: "CreaConsult",
  navbar: [
    { link: "/", title: "Accueil" },
    { link: "/about", title: "À Propos" },
    { link: "/services", title: "Nos Services" },
    { link: "/jobs", title: "Emplois" },
    { link: "/news", title: "Actualités" },
    { link: "/contact", title: "Contact" },
  ],
  footer: {
    links: [
      { link: "/", title: "Accueil" },
      { link: "/about", title: "À Propos" },
      { link: "/services", title: "Nos Services" },
      { link: "/jobs", title: "Emplois" },
      { link: "/news", title: "Actualités" },
      { link: "/contact", title: "Contact" },
    ],
    info: {
      title: "Informations",
      links: [
        { href: "/about", label: "À propos de nous" },
        { href: "/news", label: "Actualités" },
      ],
    },
    service: {
      title: "Services",
      links: [
        { href: "/services", label: "Nos services" },
        { href: "/terms", label: "Cond. générales" },
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
        {
          href: "mailto:infos@betcreaconsult.com",
          label: "infos@betcreaconsult.com",
        },
      ],
    },
  },
  apply: "Postuler",
  app: "Postuler maintenant",
  new: "Nouveaux emplois",
  autor: "Créé par",
  voir: "Voir plus",
  project: "Projets",
  droit: "Tous droits réservés",
  design: "Design par",
  lien: "Liens",
  JobsDetail: {
    intitule: "Intitulé du poste",
    nombre: "Nombre de postes",
    lieu: "Localisation",
    contrat: "Type de Contrat",
    delai: "Délai de soumission",
    competence: "Compétences",
    description: "Description",
    postuler: "Postuler pour ce poste",
    copier: "Copier le lien",
    copie: "Copié",
    actif: "Actif",
    expire: "Expiré",
    JobSubmit: {
      nom: "Nom Complet",
      cni: "CNI",
      diplome: "Dernier diplôme (Optionnel)",
      lettre: "Lettre de motivation",
      addresse: "Adresse",
      tel: "Numéro de téléphone",
      cv: "CV",
      mail: "Adresse mail",
      poste: "Poste souhaité",
    },
  },
  domainTitle: "Nos Domaines",
  domain: [
    {
      title: "Infrastructures de Transport",
      contain: ["Routière", "Portuaire", "Maritime", "Ouvrages d'art"],
    },
    {
      title: "Bâtiments",
      contain: ["Résidentiels", "Industriels", "Commerciaux", "Tertiaires"],
    },
    {
      title: "Environnement",
      contain: [
        "Hydro-agricole",
        "Assainissement",
        "Réhabilitation Eau et Énergie",
        "Protection Environnementale",
      ],
    },
    {
      title: "Équipements collectifs",
      contain: ["Sportifs", "Hospitaliers", "Éducationnels", "Restauration"],
    },
  ],
  slides: [
    {
      image: "/ui/projects/regie.webp",
      title: " Nouveau siège de la Régie du Terminal à Conteneurs",
      description:
        "Maîtrise d’œuvre complète de l’immeuble de type R+6 à usage de bureaux au profit de la Régie du Terminal à Conteneurs (RTC)",
    },
    {
      image: "/ui/projects/carino.webp",
      title: "Le Carino",
      description: "Construction de l’immeuble siège de KREST HOLDING",
    },
    {
      image: "/ui/projects/japoma.webp",
      title: "Voie d’accès au stade de Japoma",
      description:
        "Maitrise d'œuvre de travaux de réhabilitation de la voie d'accès secondaire au complexe sportif de Japoma ",
    },
    {
      image: "/ui/projects/wouri.webp",
      title: "Wouri",
      description:
        "Maitrise d'œuvre de travaux de construction de la voie sur berges du fleuve Wouri dans la ville de Douala",
    },
    {
      image: "/ui/projects/bourse.webp",
      title: "Bourse sous-traitance et de partenariat du Cameroun",
      description:
        "Études d’avant-projet définitif de la construction de l’immeuble siège de la bourse de sous-traitance et de partenariat du Cameroun (BSTP-CMR)",
    },
    {
      image: "/ui/projects/Ngodi.webp",
      title: "Espace de jeux et loisirs",
      description:
        "Études complémentaires d’un espace de jeux et loisirs à Ngodi Akwa Douala",
    },
  ],
  partner: {
    title: "Partenaires",
    description: "Ils nous ont fait confiance, hier comme aujourd'hui.",
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
          "/ui/services/TechnicalStudies_pic1.webp",
          "/ui/services/TechnicalStudies_pic2.webp",
          "/ui/services/TechnicalStudies_pic3.webp",
        ],
        link: "ingenierie-et-etudes-techniques",
        img: "/ui/home/service1.webp",
        sublist: [
          "Les études de voiries et réseaux divers",
          "L’ingénierie électrique",
          "Les études topographiques et SIG",
          "Les études géotechniques",
        ],
      },
      {
        title: "Maîtrise d’Œuvre et Gestion de Projets",
        sub: "Pilotage global des projets, de la planification à l’exécution sur le terrain Les maîtrises d'œuvre",
        link: "maitrise-d-oeuvre",
        img: "/ui/home/service2.webp",
        imgList: [
          "/ui/services/ProjectManagmant_pic1.webp",
          "/ui/services/ProjectManagmant_pic2.webp",
          "/ui/services/ProjectManagmant_pic3.webp",
        ],
        sublist: [
          "La planification opérationnelle",
          "Les suivis opérationnels des travaux",
          "La rédaction des cahiers de charges",
        ],
      },
      {
        title: "Conseil en Conception et Optimisation",
        sub: "Études préliminaires pour orienter, planifier et sécuriser la faisabilité des projets.",
        link: "controle-technique",
        img: "/ui/home/service3.webp",
        imgList: [
          "/ui/services/Conception_pic1.webp",
          "/ui/services/Conception_pic2.webp",
          "/ui/services/Conception_pic3.webp",
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
        img: "/ui/home/service4.webp",
        imgList: [
          "/ui/services/EcoDevelopment_pic1.webp",
          "/ui/services/EcoDevelopment_pic2.webp",
          "/ui/services/EcoDevelopment_pic3.webp",
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
        title: "Expertise ciblée et impact réel",
        desc: `Avec plus de 15 ans d'expérience, notamment en Afrique subsaharienne, Crea Consult ne se contente pas de contribuer : elle fait réussir les projets. Nos experts interviennent uniquement là où ils excellent. Objectifs clairs, résultats concrets.`,
      },
      {
        title: "Qualité prouvée, performance durable",
        desc: `Certifiée ISO 9001 et 14001, notre rigueur de gestion et notre démarche environnementale assurent des livrables fiables, dans les délais. Chez nous, la qualité est une méthode, pas une promesse.`,
      },
      {
        title: "Des références solides, des résultats mesurables",
        desc: `De grandes institutions aux entreprises locales, nous sommes un partenaire stratégique et réactif. Nous formons aussi les jeunes talents pour construire l'avenir dès aujourd'hui.`,
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
      sub: "Recevez les dernières actualités et mises à jour de Creaconsult",
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
      all: "Tout",
      active: "Actifs",
    },
  },
  about: {
    story: {
      title: "Notre Histoire",
      desc: `
      CREACONSULT, société d’ingénierie et de gestion de projets fondée en 2006, met son expertise éprouvée au service de la création de cadres de vie durables. Engagés dans une démarche d’amélioration continue, nous simplifions chaque étape pour les maîtres d’ouvrage et les investisseurs.\n\nCertifiée ISO 9001 et 14001 (norme 2015), notre gestion allie rigueur, qualité et engagement environnemental. Spécialistes des projets institutionnels, commerciaux et industriels, nous mobilisons notre expertise technique de pointe pour mener à bien des projets ambitieux. \n\nChez CREACONSULT, l’excellence repose sur des valeurs professionnelles et éthiques fortes, garantissant à nos clients et partenaires une collaboration privilégiée et performante.\n\nDes solutions innovantes en ingénierie et gestion de projets pour des réalisations d’exception.
      `,
      boxImages: [
        {
          img: "/ui/services/Conception_pic1.webp",
          title: "Ingénierie et Études Techniques",
        },
        {
          img: "/ui/services/EcoDevelopment_pic2.webp",
          title: "Développement Durable et Certifications",
        },
        {
          img: "/ui/services/ProjectManagmant_pic3.webp",
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
        name: "M. Valery SOULEY",
        post: "Chef de projet",
        img: "/ui/team/VALERY SOULEYChef de projet- crea.webp",
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
