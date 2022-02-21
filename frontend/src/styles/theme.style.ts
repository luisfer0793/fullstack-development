import { Tuple } from '@mantine/core';

const gray: Tuple<string, 10> = [
  '#F9FAFB',
  '#F3F4F6',
  '#E5E7EB',
  '#D1D5DB',
  '#9CA3AF',
  '#6B7280',
  '#4B5563',
  '#374151',
  '#1F2937',
  '#111827',
];

const slate: Tuple<string, 10> = [
  '#F8FAFC',
  '#F1F5F9',
  '#E2E8F0',
  '#CBD5E1',
  '#94A3B8',
  '#64748B',
  '#475569',
  '#334155',
  '#1E293B',
  '#0F172A',
];

export const theme = {
  fontFamily: "'Outfit', sans-serif",
  headings: {
    fontFamily: "'Work Sans', sans-serif",
  },
  colors: {
    gray,
    slate,
  },
  other: {
    fontSerif: "'Work Sans', sans-serif",
    fontSans: "'Outfit', sans-serif",
    weights: [400, 500, 600, 700],
  },
};
