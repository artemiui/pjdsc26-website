export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  phase: "registration" | "proposal" | "development" | "finals";
  highlight?: boolean;
}

export interface CompetitionMilestone {
  id: string;
  name: string;
  shortName: string;
  prefix: string;
  targetDate: string;
  phase: "registration" | "proposal" | "development" | "finals";
  badge: string;
  dateDisplay: string;
  info: string;
}

export interface CriteriaItem {
  category: string;
  weight?: string;
  description: string;
  points: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "eligibility" | "teams" | "technical" | "event";
}

export interface SponsorTier {
  name: string;
  tagline: string;
  contribution?: string;
  slots: { name: string; logo?: string; status: "finalizing" | "confirmed" }[];
  benefits: string[];
}

export const siteData = {
  event: {
    title: "Philippine Junior Data Science Challenge 2026",
    shortTitle: "PJDSC '26",
    year: "2026",
    edition: "6th Iteration",
    organizer: "UP Data Science Society",
    organizerShort: "UP DSSoc",
    theme: "Trace the Pattern, Target the Cure: Advancing Public Health Through Data Science",
    subTheme: "Public Health Analytics",
    challengeStatement:
      "Communities across the Philippines face complex public health challenges that require timely, effective, and accessible solutions. From monitoring disease outbreaks and predicting health risks to improving healthcare delivery and resource distribution, data plays an increasingly vital role. How can data analytics and innovative computational approaches be leveraged to develop practical solutions that improve disease prevention, support early intervention, strengthen healthcare systems, and promote healthier communities?",
    registrationLink: "https://tinyurl.com/pjdsc2026earlybird",
    proposalTemplateLink: "https://bit.ly/pjdsc2026pptemplate",
    proposalSubmissionLink: "http://bit.ly/pjdsc2026ConceptProposalSubmission",
    finalProjectSubmissionLink: "http://bit.ly/pjdsc2026FinalProjectSubmission",
    githubRepoLink: "https://github.com/UP-DSSoc/PJDSC-Datasets",
    facebookLink: "https://www.facebook.com/pjdsc.updssoc",
    contactEmail: "pjdsc.updssoc@gmail.com",
    maxTeams: 40,
    teamSize: "3 to 5 members",
    venue: "Metro Manila (Face-to-face Culminating Event) & Virtual Stages",
    registrationFeeEarly: "₱300.00 / pax",
    registrationFeeRegular: "₱350.00 / pax",
  },

  topics: [
    { title: "Disease Surveillance", desc: "Outbreak monitoring and early health warning signals" },
    { title: "Risk Prediction", desc: "Early detection algorithms and prognostic clinical risk scores" },
    { title: "Epidemiological Modeling", desc: "Transmission dynamics, R0 forecasting, and contagion waves" },
    { title: "Resource Optimization", desc: "Hospital bed capacity, medical supplies, and triage planning" },
    { title: "Healthcare Access", desc: "Geospatial mapping of underserved health facilities and clinics" },
    { title: "Community Assessment", desc: "Targeted public health interventions and vulnerable group analysis" },
    { title: "Environmental Health", desc: "Climate variables, air/water quality metrics, and vector risks" },
    { title: "Behavioral Health", desc: "Population lifestyle patterns, vaccination sentiment, and trend tracking" },
    { title: "Digital Health Systems", desc: "Web applications, mobile trackers, and clinical dashboards" },
    { title: "Decision Support", desc: "Evidence-based tools for LGUs, hospitals, and policymakers" },
  ],

  stats: [
    { value: "40", label: "Slots Available", sub: "Nationwide first-come basis" },
    { value: "3–5", label: "Team Members", sub: "SHS & Tertiary students" },
    { value: "4", label: "Regional Quotas", sub: "NCR, Luzon, Visayas, Mindanao" },
    { value: "₱30K+", label: "Prize Pool & Grants", sub: "Cash prizes, trophies & perks" },
  ],

  impactStats: [
    {
      title: "600+ participants",
      desc: "A nationwide community of aspiring data scientists and future innovators.",
    },
    {
      title: "30+ Universities",
      desc: "Bringing together students from leading universities across the Philippines.",
    },
    {
      title: "15+ Industry speakers",
      desc: "Experts from academia and industry sharing real-world insights and experience.",
    },
    {
      title: "15+ Judges",
      desc: "Distinguished professionals evaluating innovative, data-driven solutions.",
    },
    {
      title: "20+ partners",
      desc: "Organizations supporting student innovation through collaboration and sponsorship.",
    },
    {
      title: "150+ teams",
      desc: "Multidisciplinary teams developing impactful solutions to real-world challenges.",
    },
  ],

  pillars: [
    {
      num: "01",
      title: "Talks & Workshops",
      tag: "Skill Acquisition",
      desc: "Comprehensive learning sessions facilitated by leading bioinformatics and data science experts to build robust technical foundations.",
    },
    {
      num: "02",
      title: "Project-Based Elimination",
      tag: "Application",
      desc: "Teams conceptualize and build functional public health analytics prototypes—web apps, dashboards, models, or usable products.",
    },
    {
      num: "03",
      title: "Expert Mentorship",
      tag: "Advanced Refinement",
      desc: "The Top 10 advancing teams receive dedicated 1-on-1 mentorship with seasoned industry practitioners and academic researchers.",
    },
    {
      num: "04",
      title: "Face-to-Face Finals",
      tag: "Live Culmination",
      desc: "A high-stakes 10-minute live presentation and judge Q&A, complemented by an interactive demonstration station in Metro Manila.",
    },
  ],

  timeline: [
    {
      date: "September 21 – 25, 2026",
      title: "Early Registration Period",
      description:
        "Regional quota of 5 teams each for NCR, Luzon, Visayas, and Mindanao. Early bird fee of ₱300.00/pax. Opens at 5:00 PM Sept 21 and closes at 11:59 PM Sept 25.",
      phase: "registration",
      highlight: true,
    },
    {
      date: "September 28 – 30, 2026",
      title: "Regular Registration Period",
      description:
        "Open demographic registration on a first-come, first-served basis up to the 40-team cap. Starts 5:00 PM Sept 28 and ends 11:59 PM Sept 30. Regular fee of ₱350.00/pax.",
      phase: "registration",
    },
    {
      date: "October 10, 2026",
      title: "Official Event Launch",
      description:
        "Virtual launch ceremony, competition orientation, and release of challenge datasets. At least one team representative must attend.",
      phase: "proposal",
      highlight: true,
    },
    {
      date: "October 12, 2026",
      title: "Concept Proposal Deadline",
      description:
        "Submission of the written 5-page PDF concept proposal outlining the public health problem, methodology, and proposed solution architecture.",
      phase: "proposal",
    },
    {
      date: "October 17, 2026",
      title: "Project Development Workshop",
      description:
        "Hands-on workshop covering end-to-end data pipelines, predictive modeling in public health, and user-centered dashboard design.",
      phase: "development",
    },
    {
      date: "October 24, 2026",
      title: "Final Project Submission Deadline",
      description:
        "Submission of the complete package: 20-slide presentation deck (PDF), 3-minute video demo, and link to GitHub code repository.",
      phase: "development",
      highlight: true,
    },
    {
      date: "November 04, 2026",
      title: "Announcement of Top 10 Finalists",
      description:
        "Public announcement of the Top 10 qualifying teams via PJDSC official social channels and direct team correspondence.",
      phase: "finals",
    },
    {
      date: "November 07, 2026",
      title: "Advanced Workshop & Dedicated Mentorship",
      description:
        "Advanced technical masterclass followed by personalized 1-on-1 mentorship breakout sessions for each finalist team.",
      phase: "finals",
    },
    {
      date: "November 14, 2026",
      title: "Final Culminating Event & Pitching",
      description:
        "Grand Face-to-Face Finals in Metro Manila. 10-min stage presentation, 10-min judge Q&A, and interactive demo station exhibit.",
      phase: "finals",
      highlight: true,
    },
  ] as TimelineItem[],

  milestones: [
    {
      id: "early-reg-deadline",
      name: "Early Registration Deadline",
      shortName: "Early Registration",
      prefix: "Early Registration Closes In:",
      targetDate: "2026-09-25T23:59:59+08:00",
      phase: "registration",
      badge: "Early Bird",
      dateDisplay: "Sept 25, 2026 · 11:59 PM",
      info: "5 teams per region quota · ₱300/pax",
    },
    {
      id: "regular-reg-start",
      name: "Regular Registration Opens",
      shortName: "Regular Reg Opens",
      prefix: "Regular Registration Starts In:",
      targetDate: "2026-09-28T17:00:00+08:00",
      phase: "registration",
      badge: "Open Reg",
      dateDisplay: "Sept 28, 2026 · 5:00 PM",
      info: "Open demographic · ₱350/pax · First-come first-served",
    },
    {
      id: "regular-reg-deadline",
      name: "Regular Registration Deadline",
      shortName: "Regular Registration",
      prefix: "Regular Registration Closes In:",
      targetDate: "2026-09-30T23:59:59+08:00",
      phase: "registration",
      badge: "Final Call",
      dateDisplay: "Sept 30, 2026 · 11:59 PM",
      info: "Capped at 40 teams nationwide",
    },
    {
      id: "event-launch",
      name: "Official Event Launch",
      shortName: "Event Launch",
      prefix: "Official Event Launch In:",
      targetDate: "2026-10-10T10:00:00+08:00",
      phase: "proposal",
      badge: "Kickoff",
      dateDisplay: "Oct 10, 2026 · 10:00 AM",
      info: "Virtual Launch Ceremony & Challenge Dataset Release",
    },
    {
      id: "concept-proposal-deadline",
      name: "Concept Proposal Deadline",
      shortName: "Proposal Deadline",
      prefix: "Concept Proposal Due In:",
      targetDate: "2026-10-12T23:59:59+08:00",
      phase: "proposal",
      badge: "Deliverable",
      dateDisplay: "Oct 12, 2026 · 11:59 PM",
      info: "5-page PDF concept proposal submission",
    },
    {
      id: "dev-workshop",
      name: "Project Development Workshop",
      shortName: "Dev Workshop",
      prefix: "Project Dev Workshop In:",
      targetDate: "2026-10-17T09:00:00+08:00",
      phase: "development",
      badge: "Workshop",
      dateDisplay: "Oct 17, 2026 · 9:00 AM",
      info: "Data pipelines, predictive modeling & dashboard design",
    },
    {
      id: "final-submission-deadline",
      name: "Final Project Submission Deadline",
      shortName: "Final Submission",
      prefix: "Final Project Due In:",
      targetDate: "2026-10-24T23:59:59+08:00",
      phase: "development",
      badge: "Hard Deadline",
      dateDisplay: "Oct 24, 2026 · 11:59 PM",
      info: "20-slide PDF presentation deck, 3-min video demo & repo",
    },
    {
      id: "top-10-announcement",
      name: "Announcement of Top 10 Finalists",
      shortName: "Top 10 Reveal",
      prefix: "Top 10 Finalists Announced In:",
      targetDate: "2026-11-04T18:00:00+08:00",
      phase: "finals",
      badge: "Finalists",
      dateDisplay: "Nov 04, 2026 · 6:00 PM",
      info: "Top 10 qualifying teams revealed publicly",
    },
    {
      id: "mentorship-workshop",
      name: "Advanced Workshop & Dedicated Mentorship",
      shortName: "Mentorship",
      prefix: "Mentorship Workshop In:",
      targetDate: "2026-11-07T09:00:00+08:00",
      phase: "finals",
      badge: "Mentorship",
      dateDisplay: "Nov 07, 2026 · 9:00 AM",
      info: "Technical masterclass & 1-on-1 industry mentorship",
    },
    {
      id: "grand-finals",
      name: "Grand Face-to-Face Finals",
      shortName: "Grand Finals",
      prefix: "Grand Finals Begin In:",
      targetDate: "2026-11-14T08:00:00+08:00",
      phase: "finals",
      badge: "Championship",
      dateDisplay: "Nov 14, 2026 · 8:00 AM",
      info: "Metro Manila · Live Stage Pitch, Q&A & Demo Station",
    },
  ] as CompetitionMilestone[],

  stages: [
    {
      id: "concept",
      name: "Stage 1: Concept Proposal",
      date: "Oct 10 – 12, 2026",
      deliverable: "Max 5-Page PDF Proposal",
      summary:
        "Teams formulate an initial project concept that identifies a specific public health problem and outlines an innovative, data-driven methodology.",
      requirements: [
        "Maximum of five (5) pages excluding title page and references.",
        "Must detail: Background, Problem Statement, Objectives, Scope, and Methodology.",
        "Use official PJDSC proposal template.",
        "Eligible outputs include web applications, mobile apps, interactive dashboards, or any usable data product.",
        "At least one team member must attend the official event launch on Oct 10.",
      ],
    },
    {
      id: "development",
      name: "Stage 2: Project Development",
      date: "Oct 12 – 24, 2026",
      deliverable: "Slide Deck + 3-Min Video + Code Repo",
      summary:
        "Teams execute their proposed solutions, fine-tuning data pipelines, building models, and engineering front-end interfaces supported by workshops.",
      requirements: [
        "Slide deck strictly limited to a maximum of 20 slides (including title and appendices). Deductions apply for excess slides.",
        "Recorded video demo capped at exactly 3 minutes. Deductions apply for overtime.",
        "Clean, well-documented public GitHub repository with reproducible README and dependency instructions.",
        "Evaluation selects the Top 10 teams advancing to the finals.",
      ],
    },
    {
      id: "mentorship",
      name: "Stage 3: Advanced Mentorship",
      date: "Nov 07, 2026",
      deliverable: "Online Masterclass & 1-on-1 Mentoring",
      summary:
        "Top 10 finalists receive targeted technical feedback and strategic guidance from domain experts in biostatistics, AI, and healthcare.",
      requirements: [
        "Dedicated mentor assigned to each finalist team.",
        "Critique of prototype architecture, scalability, statistical validity, and pitch strategy.",
        "Open access for non-finalists to observe masterclass sessions.",
      ],
    },
    {
      id: "finals",
      name: "Stage 4: Culminating Event",
      date: "Nov 14, 2026",
      deliverable: "Live Pitch + Booth Demonstration",
      summary:
        "The grand face-to-face climax in Metro Manila featuring live pitches before an esteemed judging panel and interactive prototype exhibits.",
      requirements: [
        "10-minute live stage presentation (strictly enforced cutoff).",
        "10-minute Q&A segment with the panel of expert judges.",
        "Interactive demo station for attendees, guests, and sponsors.",
        "Open to non-finalists and community visitors as gallery attendees.",
        "Featured on UP Data Science Society official GitHub and social channels.",
      ],
    },
  ],

  criteriaElimination: [
    {
      category: "Project Rationale and Design",
      weight: "20%",
      description: "Problem formulation and data foundation",
      points: [
        "Clarity and urgency of public health problem statement",
        "Quality, relevance, and ethical sourcing of datasets",
        "Soundness of analytical methodology and approach",
      ],
    },
    {
      category: "Execution and Impact",
      weight: "25%",
      description: "Real-world findings and actionable insight",
      points: [
        "Depth of findings, analysis, and statistical significance",
        "Identification of real-world bottlenecks and mitigation strategies",
        "Translational potential for LGUs, healthcare providers, or communities",
      ],
    },
    {
      category: "Code Repository & Reproducibility",
      weight: "20%",
      description: "Software engineering and architecture",
      points: [
        "Modular code structure, cleanliness, and commenting",
        "Flawless reproducibility and clear setup instructions",
        "Proper environment, dependency, and dataset management",
      ],
    },
    {
      category: "Demonstration Video",
      weight: "15%",
      description: "Clarity and technical showcase",
      points: [
        "Communication clarity, concise narration, and video quality",
        "Compelling functional showcase of the working prototype",
        "Effective audience comprehension within the 3-minute limit",
      ],
    },
    {
      category: "Technical Rigor & Innovation",
      weight: "15%",
      description: "Algorithmic ingenuity and depth",
      points: [
        "Validity and appropriateness of ML / statistical models",
        "Novelty, creativity, and unconventional problem-solving",
        "Analytical depth beyond superficial exploratory charts",
      ],
    },
    {
      category: "Sources & Citations",
      weight: "5%",
      description: "Academic rigor",
      points: ["Strict adherence to APA 7th Edition format for all data and literature."],
    },
  ] as CriteriaItem[],

  criteriaFinals: [
    {
      category: "Demonstrated Functionality & Technical Robustness",
      weight: "30%",
      description: "Execution quality and live performance",
      points: [
        "Working prototype reliability during live demonstration",
        "Robustness against edge cases, latency, and sample inputs",
        "Architectural elegance, data pipeline stability, and security",
      ],
    },
    {
      category: "Impact & Real-World Applicability",
      weight: "25%",
      description: "Scalability and healthcare translation",
      points: [
        "Measurable benefit to Philippine public health outcomes",
        "Deployment feasibility, cost viability, and scalability",
        "Long-term operational and data maintenance sustainability",
      ],
    },
    {
      category: "User Experience & Interface Design",
      weight: "20%",
      description: "Human-centered design and clarity",
      points: [
        "Intuitive interaction design tailored for health workers or citizens",
        "Accessibility, responsiveness, and aesthetic polish",
        "Cognitive clarity of charts, data visualizations, and metrics",
      ],
    },
    {
      category: "Presentation & Communication Competence",
      weight: "20%",
      description: "Stage pitch and defense",
      points: [
        "Pacing, delivery, and adherence to the 10-minute stage limit",
        "Mastery, poise, and technical precision during judge Q&A",
        "Compelling storytelling and articulation of core value proposition",
      ],
    },
    {
      category: "Sources & Citations",
      weight: "5%",
      description: "Scholarly attribution",
      points: ["Consistent, verified APA 7th Edition attribution."],
    },
  ] as CriteriaItem[],

  organizer: {
    name: "UP Data Science Society",
    acronym: "UP DSSoc",
    founded: "2020",
    institution: "University of the Philippines Diliman",
    description:
      "Founded in 2020, the UP Data Science Society (UP DSSoc) is the premier and pioneering data science organization at the University of the Philippines. We are dedicated to cultivating an open, multidisciplinary environment where aspiring data scientists engage in insightful discourse, hone technical proficiencies, and build data-driven solutions for social good.",
    vision:
      "A multidisciplinary organization whose members contribute to society through innovative solutions to community problems using Data Science, and help responsibly develop the field of Data Science in the country.",
    mission:
      "To provide an avenue for Data Science enthusiasts of UP Diliman to safely share ideas and experiences, hone their skills, and collaborate to build socially relevant and impactful projects while promoting data science and its real-life applications.",
    coreValues: [
      {
        title: "Purposeful Learning",
        desc: "Pursuing technical mastery and analytical depth with clear intention and social relevance.",
      },
      {
        title: "Community for Innovation",
        desc: "Fostering inclusive cross-disciplinary collaboration among statisticians, engineers, designers, and domain specialists.",
      },
      {
        title: "Utak at Puso",
        desc: "Grounding analytical brilliance in compassion and unwavering service to the Filipino nation.",
      },
    ],
    pastIterations: [
      { year: "2025", theme: "Resilience & Resource Allocation in Crisis", primerUrl: "#" },
      { year: "2024", theme: "Urban Mobility & Smart Infrastructure Analytics", primerUrl: "#" },
      { year: "2023", theme: "Financial Inclusion & Predictive Micro-econometrics", primerUrl: "#" },
      { year: "2022", theme: "Supply Chain & Pandemic Economic Recovery", primerUrl: "#" },
      { year: "2021", theme: "Data Science for Social Good & Disaster Preparedness", primerUrl: "#" },
    ],
    socialLinks: {
      facebook: "https://www.facebook.com/updatasciencesociety/",
      linkedin: "https://www.linkedin.com/company/updatasciencesociety/",
      github: "https://github.com/UP-DSSoc/",
      instagram: "https://instagram.com/updssoc",
      email: "updatasciencesociety@gmail.com",
    },
  },

  faqs: [
    {
      category: "eligibility",
      question:
        "I am not from Computer Science, Statistics, or Engineering. Am I still allowed to register?",
      answer:
        "Absolutely! The competition is warmly open to all undergraduate and senior high school students from any accredited Philippine institution, with no restrictions on academic degree program. Multidisciplinary teams that combine domain knowledge (e.g. biology, public health, psychology, communications) with analytical skills are strongly encouraged.",
    },
    {
      category: "eligibility",
      question: "I am currently an undergraduate student on Leave of Absence (LOA). Can I join?",
      answer:
        "Yes. Undergraduate students currently on official Leave of Absence (LOA) remain eligible to participate, provided they can furnish proof of active or recent enrollment.",
    },
    {
      category: "teams",
      question: "Can our team have members from different universities and regions?",
      answer:
        "Yes! Cross-university and cross-regional collaborations are fully permitted and celebrated. You are free to team up with peers across NCR, Luzon, Visayas, and Mindanao as long as every member satisfies the eligibility criteria.",
    },
    {
      category: "teams",
      question: "What happens if a member drops out during the course of the competition?",
      answer:
        "Your team may continue competing as long as you maintain the minimum team size of three (3) active members. If your team drops below three members, you will need to notify the steering committee and recruit an eligible replacement prior to the final project submission.",
    },
    {
      category: "technical",
      question: "Do I need prior programming or machine learning experience to participate?",
      answer:
        "Prior coding experience is beneficial but not strictly mandatory. PJDSC provides structured learning workshops and mentorship sessions to guide participants through foundational concepts. However, your team should collectively possess the capability to build a functional analytical project.",
    },
    {
      category: "technical",
      question: "What programming languages and analytical libraries are permitted?",
      answer:
        "You may use any programming language, framework, or toolchain of your choice (Python, R, Julia, JavaScript/TypeScript, SQL, Docker, etc.) as long as your repository is publicly inspectable and your project can be reproduced and evaluated.",
    },
    {
      category: "technical",
      question: "What form can our final data science solution take?",
      answer:
        "Solutions can be manifested in any usable, interactive format—including interactive web dashboards (Streamlit, Dash, Next.js), mobile applications, progressive web apps, API microservices, or interactive decision-support notebooks with clear visual interfaces.",
    },
    {
      category: "event",
      question: "Where will the hybrid and face-to-face culminating events take place?",
      answer:
        "The face-to-face Culminating Event on November 14, 2026 will be held at a premier university venue in Metro Manila (exact hall to be announced). All earlier workshops and proposal stages will be conducted online.",
    },
    {
      category: "event",
      question: "Can non-finalist participants and visitors attend the final culminating day?",
      answer:
        "Yes! Subject to the venue's health and safety seating capacity, non-finalist teams and guests are welcome to attend as gallery visitors to explore the demonstration stations, network with sponsors, and attend keynotes.",
    },
  ] as FaqItem[],

  sponsors: [
    {
      name: "Co-Presented By",
      tagline: "Platinum Partner Tier",
      contribution: "₱20,000",
      benefits: [
        "Exclusive 'Co-Presented By' top billing across all marketing assets",
        "Keynote speaker slot during Official Event Launch",
        "Option to provide a judge for the Live Finals",
        "Exhibition booth & recruitment promotion at Culmination Day",
        "Direct access to participant resume book & project repos",
      ],
      slots: [
        { name: "Apper Clouds Labs", logo: "/logos/apper_logo@3x (1).png", status: "confirmed" },
        { name: "999 Venture Studio", logo: "/logos/999 transparent.png", status: "confirmed" },
        { name: "UP Intelligent Systems Center", logo: "/logos/UPISC_Logo_Short.png", status: "confirmed" },
      ],
    },
    {
      name: "In Cooperation With",
      tagline: "Gold Partner Tier",
      contribution: "₱15,000",
      benefits: [
        "'In Cooperation With' branding on main event collaterals",
        "Exhibition booth & talent engagement space at Finals",
        "Promotional video spotlight during intermission segments",
        "Social media spotlight feature across official channels",
      ],
      slots: [
        { name: "Data Engineering Pilipinas", logo: "/logos/DEP Logo.png", status: "confirmed" },
        { name: "Philippine Consortium Inc", logo: "/logos/ph-consortium-logo.png", status: "confirmed" },
      ],
    },
    {
      name: "Also Brought To You By",
      tagline: "Silver Partner Tier",
      contribution: "₱10,000",
      benefits: [
        "'Also Brought To You By' logo inclusion on all pubmats",
        "Option to provide promotional swag and collateral in participant kits",
        "Acknowledgment during launch and culmination ceremonies",
      ],
      slots: [
        { name: "Junior Achievement of The Philippines, Inc.", logo: "/logos/02 SECONDARY_JA Philippines.png", status: "confirmed" },
      ],
    },
    {
      name: "Official Partners",
      tagline: "Community & Media Alliances",
      benefits: [
        "Logo placement across all official promotional publications",
        "Official media partner certificate of partnership",
        "Reciprocal publicity across student networks nationwide",
      ],
      slots: [
        { name: "COPE UP", logo: "/logos/Media Partner Logos (PJDSC 2026)/COPE UP LOGO.jpg", status: "confirmed" },
        { name: "Tekkie Pinas", logo: "/logos/Media Partner Logos (PJDSC 2026)/TEKKIE PINAS LOGO.png", status: "confirmed" },
        { name: "UST Technovation Society", logo: "/logos/Media Partner Logos (PJDSC 2026)/UST TECHSOC LOGO.png", status: "confirmed" },
        { name: "UP Computer Science Guild (UPCSG)", logo: "/logos/Media Partner Logos (PJDSC 2026)/UPCSG LOGO VIOLET.png", status: "confirmed" },
        { name: "Ateneo Mathematics Society (AMS)", logo: "/logos/Media Partner Logos (PJDSC 2026)/AMS LOGO.png", status: "confirmed" },
        { name: "Polytechnic University of the Philippines - Association of DOST Scholars", logo: "/logos/Media Partner Logos (PJDSC 2026)/PUP-ADS LOGO.png", status: "confirmed" },
        { name: "DOST SA UP CEBU", logo: "/logos/Media Partner Logos (PJDSC 2026)/DOST SA UPC LOGO.png", status: "confirmed" },
        { name: "Alliance of Computer Science Students - UPLB (ACSS - UPLB)", logo: "/logos/Media Partner Logos (PJDSC 2026)/ACSS LOGO/acss-blue-seal-withtext.png", status: "confirmed" },
        { name: "Engineers for Genuine Change (ENGAGE UP)", logo: "/logos/Media Partner Logos (PJDSC 2026)/ENGAGE UP LOGO.png", status: "confirmed" },
        { name: "Junior Information Systems Security Association QC (JISSA TIP QC)", logo: "/logos/JISSA LOGO.png", status: "confirmed" },
        { name: "UP Simantikos Statistical Society (UPSSS)", logo: "/logos/UPSSS LOGO (with bg).jpeg", status: "confirmed" },
      ],
    },
  ] as SponsorTier[],
};
