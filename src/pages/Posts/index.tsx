import React from "react";

import { useQuery } from "react-query";
import { getPosts } from "../../service/http";

interface Post {
  id: number;
  title: string;
  author: string;
}

const Posts: React.FC = () => {
  const { isLoading, data } = useQuery<Post[], "posts">("posts", getPosts);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
