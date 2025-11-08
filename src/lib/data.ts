import type { Startup, Resource, Event, SuccessStory } from './types';

export const startups: Startup[] = [
  {
    id: '1',
    name: 'Hospital On Cloud',
    logoUrl: 'startup-logo-hoc',
    description: 'Pioneering affordable space tourism solutions.',
    website: 'https://thehospital.cloud/',
    industry: 'HealthTech'
  },
  {
    id: '2',
    name: 'Galanto',
    logoUrl: 'startup-logo-galanto',
    description: 'Next-gen cybersecurity for IoT devices and smart homes.',
    website: 'https://www.galantoindia.com/',
    industry: 'Cybersecurity'
  },
  {
    id: '3',
    name: 'Ecosense',
    logoUrl: 'startup-logo-ecosense',
    description: 'Ecosense is an environmental consultancy that helps businesses reduce their carbon footprint.',
    website: 'https://ecosense-enviro.com/',
    industry: 'CleanTech'
  },
  {
    id: '4',
    name: 'Dr. Cardio',
    logoUrl: 'startup-logo-drcardio',
    description: 'Quantum computing solutions for complex data analysis.',
    website: 'https://drcardio.in/',
    industry: 'HealthTech'
  },
  {
    id: '5',
    name: 'Dori Handcrafts',
    logoUrl: 'startup-logo-dori',
    description: 'Accessible Macramé knowledge and tools for crafting potential in Bohemian and Modern Boho design trends.',
    website: '#',
    industry: 'eCommerce'
  },
  {
    id: '6',
    name: 'Furno Foods',
    logoUrl: 'startup-logo-furno',
    description: 'Quantum computing solutions for complex data analysis.',
    website: '#',
    industry: 'FoodTech'
  },
  {
    id: '7',
    name: 'Collab Act',
    logoUrl: 'startup-logo-collabact',
    description: 'A platform for collaborative learning and action.',
    website: 'https://learn.collabact.com/',
    industry: 'EdTech'
  },
  {
    id: '8',
    name: 'Spaceride Aerotech',
    logoUrl: 'startup-logo-spaceride',
    description: 'Developing next-generation aerospace technologies.',
    website: '#',
    industry: 'Aerospace'
  }
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
    fullStory: 'InnovateAI started as a simple idea in a coffee shop and has grown into a leading provider of AI-powered educational tools. Through the Rajkot Startup Studio, they received crucial mentorship, funding, and resources that helped them scale their vision. Their platform is now used by over 50 universities and corporations worldwide, transforming the way people learn and train.',
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
