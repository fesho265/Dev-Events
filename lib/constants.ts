export type EventItem = {
    title: string;
    image: string;
    location: string;
    slug: string;
    date: string;
    time: string;
};


export const events: EventItem[] = [
    {
        image: '/images/event1.png',
        title: 'Tech Conference 2025',
        slug: 'tech-conference-2025',
        location: 'San Francisco, CA',
        date: '2025-01-15',
        time: '10:00 AM'
    },
    {
        image: '/images/event2.png',
        title: 'Startup Pitch Night',
        slug: 'startup-pitch-night',
        location: 'New York City, NY',
        date: '2025-02-10',
        time: '6:30 PM'
    },
    {
        image: '/images/event3.png',
        title: 'Design Thinking Workshop',
        slug: 'design-thinking-workshop',
        location: 'Berlin, Germany',
        date: '2025-03-05',
        time: '2:00 PM'
    },
    {
        image: '/images/event4.png',
        title: 'AI & Machine Learning Summit',
        slug: 'ai-ml-summit',
        location: 'London, UK',
        date: '2025-04-20',
        time: '9:00 AM'
    },
    {
        image: '/images/event5.png',
        title: 'Frontend Developer Meetup',
        slug: 'frontend-meetup',
        location: 'Cairo, Egypt',
        date: '2025-05-12',
        time: '5:00 PM'
    },
    {
        image: '/images/event6.png',
        title: 'Blockchain Expo',
        slug: 'blockchain-expo',
        location: 'Dubai, UAE',
        date: '2025-06-18',
        time: '11:00 AM'
    }
];