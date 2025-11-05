import type { Startup, Resource, Event, SuccessStory } from './types';

export const startups: Startup[] = [
  {
    id: '1',
    name: 'InnovateAI',
    logoUrl: 'startup-logo-1',
    description: 'Pioneering AI-driven solutions for personalized education and corporate training.',
    website: '#',
    industry: 'EdTech'
  },
  {
    id: '2',
    name: 'GreenScape',
    logoUrl: 'startup-logo-2',
    description: 'Developing sustainable urban farming technologies to bring fresh produce to city dwellers.',
    website: '#',
    industry: 'AgriTech'
  },
  {
    id: '3',
    name: 'HealthPlus',
    logoUrl: 'startup-logo-3',
    description: 'A telehealth platform connecting patients with specialist doctors for remote consultations.',
    website: '#',
    industry: 'HealthTech'
  },
  {
    id: '4',
    name: 'FinSecure',
    logoUrl: 'startup-logo-4',
    description: 'Blockchain-based platform for secure and transparent financial transactions.',
    website: '#',
    industry: 'FinTech'
  },
  {
    id: '5',
    name: 'EduVerse',
    logoUrl: 'startup-logo-5',
    description: 'Immersive VR and AR learning experiences for K-12 students.',
    website: '#',
    industry: 'EdTech'
  },
  {
    id: '6',
    name: 'Foodify',
    logoUrl: 'startup-logo-6',
    description: 'A smart meal planning and grocery delivery service that reduces food waste.',
    website: '#',
    industry: 'FoodTech'
  },
];

export const resources: Resource[] = [
  {
    id: 'res1',
    category: 'Business Planning',
    title: 'The Ultimate Business Plan Template',
    description: 'A comprehensive template to help you create a winning business plan.',
    link: '#',
    type: 'Template',
  },
  {
    id: 'res2',
    category: 'Fundraising',
    title: 'Guide to Venture Capital',
    description: 'An in-depth article on how to approach VCs and secure funding.',
    link: '#',
    type: 'Guide',
  },
  {
    id: 'res3',
    category: 'Marketing',
    title: 'Growth Hacking Strategies for Startups',
    description: 'Learn proven marketing tactics to grow your user base quickly.',
    link: '#',
    type: 'Article',
  },
  {
    id: 'res4',
    category: 'Product Development',
    title: 'Lean Canvas Tool',
    description: 'An interactive tool to map out your business model on a single page.',
    link: '#',
    type: 'Tool',
  },
    {
    id: 'res5',
    category: 'Business Planning',
    title: 'Crafting Your Elevator Pitch',
    description: 'A guide to creating a concise and compelling pitch for your startup.',
    link: '#',
    type: 'Guide',
  },
  {
    id: 'res6',
    category: 'Marketing',
    title: 'Content Marketing 101',
    description: 'Everything you need to know to start a successful content marketing strategy.',
    link: '#',
    type: 'Article',
  },
];

export const events: Event[] = [
  {
    id: 'evt1',
    date: '2024-08-15',
    title: 'Pitch Night & Networking',
    description: 'An opportunity for our startups to pitch to a panel of investors and network with the community.',
    time: '6:00 PM - 9:00 PM',
    location: 'In-Person',
  },
  {
    id: 'evt2',
    date: '2024-08-22',
    title: 'Workshop: Digital Marketing for Early-Stage Startups',
    description: 'Learn the fundamentals of digital marketing to grow your online presence.',
    time: '10:00 AM - 1:00 PM',
    location: 'Online',
  },
  {
    id: 'evt3',
    date: '2024-09-05',
    title: 'Founder Fireside Chat with InnovateAI CEO',
    description: 'Join us for an inspiring conversation about the journey of building a successful AI company.',
    time: '5:00 PM - 6:00 PM',
    location: 'Online',
  },
  {
    id: 'evt4',
    date: '2024-09-19',
    title: 'Demo Day - Summer Cohort 2024',
    description: 'Our latest cohort of startups will showcase their products and progress.',
    time: '2:00 PM - 5:00 PM',
    location: 'In-Person',
  },
];

export const successStories: SuccessStory[] = [
  {
    id: 'ss1',
    startupName: 'InnovateAI',
    imageUrl: 'success-story-1',
    headline: 'From Idea to Industry Leader: The InnovateAI Story',
    fullStory: 'InnovateAI started as a simple idea in a coffee shop and has grown into a leading provider of AI-powered educational tools. Through the Vadodara Startup Studio, they received crucial mentorship, funding, and resources that helped them scale their vision. Their platform is now used by over 50 universities and corporations worldwide, transforming the way people learn and train.',
    website: '#',
  },
  {
    id: 'ss2',
    startupName: 'GreenScape',
    imageUrl: 'success-story-2',
    headline: 'How GreenScape is Sowing the Seeds of a Sustainable Future',
    fullStory: 'GreenScape\'s journey began with a passion for sustainability and a mission to make fresh food accessible to everyone. The studio provided them with lab space and connections to agricultural experts. Today, their vertical farming systems are installed in urban centers across the country, reducing food miles and promoting healthy eating habits.',
    website: '#',
  },
];
