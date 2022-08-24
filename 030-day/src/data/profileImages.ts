export interface ProfileImagesProps {
  name: string;
  job: string;
  avatar_url: string;
  bio: string;
  social_medias: {
    reddit: string,
    twitter: string,
    instagram: string,
  };
}



export const profileImages: ProfileImagesProps[] = [
  {
    name: 'Sue Shei',
    job: 'Founder',
    avatar_url: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, est?',
    social_medias: {
      reddit: 'https://www.reddit.com/',
      twitter: 'https://twitter.com/login?lang=pt',
      instagram: 'https://www.instagram.com/'
    }
  },
  {
    name: 'Will Barrow',
    job: 'Web Designer',
    avatar_url: 'https://media.istockphoto.com/photos/studio-portrait-of-attractive-20-year-old-bearded-man-picture-id1351147752?b=1&k=20&m=1351147752&s=170667a&w=0&h=txEdYegsKceJkltlTnz0hVdaX6wjlDL_vWAjEC_a6Ys=',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, est?',
    social_medias: {
      reddit: 'https://www.reddit.com/',
      twitter: 'https://twitter.com/login?lang=pt',
      instagram: 'https://www.instagram.com/'
    }
  },
  {
    name: 'Indigo Violet',
    job: 'Public Relations',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, est?',
    social_medias: {
      reddit: 'https://www.reddit.com/',
      twitter: 'https://twitter.com/login?lang=pt',
      instagram: 'https://www.instagram.com/'
    }
  },
]
