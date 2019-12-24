export enum LinkType {
  application,
  url,
  folder
};

export interface Link {
  name: string;
  description: string;
  target: string; // | Application[];
  icon: string;
  linkType: LinkType,
  requiresElevatedPrivledges?: boolean;
}
