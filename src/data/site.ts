export type ProjectFailureStory = {
  /** 1) What you were trying to do (context) */
  intent: string[];
  /** 2) What didn’t go as well as you hoped */
  gap: string[];
  /** 3) What you learned and what you do differently */
  learning: string[];
};

export type ProjectSoarStory = {
  situation: string[];
  obstacle: string[];
  action: string[];
  result: string[];
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  timeframe: string;
  excerpt: string;
  tags: string[];
  context: string[];
  approach: string[];
  outcome: string[];
  reflection: string[];
  links?: { label: string; href: string }[];
  /** Situation, Obstacle, Action, Result interview story (optional) */
  soar?: ProjectSoarStory;
  /** ACM Interview-style failure narrative (optional) */
  failureStory?: ProjectFailureStory;
};

export const person = {
  name: "Carter",
  college: "University of St. Thomas",
  program: "B.S. Computer Science",
  interests: ["startups", "lifting", "pickleball"],
  hireMe:
    "Why you should hire me: I have software engineering experience from two Meta internships, startup experience from building and pitching a company that raised six figures."

};

export const technicalSkills = [
  "GraphQL",
  "Relay",
  "ML",
  "Pagination",
  "TypeScript",
  "React",
  "Node.js",
  "SQL",
  "Git",
  "REST APIs",

];

export const professionalSkills = [
  "Written specs and documentation",
  "Code review and pairing",
  "Running short retros",
  "Stakeholder check-ins",
  "Presentations",
];

export const projects: Project[] = [
  {
    slug: "cisc480-capstone",
    title: "CISC 480 capstone: sustainability games",
    role: "Software engineer, team capstone",
    timeframe: "Spring 2026",
    excerpt:
      "For our team capstone, we built a public site for the St. Thomas Office of Sustainability. You can play three short games: sort campus trash, organize a fridge for food safety, and follow a day-in-the-life story about everyday choices. Four of us split the work. I helped turn the separate pieces into one site the office could send to students.",
    tags: [
      "environmental education",
      "Vite",
      "static hosting",
      "client delivery",
      "team project",
    ],
    context: [
      "The sustainability office did not want another PowerPoint students would forget five minutes later. They wanted quick games that helped students remember what goes in each bin, how to store food safely, and how small daily choices add up.",
      "We needed to give them something real: three games, a landing page, and About copy under one URL. Staff should not have to send around a bunch of separate demos.",
    ],
    approach: [
      "We built a hub page with our branding, links to Trash Sort, Fridge Sort, and Day in the Life, plus an About page that says the goal plainly: teach, keep people safe, keep it fun, and leave room for feedback.",
      "Each game lived in its own part of the repo because we worked in parallel. Two games used Vite. Trash Sort already existed as a static bundle. When we shipped, a Node script copied every build into one deploy folder. That kept the tested version and the uploaded version in the same place.",
      "The script felt annoying when we merged late, but it helped. When something broke, we usually found a wrong path or a missing asset instead of a random production-only problem.",
    ],
    outcome: [
      "We shipped one static site with all three games linked, plus a GitHub repo the office can clone or hand off without needing us forever.",
      "They can install, build the pieces, run the packager once, and upload one folder. No secret manual steps.",
    ],
    reflection: [
      "The games mattered, but the framing mattered too. If the landing page sounded stiff, students would click away. This project reminded me that sponsor work is not only code. The words and layout help decide whether the project works.",
    ],
    soar: {
      situation: [
        "For CISC 480, our team worked with the St. Thomas Office of Sustainability to make a public site with three short environmental education games. We needed more than working code. We needed one clean place the office could send students.",
      ],
      obstacle: [
        "Coordination caused the hardest problems. Each game had its own code, assets, and timeline, so everyone could stay busy while the final product still felt unfinished. Near the end, broken paths, sponsor copy, and shared styling became real blockers.",
      ],
      action: [
        "I helped turn the separate pieces into one deployable site. I worked on the hub, the shared structure, and the packaging flow so the games lived under one link instead of feeling like three random class demos.",
      ],
      result: [
        "We finished with a static site the office can keep using, plus a repo that explains how to build and deploy it. I also learned this: you cannot save integration for the last week. You have to plan it from the start.",
      ],
    },
    failureStory: {
      intent: [
        "Get three working games, a hub, and real copy to the Office of Sustainability before the semester ended. They needed one build they could host after we walked away.",
        "Everyone owned a game, but we still needed one URL, one shared look, and a deploy process that did not depend on four people remembering the same steps.",
      ],
      gap: [
        "For too long, we treated the first half of the term like \"everyone go build your thing\" and assumed the second half would handle integration, sponsor review, and the packaging script. It did not. Merge work and copy edits got crammed into the last two weeks.",
        "That led to late nights fixing broken links and assets. Accessibility got less attention than we planned. One person waited on merged art while someone else still changed gameplay. The problem was messy coordination, not messy people.",
      ],
      learning: [
        "The slip did not happen because we could not code. We just failed to put integration on the calendar like real work.",
        "Now I would force early slices through the shared deploy folder, keep a simple merge budget next to the feature list, and send sponsor-facing text before it feels urgent. That protects stability from last-minute polish.",
      ],
    },
    links: [{ label: "GitHub: sp26-sust-init", href: "https://github.com/cartervanharen/sp26-sust-init" }],
  },
  {
    slug: "interstellar-film-analysis",
    title: "Time Made Unfamiliar: Music and Temporal Perception in Interstellar",
    role: "Student author, film class",
    timeframe: "Film studies course",
    excerpt:
      "For a film class, I wrote about how Hans Zimmer's Interstellar score changes how you feel time. I used Freud's idea of the uncanny and looked closely at ticking sounds, repetition, organ textures, and harmonic buildup. I wanted to explain how the movie makes relativity feel emotional, not just scientific.",
    tags: [
      "Film Analysis",
      "Psychology",
      "Music Theory",
      "Freud",
      "Psychoanalytic Theory",
      "Critical Writing",
      "Interdisciplinary Research",
      "Media Analysis",
    ],
    context: [
      "This paper started with a simple question: why does Interstellar make time feel so stressful? I looked at Zimmer's score through Freud's idea of the uncanny and focused on ticking rhythms, repetition, pipe organ sounds, and slow harmonic buildup.",
      "The paper connected film studies, psychology, and music analysis. It pushed me to write with a clear thesis instead of just saying, \"this scene feels intense.\"",
    ],
    approach: [
      "I built the argument around Freud's concept of the uncanny: something familiar that starts to feel strange. Then I showed how the score creates that feeling through unresolved repetition, huge organ textures, and musical momentum that keeps building.",
      "I broke down specific devices Zimmer uses, including ticking figures, ostinato, organ registration, and long harmonic climbs. I tied each one back to scenes where the film asks you to sit with time dilation, isolation, or scale.",
      "If I turned this into a slide deck, I would use a still from Miller's planet, the docking sequence, a soundtrack waveform, organ reference images, and a simple timeline. That would help the analysis land visually, not just through prose.",
    ],
    outcome: [
      "I finished with a paper that moved clearly from theory to sound to interpretation. It explained not just what happens on screen, but why the movie lands the way it does.",
      "It made me better at defending claims with evidence, especially when the audience is not reading code or technical docs.",
    ],
    reflection: [
      "I like this project because it shows a different side of how I think. It is still structured and evidence-based, but instead of debugging code, I explained a feeling without getting vague.",
    ],
    soar: {
      situation: [
        "In a film studies course, I wrote about how Hans Zimmer's music in Interstellar changes how you feel time. I connected film analysis, psychology, and music instead of writing a basic plot summary.",
      ],
      obstacle: [
        "The challenge was making the argument specific. I could not just say the music feels intense or emotional. I had to explain why it feels that way using evidence from the score and the movie.",
      ],
      action: [
        "I used Freud's idea of the uncanny as my main lens. Then I looked closely at ticking rhythms, repetition, organ sounds, and long harmonic buildups. I tied those details back to scenes about isolation, time dilation, and scale.",
      ],
      result: [
        "The final paper became a clear argument about how sound shapes meaning. It also gave me a useful interview story because it shows you I can communicate across disciplines, not just write code.",
      ],
    },
  },
  {
    slug: "feminist-biblical-criticism",
    title: "Feminist Biblical Criticism and Intersectional Interpretation",
    role: "Student author",
    timeframe: "Coursework (feminist biblical criticism)",
    excerpt:
      "Coursework on feminist biblical criticism and gender theory. I studied how social, political, and cultural context changes how people interpret religious texts, especially around intersectionality, representation, power, and inequality.",
    tags: [
      "Feminist Theory",
      "Gender Studies",
      "Theology",
      "Ethics",
      "Intersectionality",
      "Critical Analysis",
      "Sociology",
      "Communication",
    ],
    context: [
      "In this class, I studied how people read historical religious texts through different social, political, and cultural lenses. Most of the work came back to intersectionality, gender representation, power, and inequality.",
      "This sat outside my CS major, but it still changed how I think. It made me read carefully, listen to views I did not automatically agree with, and explain complicated social issues without flattening them.",
    ],
    approach: [
      "The class used specific frameworks, including waves of feminism, feminist theory, feminist psychology, Kimberle Crenshaw's work on intersectionality, womanist criticism, and feminist biblical criticism.",
      "I focused on direct questions. Who gets centered in a text? Who gets pushed aside? How does interpretation reflect bigger social systems? The writing forced me to use evidence and stay fair when sources disagreed.",
      "Class discussions gave me practice in arguing well: make a claim, listen when someone pushes back, and get more precise instead of getting defensive.",
    ],
    outcome: [
      "I wrote analysis and discussion posts that treated scripture and interpretation as complicated instead of turning them into slogans.",
      "It also helped me separate description from prescription. First ask what a text does in context. Then ask what people should do with it now. That habit carries over to specs and stakeholder conversations.",
    ],
    reflection: [
      "This class gave me practice with critical thinking and communication on material where the stakes are real for people.",
      "Next to my engineering work, it shows you I can reason across disciplines, sit with disagreement, and think about power and ethics in systems, not only correctness and performance.",
    ],
  },
  {
    slug: "spectersight",
    title: "SpecterSight",
    role: "Creator",
    timeframe: "Independent project",
    excerpt:
      "A mobile-style scanning app built around the device camera. You open the camera, capture a frame, process it, review it, then save or delete it. I focused on making the capture flow clear and reliable.",
    tags: [
      "camera capture",
      "image pipeline",
      "TypeScript",
      "React",
      "UX",
    ],
    context: [
      "The goal was to build a real scanning flow, not just a gallery with a camera button. You should be able to capture, review, and save without losing track of what is happening.",
      "The hard parts were the real app details: permissions, orientation changes, weird lighting, and making sure the preview still made sense on different screens.",
    ],
    approach: [
      "I split the flow into clear stages: preview, capture, process, and review. That made the state easier to understand and made bugs less random.",
      "I focused on responsiveness first. Then I tested rough cases like motion blur and low light so the app worked beyond perfect demo conditions.",
    ],
    outcome: [
      "I ended with a repeatable capture-to-review workflow and a better understanding of the camera issues that usually stay hidden until late in a project.",
    ],
    reflection: [
      "Scanning apps look simple until permissions, orientation, and preview sizing all disagree. Building the flow in stages made those edge cases much easier to debug.",
    ],
  },
  {
    slug: "doggr",
    title: "Doggr",
    role: "Sole Creator",
    timeframe: "Independent project",
    excerpt:
      "Doggr is a social platform idea for dog owners. You can create profiles, discover nearby dogs, match, and chat. I built it with React, Material UI, Node.js APIs, Supabase for Postgres and auth, a Flask service for ML work, Position Stack for geocoding, and ImgBB for uploads. Keywords: React, Supabase, Node.js, machine learning, geolocation, authentication.",
    tags: [
      "React",
      "Supabase",
      "Node.js",
      "machine learning",
      "geolocation",
      "authentication",
    ],
    context: [
      "Doggr started from a simple product idea: dog owners should be able to find nearby dogs that fit their schedule and temperament, not just breed labels.",
    ],
    approach: [
      "I split the system into a React client, a Node.js API layer, Supabase for relational data and auth, and Flask where the machine learning work made more sense in Python.",
      "I added geocoded addresses, distance logic, image uploads, and a matchmaking pipeline so the demo felt like a real product instead of a static mockup.",
    ],
    outcome: [
      "The repo has an architecture summary and three video demos for overview, discovery, and chat. It is not a finished company, but it shows you I can take a product idea and build across the full stack.",
    ],
    reflection: [
      "Building Doggr taught me that the product story matters as much as the stack. Perfect ML does not matter much if the user flow is confusing, so the demos tested whether the idea made sense.",
    ],
    links: [{ label: "Doggr on GitHub", href: "https://github.com/cartervanharen/Doggr" }],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
