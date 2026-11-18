// Content for the finalist primer at /finals.
// A `null` value renders as a "TBA" marker on the page. Replace it with the
// confirmed detail once the organizing team announces it.

export interface ProgramItem {
  start: string; // 24-hour, Philippine time
  end: string;
  minutes: number;
  title: string;
  detail?: string;
  presentationBlock?: number;
}

export interface VenueItem {
  label: string;
  value: string | null;
  href?: string;
}

export interface FinalistTeam {
  number: number;
  name: string;
  seats: string[];
}

export interface FinalsFaq {
  question: string;
  answer: string | null;
}

export const finalsData = {
  dateDisplay: "Saturday, November 21, 2026",
  shortDate: "Sat, Nov 21 · 8:00 AM",
  startTime: "8:00 AM",
  venueName: "CS Auditorium",
  // Seat codes follow the official CS Auditorium seat assignment design.
  seatsReserved: 43,
  teams: [
    { number: 1, name: "DiagNodes", seats: ["C31","C32","C33","C34"] },
    { number: 2, name: "SiniGANG", seats: ["C8","C9","C10"] },
    { number: 3, name: "Nex", seats: ["C13","C14","C15"] },
    { number: 4, name: "ENIGMA", seats: ["C18","C19","C20","C21","C22"] },
    { number: 5, name: "BLOCK C", seats: ["C41","C42","C43","C44","C45"] },
    { number: 6, name: "Machine Learning Bang Bang", seats: ["C25","C26","C27","C28","C29"] },
    { number: 7, name: "Outliers", seats: ["C35","C36","C37"] },
    { number: 8, name: "BIH-Science", seats: ["R12","R13","R14","R15","R16"] },
    { number: 9, name: "SU Nexus", seats: ["R25","R26","R27","R28","R29"] },
    { number: 10, name: "MANSCIT", seats: ["R18","R19","R20","R21","R22"] },
  ] as FinalistTeam[],

  // Run of show for finals day.
  program: [
    { start: "8:00", end: "8:30", minutes: 30, title: "Ingress", detail: "Arrival and registration." },
    { start: "8:30", end: "8:40", minutes: 10, title: "Opening spiel" },
    { start: "8:40", end: "9:10", minutes: 30, title: "Talk", detail: "By Princess Ventures, founder of BuddyBetes and fellow of the UP Data Science Society." },
    { start: "9:10", end: "9:20", minutes: 10, title: "Introduction of teams" },
    { start: "9:20", end: "9:35", minutes: 15, title: "Final round overview" },
    { start: "9:35", end: "11:25", minutes: 110, title: "Project presentations, block 1", detail: "Five teams present. Each gets 10 minutes on stage and 10 minutes of Q&A with the judges.", presentationBlock: 1 },
    { start: "11:25", end: "11:55", minutes: 30, title: "Demo stations, round 1", detail: "Teams demo at their stations outside the auditorium, alongside booths from Computrade Technology Philippines and Philippine Consortium Inc. Not scored." },
    { start: "11:55", end: "12:55", minutes: 60, title: "Lunch" },
    { start: "12:55", end: "13:25", minutes: 30, title: "Demo stations, round 2", detail: "Teams demo at their stations outside the auditorium, alongside booths from Computrade Technology Philippines and Philippine Consortium Inc. Not scored." },
    { start: "13:25", end: "15:15", minutes: 110, title: "Project presentations, block 2", detail: "The remaining five teams present in the same format.", presentationBlock: 2 },
    { start: "15:15", end: "15:45", minutes: 30, title: "Snack break" },
    { start: "15:45", end: "16:25", minutes: 40, title: "Awarding and recognition" },
    { start: "16:25", end: "16:45", minutes: 20, title: "Closing" },
    { start: "16:45", end: "17:00", minutes: 15, title: "Egress" },
  ] as ProgramItem[],

  // Each presentation block holds 5 teams in back-to-back 20-minute slots.
  presentationSlot: {
    teamsPerBlock: 5,
    minutes: 20,
    breakdown: [
      { label: "presentation", minutes: 10 },
      { label: "Q&A", minutes: 10 },
    ],
  },

  venue: [
    { label: "Venue", value: "CS Auditorium" },
    { label: "Address", value: "CS Admin Office, National Science Complex, U.P., 1101 P. Velasquez Street, Diliman, Quezon City, Metro Manila" },
    { label: "Map", value: "Open in Google Maps", href: "https://maps.app.goo.gl/D75avHSAaKQiGGvw7" },
    { label: "Call time for finalists", value: "8:00 AM, at the start of ingress" },
    { label: "Getting there", value: "Take a jeep bound for UP Campus from Katipunan (terminal under the Katipunan flyover), Philcoa (ride the queue that enters the campus, not the Tandang Sora line), or SM North EDSA (UP Campus terminal under the Sky Garden), and get off near the National Science Complex. If you are coming by car or ride-hailing, set your destination to the CS Admin Building, National Science Complex." },
    { label: "Parking", value: "Parking is available under the building" },
    { label: "Entry requirements", value: "School ID and your reminder email" },
  ] as VenueItem[],

  faqs: [
    {
      question: "How long is our presentation?",
      answer:
        "Each team has 10 minutes on stage, followed by a 10-minute Q&A with the panel of judges. The time limit is strictly enforced: teams that reach 10 minutes are stopped immediately and no extra time is given.",
    },
    {
      question: "Will we have time to test our presentation beforehand?",
      answer:
        "Each team gets 1 minute to test before presenting, and we will check the audio. You present from your own device, so prepare it ahead of time and make sure everything in your presentation works on it. Extra setup time is only given if the problem is on our side, such as no audio or a faulty microphone.",
    },
    {
      question: "Will a presentation clicker and microphones be provided?",
      answer:
        "No clicker will be provided. Each team gets one microphone. More than one member may present, but we recommend designating one presenter to save time.",
    },
    {
      question: "Can we bring props for our presentation?",
      answer: "Yes, you may bring props.",
    },
    {
      question: "A member has a conflict in the morning. Can we present in the afternoon block?",
      answer:
        "Yes. Request the afternoon block and send proof of the conflict, such as a class schedule or an official notice, to pjdsc.updssoc@gmail.com.",
    },
    {
      question: "Is the demo station part of the scoring?",
      answer:
        "No. Every team gets a demonstration station in addition to the stage presentation, but it is for exhibit and viewing only and is not included in the official evaluation.",
    },
    {
      question: "Can we change our presentation after the mentorship session?",
      answer:
        "Yes. You may update your presentation based on the comments your mentors gave during the Advanced Workshop on November 14.",
    },
    {
      question: "Do we have to show our submitted AVP or demo video?",
      answer:
        "It is up to your team whether to show it during your presentation. You can also showcase your work at your demo station outside the auditorium. Demo stations run in two rounds, between the morning and afternoon presentation blocks.",
    },
    {
      question: "How will the finalists be judged?",
      answer:
        "On five criteria: functionality and technical robustness (20%), innovation and problem understanding (15%), presentation and communication (15%), impact and real-world applicability (30%), and user experience and design (20%). The full rubric, with what earns each score, is under Program flow.",
    },
    {
      question: "Who from our team needs to attend in person?",
      answer:
        "Teams from NCR must attend face to face, and their members cannot join online. Members of teams from outside NCR may join online, but we strongly encourage every member to attend in person.",
    },
    {
      question: "What should we bring on the day?",
      answer:
        "Bring your laptops, chargers, and an extension cord. You will use your laptops both for your stage presentation and at your demo station.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "Business casual.",
    },
    {
      question: "Can we bring advisers, family, or other guests?",
      answer:
        "Yes, you may bring advisers, family, and other spectators. Food is not guaranteed for guests: the meal headcount has already been finalized, and finalist participants get priority.",
    },
    {
      question: "Can non-finalist participants attend?",
      answer:
        "Depending on the attendance limit, non-finalist participants are welcome as visitors. They can explore the finalists' demo stations and the booths of Computrade Technology Philippines and Philippine Consortium Inc.",
    },
  ] as FinalsFaq[],
};
