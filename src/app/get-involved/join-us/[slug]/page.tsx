import React from "react";
import { GET_POST_BY_SLUG } from "src/lib/graphqlRequest"; // Import the query

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

const fetchPost = async (slug: string): Promise<Post | null> => {
  try {
    const response = await fetch(
      "https://wp.yuvabeeducation.com/?graphql=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: GET_POST_BY_SLUG,
          variables: { slug },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result?.data?.postBy || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

interface PageParams {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params }: PageParams) => {
  const post = await fetchPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostPage;
