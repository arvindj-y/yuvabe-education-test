import React from "react";
import { FilterType } from "@/types/programs";
import { cn } from "@/lib/utils";

interface ProgramFilterTabsProps {
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const ProgramFilterTabs: React.FC<ProgramFilterTabsProps> = ({
  currentFilter,
  setFilter,
}) => {
  const filters: FilterType[] = ["all", "active", "upcoming", "completed"];

  return (
    <div className="flex space-x-4 my-6 justify-center">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105",
            currentFilter === filter
              ? "bg-[#592AC7] text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-100"
          )}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ProgramFilterTabs;
