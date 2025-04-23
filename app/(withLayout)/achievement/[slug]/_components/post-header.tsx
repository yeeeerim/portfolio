interface PostHeaderProps {
  title: string;
  date: string;
  coverImage?: string;
}

const PostHeader = ({ title, date }: PostHeaderProps) => {
  return (
    <div className="flex gap-1 flex-col">
      <h3 className="mt-2 mb-0">{title} 회고</h3>
      <span className="text-sm text-gray-400">{date}</span>
    </div>
  );
};

export default PostHeader;
