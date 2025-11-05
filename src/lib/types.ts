export interface Startup {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  website: string;
  industry: string;
}

export interface Resource {
  id: string;
  category: string;
  title: string;
  description: string;
  link: string;
  type: 'Article' | 'Template' | 'Guide' | 'Tool';
}

export interface Event {
  id: string;
  date: string;
  title: string;
  description: string;
  time: string;
  location: 'Online' | 'In-Person';
}

export interface SuccessStory {
  id: string;
  startupName: string;
  imageUrl: string;
  headline: string;
  fullStory: string;
  website: string;
}
