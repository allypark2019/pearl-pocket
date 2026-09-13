export type ModuleId = 'encyclopedia' | 'lab' | 'creatures' | 'log';

export type AccentColor = 'pink' | 'blue' | 'coral' | 'gold';

export interface ModuleConfig {
  id: ModuleId;
  index: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  accent: AccentColor;
  entries: number;
  lastModified: string;
}

export const MODULES: ModuleConfig[] = [
  {
    id: 'encyclopedia',
    index: '01',
    name: 'ENCYCLOPEDIA',
    description: 'Knowledge entries, field notes, and collected wisdom.',
    longDescription:
      'A living reference of topics, skills, and observations. Each entry is a self-contained article with cross-references and metadata.',
    icon: 'BookOpen',
    accent: 'pink',
    entries: 0,
    lastModified: '----',
  },
  {
    id: 'lab',
    index: '02',
    name: 'PROJECT LAB',
    description: 'Build logs, experiments, and workbench notes.',
    longDescription:
      'A playful creative companion for obsessions, active builds, idea pearls, archived treasures, sessions, stats, and collectible achievements.',
    icon: 'FlaskConical',
    accent: 'blue',
    entries: 5,
    lastModified: 'SEP 12',
  },
  {
    id: 'creatures',
    index: '03',
    name: 'CREATURE INDEX',
    description: 'Catalog of observed fauna with field observations.',
    longDescription:
      'A bestiary of creatures encountered — taxonomy, habitat, behavior, and sighting logs. Each entry is a field card.',
    icon: 'PawPrint',
    accent: 'coral',
    entries: 0,
    lastModified: '----',
  },
  {
    id: 'log',
    index: '04',
    name: 'VISITOR LOG',
    description: 'Guest registry and access records.',
    longDescription:
      'A record of visitors to the archive — names, timestamps, notes, and purpose of visit. The terminal\'s guestbook.',
    icon: 'Users',
    accent: 'gold',
    entries: 0,
    lastModified: '----',
  },
];
