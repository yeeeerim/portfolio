export type Character = {
  name: {
    ko: string;
    en: string;
  };
  job: string;
  shortJob: string;
  skills: string[];
  level: number;
  profile_image: string;
  disabled: boolean;
  progress: {
    label: string;
    value: number;
  }[];
  attribute: {
    icon: string;
    label: string;
  }[];
};
