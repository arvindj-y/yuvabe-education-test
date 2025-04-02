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
  readingTime: string;
  date: string;
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

const FeaturedPosts: React.FC = () => {
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

        // Filter posts to include only those with featuredPost: true
        const featuredPosts = result.data.posts.nodes.filter(
          (post) => post.featuredPost && post.featuredPost.featuredPost === true
        );

        setPosts(featuredPosts);
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
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short", // This will get the month as a short name (e.g., 'Mar')
      day: "2-digit",
    };
    const date = new Date(dateString); // Parse the post date
    return date.toLocaleDateString("en-US", options); // Formats as MonthShortName/dd/yyyy
  };

  return (
    <div>
      <Head>
        <title>All Posts</title>
      </Head>

      <main>
        <h1>Featured Posts</h1>
        {/* Wrapper */}
        <div className="bg-color py-32">
          <div className="max-w-[1240px] flex flex-col m-auto">
            <div className=" flex flex-col gap-x-16 relative">
              <h1 className="text-[#592AC7] text-[64px] leading-[120%] font-semibold text-center ">
                Blogs
              </h1>
              <div className="flex flex-col gap-y-8 max-w-[1280px] items-center">
                {/* Featured Blog */}

                {posts.map((post) => (
                  <div key={post.id} className="z-10">
                    <Link
                      href={`blogs/${post.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="flex flex-row gap-16 justify-between flex-wrap px-5 py-[52px] bg-white my-16 rounded-3xl xl:gap-16 xl:max-w-5xl xl:px-16 xl:py-[52px] xl:my-16 xl:flex-nowrap md:px-16 md:py-[52px] z-10">
                        {/* Left Image */}
                        <div className="flex flex-col justify-center w-[100%] xl:w-[35%] lg:w-[35%] md:[100%] sm:w-[100%]">
                          {post.featuredImage?.node?.sourceUrl && (
                            <img
                              src={post.featuredImage.node.sourceUrl}
                              alt={
                                post.featuredImage.node.altText || post.title
                              }
                              className="border-radius-1240 h-full object-cover w-full max-h-[371px]"
                              width={247.7}
                              height={163.02}
                            />
                          )}
                        </div>
                        {/* Right Content */}
                        <div className="flex flex-col gap-y-6 w-[100%] xl:w-[55%] lg:w-[55%] md:w-[100%] sm:w-[100%]">
                          {/* Date & Time to Read */}
                          <div className="flex flex-row gap-x-1">
                            <p className="font-secondary font-normal leading-[30px] text-[18px]">
                              {formatDate(post.date)} {/* Formatted Date */}
                            </p>
                            <p className="font-secondary font-normal leading-[30px] text-[18px]">
                              .
                            </p>
                            <p className="font-secondary font-normal leading-[30px] text-[18px]">
                              {post.readingTime} <span>min read</span>
                            </p>
                          </div>
                          {/* Category */}
                          <div className="bg-[#592AC7] px-4 py-2 w-[114px] rounded-[30px]">
                            <h3 className="font-primary font-semibold leading-[150%] text-base text-white text-center">
                              Our Youth
                            </h3>
                          </div>
                          {/* Title */}
                          <h2 className="font-primary font-semibold leading-[120%] text-[40px]">
                            {post.title}
                          </h2>
                          {/* Excerpt */}
                          <p
                            className="font-secondary font-normal leading-[30px] text-[18px] line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                          ></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="svg">
                <Image
                  src={"/images/paper plane common.gif"}
                  alt={"ALT"}
                  width={1434}
                  height={560}
                  className="absolute left-[0%] top-[0%] hidden xl:block"
                ></Image>
                {/* <svg
                  width="1434"
                  height="560"
                  viewBox="0 0 1434 560"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[-20%] top-[1%] hidden xl:block "
                >
                  <path
                    d="M1312.8 134.693C1312.8 134.693 1936.73 915.519 15.2333 268.018"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="19 19"
                  />
                  <path
                    d="M1218.8 61.7622C1210.81 61.8533 1253.38 118.317 1263.92 132.233C1266.33 133.008 1306.36 107.285 1307.16 107.276M1218.8 61.7622C1226.78 61.6711 1324.52 89.0307 1328.19 95.8067L1311.11 103.22M1218.8 61.7622L1311.11 103.22M1218.8 61.7622L1307.16 107.276M1311.11 103.22C1311.12 104.29 1311.14 106.589 1311.15 107.23C1311.16 108.032 1307.96 107.267 1307.16 107.276"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeaturedPosts;
