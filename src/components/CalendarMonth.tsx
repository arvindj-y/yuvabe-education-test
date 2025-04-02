import React from "react";
import { MonthCalendar } from "@/types/programs";
import { cn } from "@/lib/utils";

interface CalendarMonthProps {
  monthData: MonthCalendar;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ monthData }) => {
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="bg-white rounded-xl p-4 flex flex-col h-full">
      <h3 className="text-lg font-semibold text-center mb-2">
        {monthData.month}
      </h3>

      <div className="grid grid-cols-7 gap-1 mb-1">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-xs text-gray-500 font-medium text-center"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 flex-grow">
        {monthData.days.map((day, idx) => (
          <div
            key={idx}
            className={cn(
              "calendar-day text-xs",
              day.active && day.highlight
                ? "highlight"
                : day.active
                ? "active"
                : "text-gray-400"
            )}
          >
            {day.day > 0 ? day.day : ""}
          </div>
        ))}
      </div>

      {monthData.dates && (
        <div className="mt-2 text-xs text-gray-600 text-center">
          {monthData.dates.start} to {monthData.dates.end}
        </div>
      )}

      {monthData.month === "May" || monthData.month === "Jun" ? (
        <div className="mt-2 text-xs text-gray-600 text-center italic">
          Holiday
        </div>
      ) : null}
    </div>
  );
};

export default CalendarMonth;
