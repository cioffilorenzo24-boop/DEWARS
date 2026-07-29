type SkillType = "front-end" | "back-end";
type Skill = {
  label: string;
  type: SkillType;
  value: number;
};

type Gender = "m" | "f" | "unknown";
type Dev = {
  id: number;
  imageUrl: string;
  firstname: string;
  lastname: string;
  birthDate: string;
  gender: Gender;
  skills: Skill[];
};

const developers: Dev[] = [
  {
    id: 1,
    imageUrl: "https://i.pravatar.cc/600?img=12",
    firstname: "Marco",
    lastname: "Rossi",
    birthDate: "1998-05-14",
    gender: "m",
    skills: [
      { label: "HTML/CSS", type: "front-end", value: 90 },
      { label: "JavaScript", type: "front-end", value: 85 },
      { label: "React", type: "front-end", value: 80 },
      { label: "Node.js", type: "back-end", value: 65 },
      { label: "Algorithms", type: "back-end", value: 70 },
    ],
  },
  {
    id: 2,
    imageUrl: "https://i.pravatar.cc/600?img=47",
    firstname: "Sofia",
    lastname: "Bianchi",
    birthDate: "2001-09-22",
    gender: "f",
    skills: [
      { label: "HTML/CSS", type: "front-end", value: 95 },
      { label: "JavaScript", type: "front-end", value: 90 },
      { label: "React", type: "front-end", value: 88 },
      { label: "Node.js", type: "back-end", value: 40 },
      { label: "Algorithms", type: "back-end", value: 60 },
    ],
  },
  {
    id: 3,
    imageUrl: "https://i.pravatar.cc/600?img=68",
    firstname: "Luca",
    lastname: "Verdi",
    birthDate: "1995-12-03",
    gender: "m",
    skills: [
      { label: "HTML/CSS", type: "front-end", value: 60 },
      { label: "JavaScript", type: "front-end", value: 75 },
      { label: "React", type: "front-end", value: 50 },
      { label: "Node.js", type: "back-end", value: 92 },
      { label: "Algorithms", type: "back-end", value: 85 },
    ],
  },
  {
    id: 4,
    imageUrl: "https://i.pravatar.cc/600?img=32",
    firstname: "Elena",
    lastname: "Ferrari",
    birthDate: "1999-03-18",
    gender: "f",
    skills: [
      { label: "HTML/CSS", type: "front-end", value: 85 },
      { label: "JavaScript", type: "front-end", value: 80 },
      { label: "React", type: "front-end", value: 75 },
      { label: "Node.js", type: "back-end", value: 78 },
      { label: "Algorithms", type: "back-end", value: 80 },
    ],
  },
  {
    id: 5,
    imageUrl: "https://i.pravatar.cc/600?img=54",
    firstname: "Alex",
    lastname: "Moretti",
    birthDate: "2002-07-30",
    gender: "m",
    skills: [
      { label: "HTML/CSS", type: "front-end", value: 70 },
      { label: "JavaScript", type: "front-end", value: 82 },
      { label: "React", type: "front-end", value: 65 },
      { label: "Node.js", type: "back-end", value: 70 },
      { label: "Algorithms", type: "back-end", value: 90 },
    ],
  },
  {
    id: 6,
    imageUrl: "https://i.pravatar.cc/600?img=11",
    firstname: "Matteo",
    lastname: "Romano",
    birthDate: "1997-11-05",
    gender: "m",
    skills: [
      { label: "HTML/CSS", type: "front-end", value: 75 },
      { label: "JavaScript", type: "front-end", value: 70 },
      { label: "React", type: "front-end", value: 60 },
      { label: "Node.js", type: "back-end", value: 88 },
      { label: "Algorithms", type: "back-end", value: 82 },
    ],
  },
];

export type { Dev, Skill };
export { developers };
