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
      { label: "html/css", type: "front-end", value: 90 },
      { label: "javascript", type: "front-end", value: 85 },
      { label: "react", type: "front-end", value: 80 },
      { label: "node.js", type: "back-end", value: 65 },
      { label: "algorithms", type: "back-end", value: 70 },
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
      { label: "html/css", type: "front-end", value: 95 },
      { label: "javascript", type: "front-end", value: 90 },
      { label: "react", type: "front-end", value: 88 },
      { label: "node.js", type: "back-end", value: 40 },
      { label: "algorithms", type: "back-end", value: 60 },
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
      { label: "html/css", type: "front-end", value: 60 },
      { label: "javascript", type: "front-end", value: 75 },
      { label: "react", type: "front-end", value: 50 },
      { label: "node.js", type: "back-end", value: 92 },
      { label: "algorithms", type: "back-end", value: 85 },
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
      { label: "html/css", type: "front-end", value: 85 },
      { label: "javascript", type: "front-end", value: 80 },
      { label: "react", type: "front-end", value: 75 },
      { label: "node.js", type: "back-end", value: 78 },
      { label: "algorithms", type: "back-end", value: 80 },
    ],
  },
  {
    id: 5,
    imageUrl: "https://i.pravatar.cc/600?img=53",
    firstname: "Alex",
    lastname: "Moretti",
    birthDate: "2002-07-30",
    gender: "unknown",
    skills: [
      { label: "html/css", type: "front-end", value: 70 },
      { label: "javascript", type: "front-end", value: 82 },
      { label: "react", type: "front-end", value: 65 },
      { label: "node.js", type: "back-end", value: 70 },
      { label: "algorithms", type: "back-end", value: 90 },
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
      { label: "html/css", type: "front-end", value: 75 },
      { label: "javascript", type: "front-end", value: 70 },
      { label: "react", type: "front-end", value: 60 },
      { label: "node.js", type: "back-end", value: 88 },
      { label: "algorithms", type: "back-end", value: 82 },
    ],
  },
];

export type { Dev };
export { developers }