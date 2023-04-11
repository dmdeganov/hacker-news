export interface Item {
  id: number;
  type: string;
  by: string;
  time: number;
  kids?: number[];
  deleted?: boolean;
  title?: string;
  text?: string;
  parent?: number;
  descendants?: number;
  url?: string;
  score?: number;
}

type CommentType = Omit<Item, 'tittle' | 'descendants' | 'score' | 'url'>;
type StoryType = Omit<Item, 'text' | 'parent'>;

export type {CommentType, StoryType};
