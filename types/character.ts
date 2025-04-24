export type Character = {
  name: {
    ko: string;
    en: string;
  };
  job: string;
  shortJob: string;
  skills: string[];
  level: number;
  profile_image_url: string;
  image_url: string;
  disabled: boolean;
  progress: {
    label: string;
    value: number;
  }[];
  attribute: {
    icon: string;
    label: string;
    description: string;
  }[];
  birthday: string;
  mbti: string;
  major: string;
  favoriteSkills: string[];
};
