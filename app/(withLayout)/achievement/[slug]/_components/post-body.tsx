import React from "react";

interface PostBodyProps {
  content: string;
}

const PostBody = ({ content }: PostBodyProps) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostBody;
