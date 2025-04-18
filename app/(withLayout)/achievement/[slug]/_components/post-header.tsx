import { CrossSwordsIcon } from "@/components/icons";

interface PostHeaderProps {
  title: string;
  date: string;
  coverImage?: string;
}

const PostHeader = ({ title, date }: PostHeaderProps) => {
  return (
    <div className="flex gap-1 flex-col">
      <CrossSwordsIcon className="w-5 h-5" />{" "}
      <h4 className="mt-2">{title} 회고</h4>
      <p className="text-sm text-default-500">{date}</p>
    </div>
  );
};

export default PostHeader;
