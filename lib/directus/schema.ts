interface Collections {
  Contacts: {
    name: string;
    email: string;
    message: string;
    subject: string;
    profession: string;
  };
  News: {
    content: string;
    cover: string;
    date_created: string;
    headline: true;
    id: 1;
    images: Array<string>;
    slug: string;
    sort: null;
    status: string;
    subtitle: string;
    summary: string;
    title: string;
    user_created: string;
  };
  Job: {
    date_created: string;
    description: string;
    id: 1;
    illustration: string;
    sort: null;
    status: string;
    summary: string;
    tags: Array<string>;
    title: string;
    user_created: string;
  };
}

export default Collections;
