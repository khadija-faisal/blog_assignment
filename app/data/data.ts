interface BlogData {
  id?: number;
  image: string;
  catogeries: {
    profession: string;
    date: string;
  };
  title: string;
  description: string;
}

const blogData: BlogData[] = [
  {
    id: 1,
    image: "/images/blog1.svg",
    catogeries: {
      profession: "travel",
      date: "13-march-2023",
    },
    title: "Train Or Bus Journey? Which one suits?",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
  },
  {
    id: 2,
    image: "/images/blog2.svg",
    catogeries: {
      profession: "DEVELOPMENT",
      date: "11-march-2023",
    },
    title: "Best Website to research for your  next project",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
  },
  {
    id: 3,
    image: "/images/blog3.svg",
    catogeries: {
      profession: "Sports",
      date: "10-march-2023",
    },
    title: "How to Be a Dancer in 2023 with proper skills?",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
  },
  {
    id: 4,
    image: "/images/blog4.svg",
    catogeries: {
      profession: "Singing",
      date: "9-march-2023",
    },
    title: "Who is the best singer on chart? Know him?",
    description:
      "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and ",
  },
  {
    id: 5,
    image: "/images/blog5.svg",
    catogeries: {
      profession: "development",
      date: "8-march-2023",
    },
    title: "How to start export import business from home?",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
  },
  {
    id: 6,
    image: "/images/blog6.svg",
    catogeries: {
      profession: "food",
      date: "10-march-2023",
    },
    title: "Make some drinks with chocolates chocolates and milk",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
  },
  {
    id: 7,
    image: "/images/blog7.svg",
    catogeries: {
      profession: "Develoment",
      date: "10-march-2023",
    },
    title: "8 Rules of Travelling In Sea You Need To Know",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
  },
  {
    id: 8,
    image: "/images/blog8.svg",
    catogeries: {
      profession: "travel",
      date: "10-march-2023",
    },
    title: "How to build strong portfolio and get a Job in UI/UX",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
  },
  {
    id: 9,
    image: "/images/blog9.svg",
    catogeries: {
      profession: "sport",
      date: "10-march-2023",
    },
    title: "How to Be a Professional Footballer in 2023",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
  },
];

export default blogData;
