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
  banners: string[];
  url: {
    github: string;
    external: string;
  };
};
