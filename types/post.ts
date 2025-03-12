/**
 * TODO: 아래와 같이 수정 필요
 * title: string
 * date: string
 * banner: {
 *  src: string
 *  alt: string
 *  caption?: string
 * }
 * slug: string
 * reward: number
 */
export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
