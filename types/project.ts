export interface Project {
  title: string;
  description: string;
  slug: string;
  creationDate: string;
  modificationDate: string;
  content: string;
  number: string;
  activity: number[];
  preview?: any;
  todos?: string[];
}
