import React from "react";
import { Program, MonthCalendar } from "@/types/programs";
import CalendarMonth from "@/components/CalendarMonth";

interface ProgramCalendarProps {
  program: Program | null;
}

const ProgramCalendar: React.FC<ProgramCalendarProps> = ({ program }) => {
  // Group months into rows of 3 for display
  const groupedMonths: MonthCalendar[][] = [];

  if (program) {
    for (let i = 0; i < program.calendar.length; i += 3) {
      groupedMonths.push(program.calendar.slice(i, i + 3));
    }
  }

  return (
    <div className="w-[850px] max-w-[1200px] mx-auto h-full overflow-hidden animate-fade-in-up">
      {program ? (
        <div className="space-y-4">
          {groupedMonths.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {row.map((month, idx) => (
                <CalendarMonth
                  key={`${month.month}-${idx}`}
                  monthData={month}
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-400">
          Select a program to view its calendar
        </div>
      )}
    </div>
  );
};

export default ProgramCalendar;
