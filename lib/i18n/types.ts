export interface Dictionary {
  title: string;
  navbar: Array<{
    title: string;
    link: string;
  }>;
  footer: Array<{
    title: string;
    link: string;
  }>;
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
      link: string;
      img: string;
    }[];
  };
}
