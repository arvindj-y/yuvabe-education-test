// pages/all-posts.tsx
"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { GET_ALL_POSTS } from "src/lib/graphqlRequest";
import Blogtemp from "@/components/Blogtemp";
import BlogPosts from "@/components/BlogPosts";
import FeaturedPosts from "@/components/FeaturedPosts";

interface CategoryNode {
  id: string;
  name: string;
}

interface FeaturedImageNode {
  altText: string;
  sourceUrl: string;
}

interface FeaturedPost {
  featuredPost: boolean;
  fieldGroupName: string;
}

interface PostNode {
  categories: {
    nodes: CategoryNode[];
  };
  featuredImage: {
    node: FeaturedImageNode;
  };
  featuredPost: FeaturedPost;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  id: string;
}

interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

interface AllPostsData {
  data: {
    posts: {
      nodes: PostNode[];
      pageInfo: PageInfo;
    };
  };
}

const POSTS_PER_PAGE = 9;

const AllPosts: React.FC = () => {
  const [posts, setPosts] = useState<PostNode[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [before, setBefore] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      setPosts([]);
      try {
        const response = await fetch(
          "https://wp.yuvabeeducation.com/?graphql=true",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: GET_ALL_POSTS,
              variables: {
                after,
                before,
                first: after ? POSTS_PER_PAGE : null, // Pagination when fetching forward
                last: before ? POSTS_PER_PAGE : null, // Pagination when fetching backward
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: AllPostsData = await response.json();

        setPosts(result.data.posts.nodes);
        setPageInfo(result.data.posts.pageInfo);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [after, before]);

  const handleNextPage = () => {
    if (pageInfo?.hasNextPage && pageInfo?.endCursor) {
      setAfter(pageInfo.endCursor); // Move forward by setting `after`
      setBefore(null); // Reset `before` for forward navigation
    }
  };

  const handlePreviousPage = () => {
    if (pageInfo?.hasPreviousPage && pageInfo?.startCursor) {
      setBefore(pageInfo.startCursor); // Move backward by setting `before`
      setAfter(null); // Reset `after` for backward navigation
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!posts || posts.length === 0) return <p>No posts found.</p>;

  return (
    <div>
      <Head>
        <title>All Posts</title>
      </Head>

      {/* <main>
        <h1>All Posts</h1>

        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                marginBottom: "20px",
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              {post.featuredImage?.node?.sourceUrl && (
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
              <h2>
                <Link
                  href={`/blogs/${post.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  {post.title}
                </Link>
              </h2>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <div>
                <strong>Categories:</strong>
                {post.categories?.nodes.map((category) => (
                  <span key={category.id} style={{ marginRight: "5px" }}>
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {pageInfo?.hasPreviousPage && (
            <button
              onClick={handlePreviousPage}
              style={{
                padding: "8px 16px",
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Previous
            </button>
          )}
          {pageInfo?.hasNextPage && (
            <button
              onClick={handleNextPage}
              style={{
                padding: "8px 16px",
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          )}
        </div>
      </main>
      <Blogtemp /> */}
      <FeaturedPosts />
      <BlogPosts />
    </div>
  );
};

export default AllPosts;
