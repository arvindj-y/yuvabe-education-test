// pages/all-posts.tsx
"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { GET_ALL_POSTS } from "src/lib/graphqlRequest";
import Image from "next/image";

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

const BlogPosts: React.FC = () => {
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

      <main>
        {/* Wrapper */}
        <div className="bg-color py-32">
          <div className="max-w-[1028px] flex flex-col m-auto">
            <div>
              {/* Blog Cards */}
              <div className="flex flex-row flex-wrap gap-x-[25px] gap-y-16 blog-list-block relative my-52 justify-between px-5">
                {/* Individual Blog Cards */}
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-col flex-wrap items-start p-10 bg-white gap-[22.59px] border-radius-18 w-full xl:min-h-[450px] box-shadow-default blog-list-box z-10 md:w-[45%] xl:w-[31%] hover:bg-[#592AC7] group"
                  >
                    <Link
                      href={`blogs/${post.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      {post.featuredImage?.node?.sourceUrl && (
                        <img
                          src={post.featuredImage.node.sourceUrl}
                          alt={post.featuredImage.node.altText || post.title}
                          className="border-radius-1240 blog-list-image w-full mb-[22.5px]"
                          width={247.7}
                          height={163.02}
                        />
                      )}
                      <div className="flex flex-col gap-y-[7.19px]">
                        <h2 className="font-primary font-semibold leading-[24.45px] text-[18.83px] group-hover:text-white">
                          {post.title}
                        </h2>
                        <p
                          className="font-secondary font-normal leading-[24.45px] text-[13.18px] group-hover:text-white line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        ></p>
                      </div>
                    </Link>
                  </div>
                ))}
                <div className="svgs">
                  {/* Yellow Circle 1 */}
                  <svg
                    width="305"
                    height="305"
                    viewBox="0 0 305 305"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[10%] top-[-5%] scale-50 xl:scale-100"
                  >
                    <circle
                      cx="152.368"
                      cy="152.163"
                      r="151.97"
                      fill="#F9A91E"
                    />
                  </svg>
                  {/* Green Crescent */}
                  <svg
                    width="387"
                    height="286"
                    viewBox="0 0 387 286"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[-7%] top-[32%] scale-50 xl:scale-100"
                  >
                    <path
                      d="M386.623 166.788C340.587 268.35 220.934 313.361 119.373 267.324C17.8107 221.287 -27.2013 101.635 18.8354 0.0734748C255.678 107.43 101.168 37.3927 202.73 83.4297C304.292 129.467 192.48 78.7885 386.623 166.788Z"
                      fill="#91C644"
                    />
                  </svg>
                  {/* Blue Circle Small */}
                  <svg
                    width="101"
                    height="101"
                    viewBox="0 0 101 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-[-5%] top-[5%] scale-50 xl:scale-100"
                  >
                    <circle
                      cx="50.4913"
                      cy="50.4406"
                      r="50.3429"
                      fill="#33BED4"
                    />
                  </svg>
                  {/* Triangle Blue */}
                  <svg
                    width="234"
                    height="262"
                    viewBox="0 0 234 262"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute lg:bottom-[-10%] bottom-[-5%] left-[-2%] scale-50 xl:scale-100"
                  >
                    <path
                      d="M233.362 0.140296L221.129 261.443L0.950294 120.197L233.362 0.140296Z"
                      fill="#33BED4"
                    />
                  </svg>
                  {/* Orange Circle 2 */}
                  <svg
                    width="305"
                    height="304"
                    viewBox="0 0 305 304"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-[20%] right-[-5%] scale-50 xl:scale-100"
                  >
                    <circle
                      cx="152.306"
                      cy="151.97"
                      r="151.97"
                      fill="#FFCA2D"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPosts;
