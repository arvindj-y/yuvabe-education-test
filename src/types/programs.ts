
export interface ProgramDate {
  start: string;
  end: string;
}

export interface CalendarDay {
  day: number;
  active: boolean;
  highlight?: boolean;
}

export interface MonthCalendar {
  month: string;
  days: CalendarDay[];
  dates?: ProgramDate;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  type: string;
  location: string;
  calendar: MonthCalendar[];
  status: 'active' | 'upcoming' | 'completed';
}

export type FilterType = 'all' | 'active' | 'upcoming' | 'completed';
