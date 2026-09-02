/**
 * Single source of truth for portfolio content.
 * Add new entries here — every page reads from these arrays, so the site
 * grows without touching any component.
 */

export const profile = {
  name: "Raed Rahman",
  title: "CSE Undergraduate",
  university: "Islamic University of Technology (IUT), Gazipur",
  department: "Computer Science and Engineering",
  semester: "4th Semester (ongoing)",
  bio: [
    "I'm a Computer Science and Engineering student at the Islamic University of Technology in Gazipur, currently nearing the end of my 4th semester.",
    "My main interests are: Game Development, Machine Learning, Microprocessors",
    "I am also interested in Graphics Design.",
  ],
};

/** Contact links. */
export const contacts = [
  { label: "Email", value: "raedrahman2016@gmail.com", href: "mailto:raedrahman2016@gmail.com" },
  {
    label: "GitHub",
    value: "github.com/ClydeArrownyVI",
    href: "https://github.com/ClydeArrownyVI",
  },
  { label: "LinkedIn", value: "—", href: null },
  { label: "Location", value: "Dhaka, Bangladesh", href: null },
];

export const interests = [
  {
    name: "Game Development",
    status: "Active",
    blurb: "Learning Godot and building small gameplay prototypes.",
  },
  {
    name: "Machine Learning",
    status: "Learning",
    blurb: "Working toward ML from the maths and statistics side of my coursework.",
  },
  {
    name: "Microprocessors",
    status: "Interested",
    blurb: "Digital logic, computer architecture and low-level machine design.",
  },
  {
    name: "Graphics Design",
    status: "Interested",
    blurb: "Visual design and pixel-art driven aesthetics.",
  },
];

export const skills = [
  { group: "Languages", items: ["C++", "C", "Python", "Java"] },
  { group: "Engines", items: ["Godot"] },
  { group: "Tools", items: ["VS Code", "Eclipse", "Git"] },
];

export type Project = {
  slug: string;
  title: string;
  kind: "Academic" | "Personal";
  year: string;
  stack: string[];
  summary: string;
  details: string[];
  status: "Complete" | "In progress" | "Prototype";
};

export const projects: Project[] = [
  {
    slug: "plague-two-player",
    title: "Plague Inc. Inspired Two-Player Game",
    kind: "Academic",
    year: "2025",
    stack: ["C", "raylib"],
    summary:
      "A two-player game written in C with raylib: one player spreads an infection, the other tries to cure it.",
    details: [
      "One player plays the infector, the other plays the curer.",
      "Disease spread driven by a mathematical model.",
      "Built in C using the raylib library.",
    ],
    status: "Complete",
  },
  {
    slug: "java-horror-game",
    title: "Horror Game in Java",
    kind: "Academic",
    year: "2025",
    stack: ["Java"],
    summary: "A horror game based on nyctophobia — the fear of darkness.",
    details: [
      "Themed around nyctophobia.",
      "The player explores dark, claustrophobic rooms.",
      "Written in Java.",
    ],
    status: "Complete",
  },
  {
    slug: "minecraft-computer",
    title: "Redstone Computer in Minecraft",
    kind: "Personal",
    year: "2024",
    stack: ["Digital Logic", "Redstone"],
    summary: "A very simple computer built inside Minecraft using redstone.",
    details: [
      "64 bytes of data memory and 256 bytes of instruction memory.",
      "16 bytes of registers.",
      "ALU supporting ADD, SUB and bitwise operations such as NOT.",
    ],
    status: "Complete",
  },
  {
    slug: "godot-practice",
    title: "Godot Practice Prototypes",
    kind: "Personal",
    year: "2026",
    stack: ["Godot", "GDScript"],
    summary: "Small prototypes made while learning Godot.",
    details: ["No shipped game yet — practising fundamentals."],
    status: "In progress",
  },
];


export type Semester = {
  name: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  courses: string[];
};

/** From the B.Sc. in CSE curriculum, IUT (2023-24 onwards). */
export const semesters: Semester[] = [
  {
    name: "Semester I",
    status: "Completed",
    courses: [
      "CSE 4105 — Computing for Engineers",
      "CSE 4107 — Structured Programming I",
      "Math 4141 — Geometry and Differential Calculus",
      "Phy 4141 — Physics I",
      "Hum 4145 — Islamiat",
      "Hum 4147 — Technology, Environment and Society",
    ],
  },
  {
    name: "Semester II",
    status: "Completed",
    courses: [
      "CSE 4203 — Discrete Mathematics",
      "CSE 4205 — Digital Logic Design",
      "Math 4241 — Integral Calculus and Differential Equations",
      "Phy 4241 — Physics II",
      "Chem 4241 — Chemistry",
      "Hum 4241 — Islamic History, Science and Culture",
    ],
  },
  {
    name: "Semester III",
    status: "Completed",
    courses: [
      "CSE 4301 — Object Oriented Programming",
      "CSE 4303 — Data Structures",
      "CSE 4305 — Computer Organization and Architecture",
      "CSE 4307 — Database Management Systems",
      "Math 4341 — Linear Algebra",
      "EEE 4383 — Electronic Devices and Circuits",
    ],
  },
  {
    name: "Semester IV",
    status: "Ongoing",
    courses: [
      "CSE 4403 — Algorithms",
      "CSE 4405 — Data and Telecommunications",
      "CSE 4407 — System Analysis and Design",
      "Math 4441 — Probability and Statistics",
      "EEE 4483 — Digital Electronics and Pulse Techniques",
      "Hum 4441 — Engineering Ethics",
    ],
  },

  {
    name: "Semester V",
    status: "Upcoming",
    courses: [
      "CSE 4501 — Operating Systems",
      "CSE 4503 — Microprocessor and Assembly Language",
      "CSE 4511 — Computer Networks",
      "CSE 4513 — Software Engineering and Object-Oriented Design",
      "Electives",
    ],
  },
];

/** Achievements, awards, research. Empty entries are simply not rendered. */
export const achievements = [
  {
    title: "B.Sc. in CSE — IUT",
    detail: "Progressing through the 2023-24 CSE curriculum; 4th semester ongoing.",
    year: "2024 — present",
  },
  {
    title: "Two-player simulation game",
    detail: "Designed and delivered as a university course project.",
    year: "2025",
  },
  {
    title: "Java horror game",
    detail: "Engine-less game built for coursework, rendering and logic written from scratch.",
    year: "2025",
  },
];
