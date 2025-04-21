export type Quest = {
  slug: string;
  title: string;
  date: {
    startAt: string;
    endAt: string;
  };
  skills: string[];
  content: string;
  contributors: number;
  description: string;
  banners: string[];
  url: {
    github: string;
    external: string;
  };
};
