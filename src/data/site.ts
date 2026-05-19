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
    "You should hire me because I bring a mix that is hard to fake: real software engineering reps from two Meta internships, startup experience from building and pitching a company that raised six figures, and the communication skills to explain messy ideas clearly. I like building things, but I also care about whether people actually understand and use them."

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
      "For our team capstone, we built a small public site for the St. Thomas Office of Sustainability. It links three short games: sorting campus trash, organizing a fridge for food safety, and a \"day in the life\" story about everyday choices. Four of us split the work, and my big focus was helping the separate pieces feel like one site the office could actually send to students.",
    tags: [
      "environmental education",
      "Vite",
      "static hosting",
      "client delivery",
      "team project",
    ],
    context: [
      "The sustainability office did not want another PowerPoint that students would forget five minutes later. They wanted quick, playable activities that made habits easier to remember: what goes in which bin, how to store food safely, and how small daily choices add up.",
      "Our job was to give them something real: three games, a landing page, and About copy, all under one URL so staff were not stuck sending around a bunch of separate demos.",
    ],
    approach: [
      "We put up a hub page with our branding, links into Trash Sort, Fridge Sort, and Day in the Life, plus an About page that says plainly what we're trying to do (teach, keep people safe, keep it fun, leave room for feedback).",
      "Each game lived in its own corner of the repo because we were working in parallel. Two of them are regular Vite apps, and the trash sort piece was already a static bundle. When it was time to ship, we ran a Node script after the builds that copies everything into one deploy folder. That way \"what we tested\" and \"what we upload\" are the same tree, not three separate sites we hope line up.",
      "Having one script as the source of truth was annoying when we merged late, but it helped: when something broke, it was usually a wrong path or a missing asset, not \"mystery prod only.\"",
    ],
    outcome: [
      "One static site with all three games linked, plus a GitHub repo the office can clone or hand off without us being in the loop forever.",
      "They can run install, build the pieces, run the packager once, and upload a single folder. No secret manual steps.",
    ],
    reflection: [
      "The games mattered, but the framing mattered too. If the landing page sounded stiff, students would probably click away. This project reminded me that sponsor-facing work is not only code; the words and layout are part of whether the project works.",
    ],
    soar: {
      situation: [
        "For CISC 480, our team worked with the St. Thomas Office of Sustainability to make a public site with three small environmental education games. The goal was not just to get code running. We needed one clean place the office could confidently send students.",
      ],
      obstacle: [
        "The hard part was coordination. Each game had its own code, assets, and timeline, so it was easy for everyone to be busy but still not have one finished product. Near the end, little things like broken paths, sponsor copy, and shared styling became real blockers.",
      ],
      action: [
        "My contribution was helping turn the separate pieces into one deployable site. I worked on the hub, the shared structure, and the packaging flow so the games could live under one link instead of feeling like three random class demos.",
      ],
      result: [
        "We ended with a static site the office can keep using, plus a repo that explains how to build and deploy it. I also learned that integration is not something you save for the last week. It has to be part of the plan from the start.",
      ],
    },
    failureStory: {
      intent: [
        "Get three working games plus a hub and real copy to the Office of Sustainability before the semester ended, in one build they could host after we walked away.",
        "Everyone owned a game, but we still needed one URL, shared look and feel, and a deploy story that didn't depend on four people remembering the same ritual.",
      ],
      gap: [
        "For a long time we acted like the first half of the term was \"everyone go build your thing\" and the second half would magically handle glue work, sponsor review, and the packaging script. It didn't. Merge and copy edits got crammed into the last two weeks.",
        "So we had late nights fixing broken links and assets, accessibility got less love than we told ourselves we'd give it, and one person was blocked on merged art while someone else was still changing gameplay. Messy coordination, not messy people.",
      ],
      learning: [
        "The slip wasn't because we couldn't code. We just didn't put integration on the calendar like it was real work.",
        "Now I'd force early slices that already go through the shared deploy folder, keep a stupid-simple \"merge budget\" next to the feature list, and get sponsor-facing text in front of them a week before it feels urgent so we're not trading stability for last-minute polish.",
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
      "For a film class, I wrote about how Hans Zimmer's soundtrack in Interstellar changes the way the audience feels time. I used Freud's idea of the uncanny and looked closely at ticking sounds, repetition, organ textures, and harmonic buildup. The point was to explain how the movie makes relativity feel emotional instead of just scientific.",
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
      "This was an interdisciplinary paper, but it started with a simple question: why does Interstellar make time feel so stressful? I looked at Zimmer's score through Freud's idea of the uncanny and paid attention to ticking rhythms, repetition, pipe organ sounds, and slow harmonic buildup.",
      "It connected film studies, psychology, and music analysis. It also pushed me to write with a clear thesis instead of just saying, \"this scene feels intense.\"",
    ],
    approach: [
      "I built the argument around Freud's concept of the uncanny: something familiar that starts to feel strange. From there, I looked at how the score creates that feeling through unresolved repetition, huge organ textures, and musical momentum that keeps building.",
      "I broke down concrete devices Zimmer uses (ticking figures, ostinato, organ registration, long harmonic climbs) and tied each back to scenes where the film is asking you to sit with time dilation, isolation, or scale.",
      "If I were laying this out for a slide deck or appendix, I would use visuals like a still from Miller's planet, the docking sequence, a soundtrack waveform, organ reference imagery, and a simple timeline graphic so the analysis is not only prose.",
    ],
    outcome: [
      "I finished with a paper that had a real through-line from theory to sound to interpretation. It was not just about what happens on screen, but why the movie lands the way it does.",
      "It made me better at defending claims with evidence, especially for an audience that is not reading code or technical docs.",
    ],
    reflection: [
      "I like this project because it shows a different side of how I think. It is still structured and evidence-based, but instead of debugging code, I was trying to explain a feeling without being vague.",
    ],
    soar: {
      situation: [
        "In a film studies course, I wrote about how Hans Zimmer's music in Interstellar changes how the audience feels time. I was trying to connect film analysis, psychology, and music instead of writing a basic plot summary.",
      ],
      obstacle: [
        "The challenge was making the argument specific. It would have been easy to just say the music feels intense or emotional. I had to explain why it felt that way using actual evidence from the score and the movie.",
      ],
      action: [
        "I used Freud's idea of the uncanny as my main lens, then looked closely at ticking rhythms, repetition, organ sounds, and long harmonic buildups. I tied those details back to scenes about isolation, time dilation, and scale.",
      ],
      result: [
        "The final paper became a clearer argument about how sound shapes meaning. It also gave me a useful interview story because it shows I can communicate across disciplines, not just write code.",
      ],
    },
  },
  {
    slug: "feminist-biblical-criticism",
    title: "Feminist Biblical Criticism and Intersectional Interpretation",
    role: "Student author",
    timeframe: "Coursework (feminist biblical criticism)",
    excerpt:
      "Coursework on feminist biblical criticism and gender theory. I studied how religious texts get interpreted differently depending on social, political, and cultural context, especially around intersectionality, representation, power, and inequality.",
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
      "In this class, I looked at how historical religious texts have been read through different social, political, and cultural lenses. A lot of the work came back to intersectionality, gender representation, power, and inequality.",
      "This was outside my CS major, but it still mattered for how I think. It made me practice reading carefully, listening to views I did not automatically agree with, and explaining complicated social issues without flattening them.",
    ],
    approach: [
      "The class used specific frameworks, including waves of feminism, feminist theory, feminist psychology, Kimberle Crenshaw's work on intersectionality, womanist criticism, and feminist biblical criticism.",
      "I focused on questions like who gets centered in a text, who gets pushed to the side, and how interpretation can reflect bigger social systems. The writing forced me to use evidence and still be fair when sources disagreed.",
      "Class discussions were basically practice in arguing well: making a claim, listening when someone pushed back, and getting more precise instead of getting defensive.",
    ],
    outcome: [
      "I ended up with written analysis and discussion posts that treated scripture and interpretation as complicated instead of turning them into slogans.",
      "It also helped me separate description from prescription: first ask what a text is doing in context, then ask what people should do with it now. That habit carries over surprisingly well to specs and stakeholder conversations.",
    ],
    reflection: [
      "This class gave me practice with critical thinking and communication on material where the stakes are real for people.",
      "Next to my engineering work, it shows that I can reason across disciplines, sit with disagreement, and think about power and ethics in systems, not only correctness and performance.",
    ],
  },
  {
    slug: "spectersight",
    title: "SpecterSight",
    role: "Creator",
    timeframe: "Independent project",
    excerpt:
      "A mobile-style scanning app built around the device camera. The basic flow is: open the camera, capture a frame, process it, review it, then save or throw it out. I cared most about making the capture flow feel clear and not fragile.",
    tags: [
      "camera capture",
      "image pipeline",
      "TypeScript",
      "React",
      "UX",
    ],
    context: [
      "The goal was to build an actual scanning flow, not just a gallery with a camera button. A user should be able to capture, review, and save without losing track of what is happening.",
      "The annoying parts were the real app details: permissions, orientation changes, weird lighting, and making sure the preview still made sense on different screens.",
    ],
    approach: [
      "I split the flow into clear stages: preview, capture, process, and review. That made the state easier to reason about and made bugs less random.",
      "I focused on responsiveness first, then tested rough cases like motion blur and low light so the app did not only work in perfect demo conditions.",
    ],
    outcome: [
      "I ended with a repeatable capture-to-review workflow and a better understanding of the camera issues that usually get hidden until late in a project.",
    ],
    reflection: [
      "Scanning apps look simple until permissions, orientation, and preview sizing all disagree. Building the flow in stages made those edge cases way easier to debug.",
    ],
  },
  {
    slug: "doggr",
    title: "Doggr",
    role: "Sole Creator",
    timeframe: "Independent project",
    excerpt:
      "Doggr is a social platform idea for dog owners: profiles, local discovery, matching, and chat. I built it with React, Material UI, Node.js APIs, Supabase for Postgres and auth, a Flask service for ML work, Position Stack for geocoding, and ImgBB for uploads. Keywords: React, Supabase, Node.js, machine learning, geolocation, authentication.",
    tags: [
      "React",
      "Supabase",
      "Node.js",
      "machine learning",
      "geolocation",
      "authentication",
    ],
    context: [
      "Doggr started from a simple product idea: dog owners should be able to find nearby dogs that actually fit their schedule and temperament, not just breed labels.",
    ],
    approach: [
      "I split the system into a React client, a Node.js API layer, Supabase for relational data and auth, and Flask where the machine learning work made more sense in Python.",
      "I added geocoded addresses, distance logic, image uploads, and a matchmaking pipeline so the demo felt like an actual product instead of a static mockup.",
    ],
    outcome: [
      "The repo has an architecture summary and three video demos for overview, discovery, and chat. It is not a finished company, but it shows I can take a product idea and build across the full stack.",
    ],
    reflection: [
      "Building Doggr taught me that the product story matters as much as the stack. Perfect ML does not mean much if the user flow is confusing, so the demos became the test for whether the idea actually made sense.",
    ],
    links: [{ label: "Doggr on GitHub", href: "https://github.com/cartervanharen/Doggr" }],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
