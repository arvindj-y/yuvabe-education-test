import React from "react";
import { Program } from "@/types/programs";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProgramCardProps {
  program: Program;
  isActive: boolean;
  onClick: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  isActive,
  onClick,
}) => {
  // Function to generate program-specific URL slug
  const getProgramSlug = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  // Generate specific program URL
  const programSpecificUrl = `/program/${getProgramSlug(program.name)}`;

  // Default links as fallback
  const viewMoreLink = programSpecificUrl;
  const registerLink = `/register/${program.id}`;
  return (
    <div
      onClick={onClick}
      className={cn(
        "program-card w-full rounded-xl p-6 mb-4 transform transition-all duration-500 ease-in-out shadow-md hover:shadow-xl cursor-pointer overflow-hidden",
        isActive ? "bg-[#592AC7] text-white " : "bg-white text-gray-900"
      )}
    >
      <div className="flex items-center mb-2">
        {program.status === "active" && (
          <div
            className={cn("w-3 h-3 rounded-full mr-2", "bg-green-500")}
          ></div>
        )}
        <h3
          className={cn(
            "text-xl font-bold",
            isActive ? "text-[#FFCA2D]" : "text-[#592AC7]"
          )}
        >
          {program.name}
        </h3>
      </div>

      <p
        className={cn(
          "text-sm mb-2",
          isActive ? "text-white" : "text-gray-600"
        )}
      >
        {program.description}
      </p>
      <p
        className={cn(
          "text-xs mb-4",
          isActive ? "text-white opacity-80" : "text-gray-500"
        )}
      >
        {program.location}
      </p>

      <div className="flex justify-between items-center">
        <div
          className={cn(
            "text-sm font-semibold",
            isActive ? "text-[#FFCA2D]" : "text-gray-900"
          )}
        >
          {program.type}
        </div>
        {program.status === "upcoming" ? (
          <Link href={viewMoreLink || "/default-page"}>
            <button
              className={cn(
                "text-sm  rounded-full h-10 px-4 py-2",
                isActive
                  ? "bg-white text-[#592ac7] hover:bg-gray-200"
                  : "bg-[#592AC7] hover:bg-violet-200 text-white"
              )}
            >
              Register
            </button>
          </Link>
        ) : (
          <Link href={viewMoreLink || "/default-page"}>
            <button
              className={cn(
                "text-sm  px-4 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground py-2 ",
                isActive
                  ? "bg-white text-[#592ac7] hover:bg-white hover:text-steam-purple"
                  : "text-[#592ac7] border-[#592ac7] hover:bg-violet-200 "
              )}
            >
              View more
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
