export interface Dictionary {
  title: string;
  navbar: Array<{
    title: string;
    link: string;
  }>;
  footer: {
    links: Array<{
      title: string;
      link: string;
    }>;
    info: { title: string; links: Array<{ href: string; label: string }> };
    help: { title: string; links: Array<{ href: string; label: string }> };
    service: { title: string; links: Array<{ href: string; label: string }> };
    contact: { title: string; links: Array<{ href: string; label: string }> };
  };
  pages: {
    about: {
      title: string;
      subtitle: string;
    };
    service: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
    };
  };
  hero: {
    title: {
      small: string;
      main: string;
      sub: string;
    };
    action: {
      contact: string;
      devis: string;
    };
  };
  why: {
    title: {
      main: string;
      sub: string;
    };
    reasons: Array<{ title: string; desc: string }>;
  };
  service: {
    title: {
      main: string;
      sub: string;
    };
    serviceList: {
      title: string;
      sub: string;
      imgList: string[];
      link: string;
      img: string;
      sublist: string[];
    }[];
  };
  Partners: {
    title: {
      main: string;
      sub: string;
    };
  };
  contact: {
    title: {
      main: string;
      sub: string;
      slogan: string;
    };
    buttons: {
      link: string;
      reset: string;
      send: string;
    };
    form: {
      name: string;
      email: string;
      profession: string;
      subject: string;
      message: string;
    };
  };
  newsLetter: {
    title: {
      main: string;
      sub: string;
    };
    buttons: {
      link: string;
    };
  };
  Jobs: {
    title: {
      title: {
        main: string;
        sub: string;
      };
    };
    filters: {
      all: string;
      active: string;
    };
    banner: {
      title: string;
      message: string;
    };
  };
  about: {
    story: {
      title: string;
      desc: string;
      boxImages: Array<{ img: string; title: string }>;
    };
    certification: {
      title: string;
      sub: string;
      desc: string;
    };
  };
  team: {
    title: string;
    posts: {
      name: string;
      post: string;
      img: string;
      links: {
        linkedin: string;
        facebook: string;
        email: string;
      };
    }[];
  };
}
