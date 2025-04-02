// pages/joins-us.tsx
"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { GET_JDS } from "src/lib/graphqlRequest";

interface JobDescriptionNode {
  content: string;
  excerpt: string;
  jobDescriptions: {
    experience: string;
    fieldGroupName: string;
  };
  slug: string;
  title: string;
}

interface JobDescriptionsData {
  data: {
    jobs: {
      nodes: JobDescriptionNode[];
    };
  };
}
const JDS: React.FC = () => {
  const [jobListings, setJobListings] = useState<JobDescriptionNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobListings = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://wp.yuvabeeducation.com/?graphql=true",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: GET_JDS,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: JobDescriptionsData = await response.json();
        setJobListings(result.data.jobs.nodes);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobListings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!jobListings) return <p>No job listings found.</p>;

  return (
    <div>
      <Head>
        <title>Join Us</title>
      </Head>

      <main>
        <div className="bg-white">
          <div className="bg-[#FFF9EA] py-32 relative">
            <div className="max-w-[1028px] flex flex-col m-auto ">
              <div className="flex flex-col gap-y-32 justify-between p-5 md:p-8 flex-wrap xl:p-0">
                <h2 className="text-black text-2xl md:text-[64px] leading-[120%] font-semibold text-center font-primary z-10">
                  Current Openings
                </h2>
                {/* Job Listings */}
                <div className="flex flex-col gap-y-32">
                  {/* Individual Listings */}
                  {jobListings.map((job) => (
                    <div
                      key={job.slug}
                      className="flex flex-col py-4 px-5 md:py-16 md:px-[74px] max-w-[1028] bg-white rounded-[50px] gap-y-6 items-center z-10"
                    >
                      <h3 className="text-black text-2xl md:text-[40px] leading-[120%] font-semibold text-center font-primary">
                        {job.title} |
                        <span>
                          &nbsp;{job.jobDescriptions?.experience || ""}
                        </span>
                      </h3>
                      <p
                        className="font-secondary font-normal text-black text-[18px] leading-[30px]  text-center line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: job.excerpt }}
                      ></p>
                      {/* Read More Button */}
                      <Link href={`get-involved/join-us/${job.slug}`}>
                        <div className="bg-[#592AC7] py-[18px] px-8 w-[142px] rounded-[15px] mt-2">
                          <p className="font-primary font-semibold text-white text-[14px] leading-[150%]">
                            Read More
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="svgs">
              {/* Yellow Crescent */}
              <svg
                width="343"
                height="253"
                viewBox="0 0 343 253"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[0.2%] top-[2%] scale-50 xl:scale-100"
              >
                <path
                  d="M0.783421 147.486C41.51 237.333 147.361 277.152 237.208 236.425C327.055 195.698 366.876 89.8477 326.149 0.00106972C116.625 94.9742 253.313 33.0157 163.466 73.7426C73.6185 114.469 172.533 69.6367 0.783421 147.486Z"
                  fill="#FFCA2D"
                />
              </svg>
              {/* Green Square */}
              <svg
                width="260"
                height="259"
                viewBox="0 0 260 259"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-[0.2%] top-[14%] scale-50 xl:scale-100"
              >
                <rect
                  x="100.289"
                  width="187.637"
                  height="187.637"
                  transform="rotate(32.0259 100.289 0)"
                  fill="#91C644"
                />
              </svg>
              {/* Yellow Circle Large */}
              <svg
                width="404"
                height="403"
                viewBox="0 0 404 403"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[12%] top-[45%] scale-50 xl:scale-100"
              >
                <circle cx="202.281" cy="201.5" r="201.5" fill="#FFCA2D" />
              </svg>
              {/* Triangle Blue */}
              <svg
                width="251"
                height="256"
                viewBox="0 0 251 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[5%] right-[15%] scale-50 xl:scale-100"
              >
                <path
                  d="M250.547 0.865651L192.006 255.82L0.479068 77.6452L250.547 0.865651Z"
                  fill="#33BED4"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JDS;
