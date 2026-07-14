export interface SkillEntry {
  icon: string;
  name: string;
  examples?: string;
}

export interface ContactEntry {
  icon: string;
  href: string;
  label: string;
}

export interface Achievement {
  text: string;
  subItems?: string[];
}

export interface JobEntry {
  title: string;
  company: string;
  from: string; // ISO date
  to?: string; // ISO date, omitted = present
  skills: SkillEntry[];
  achievements: Achievement[];
}

export interface OpenSourceEntry {
  name: string;
  href: string;
  role: string;
  description: string;
}

export const cv: {
  name: string;
  title: string;
  description: string;
  keywords: string;
  contact: ContactEntry[];
  skills: SkillEntry[];
  jobs: JobEntry[];
  openSource: OpenSourceEntry[];
} = {
  name: "Alex Ward",
  title: "Curriculum Vitae",
  description:
    "An overview of my professional experiences, and showcased projects. Connect with me to explore collaboration opportunities and learn more about what I bring to the table.",
  keywords:
    "CV, Experience, Software Engineer, Gitlab, Docker, Python, Selenium, PyTest, Deployment Pipelines, API, Hack the Box, CTF, Open Source developer, textstat, trailassociation.uk, API Development, Workflow Tools, Tooling",

  contact: [
    {
      icon: "fa-solid:envelope",
      href: "mailto:alxwrd@googlemail.com",
      label: "alxwrd@googlemail.com",
    },
    {
      icon: "fa-brands:github",
      href: "https://github.com/alxwrd/",
      label: "github.com/alxwrd",
    },
  ],

  skills: [
    { icon: "fa-brands:python", name: "Python", examples: "FastAPI, Pydantic AI" },
    { icon: "fa-brands:node-js", name: "Node.js", examples: "Express.js, RushJS" },
    { icon: "fa-brands:docker", name: "Docker", examples: "Containers, CLI, compose" },
    { icon: "fa-brands:js-square", name: "Javascript", examples: "Svelte, Vue.js" },
    { icon: "fa-brands:git-alt", name: "Git", examples: "CLI, Gitlab, Github" },
    { icon: "fa-brands:linux", name: "Linux", examples: "RHEL based, Debian based" },
    { icon: "fa-brands:aws", name: "AWS", examples: "ECS, Step functions, Lambda" },
    { icon: "fa-solid:sync-alt", name: "CI/CD", examples: "Github Actions" },
    { icon: "fa-solid:database", name: "DB", examples: "Postgres, Oracle DB, MongoDB" },
  ],

  jobs: [
    {
      title: "Senior Software Engineer",
      company: "Gelt",
      from: "2025-01-13",
      skills: [
        { icon: "fa-brands:js-square", name: "TypeScript", examples: "Node, NestJS" },
        { icon: "fa-brands:python", name: "Python", examples: "FastAPI, Pydantic AI" },
        { icon: "fa-brands:vuejs", name: "Vue.js" },
        { icon: "fa-solid:database", name: "MongoDB" },
        { icon: "fa-brands:aws", name: "AWS", examples: "CDK, ECS, Lambda" },
        { icon: "fa-brands:docker", name: "Docker" },
        { icon: "fa-brands:github", name: "Github Actions" },
      ],
      achievements: [
        {
          text: "Building AI agents using Pydantic AI and FastAPI, with AG-UI (Agent User Interaction Protocol) to connect agents to frontend applications.",
        },
        {
          text: "Reduced deploy workflow time by over 40% (from ~26 to ~15 minutes) by tracing through deployment pipeline shortening feedback loops on every merge.",
        },
        {
          text: "Built and shipped an MCP server prototype end-to-end while the specification was still nascent, including contributing improvements upstream to the library. Internal rollout enabled a high-confidence go/no-go decision on the technology, avoiding unnecessary investment.",
        },
        {
          text: "Reduced AWS spend by ~$250/month (~$3k/year) in dev and staging by identifying and optimising underutilised infrastructure, running without issues for over 12 months.",
        },
      ],
    },
    {
      title: "Software Engineer",
      company: "Deepsea",
      from: "2024-04-23",
      to: "2025-01-03",
      skills: [
        { icon: "fa-brands:python", name: "FastAPI" },
        { icon: "fa-solid:database", name: "Postgres" },
        { icon: "fa-brands:aws", name: "AWS" },
        { icon: "fa-brands:docker", name: "Docker" },
        { icon: "fa-brands:bitbucket", name: "Bitbucket" },
        { icon: "fa-brands:jenkins", name: "Jenkins" },
      ],
      achievements: [
        {
          text: "Founding engineer on a new team to develop new Python based services. Responsible for establishing technical guidance, leadership, and creating best practices.",
        },
        {
          text: "Identified and improved bottlenecks in a data heavy service and reduced response times from ~14s to 4s - a 70% decrease.",
        },
        {
          text: "Drove the addition of metrics and clean logging to services inherited by the new team to improve observability.",
        },
      ],
    },
    {
      title: "Software Engineer",
      company: "Tessian",
      from: "2022-02-07",
      to: "2024-01-19",
      skills: [
        { icon: "fa-brands:python", name: "Flask" },
        { icon: "fa-solid:database", name: "Postgres" },
        { icon: "fa-brands:aws", name: "AWS", examples: "ECS, S3, EMR, MWAA" },
        { icon: "fa-brands:docker", name: "Docker" },
        { icon: "fa-brands:github", name: "Github" },
        { icon: "fa-solid:sync-alt", name: "CircleCI" },
        { icon: "fa-solid:project-diagram", name: "Kafka" },
      ],
      achievements: [
        {
          text: "Split up a monolithic build pipeline reducing build time for individual applications from several hours to less than twenty minutes with 100+ CI credits saved per build.",
        },
        {
          text: "Led an initiative to create a suite of tools to simplify and optimize developer workflows for increased productivity. Regularly used by 90+ engineers and winner of 'fan favourite' hackathon award.",
          subItems: [
            "Developed a tool that automated the decryption of encrypted log data and ensuring secure, hassle-free data access.",
            "Created a release tool that simplifies the release process, reducing cognitive load and boosting the efficiency of service releases.",
          ],
        },
        {
          text: "Organised and led a team for the [Hack the Box 2022 CTF](https://www.hackthebox.com/events/cyber-apocalypse-2022) where we placed 173rd out of 7,024 teams.",
        },
        {
          text: "Regularly produced quality, engaging, and concise tutorials and documentation for internal processes and systems - providing examples and highlighting pitfalls where appropriate.",
        },
        {
          text: "Implemented an external API service that tied together multiple backend services to allow customers programmatic access to data and to allow 3rd party integration development.",
        },
        {
          text: "Launched an overhaul of the customer onboarding/offboarding process, giving individual services greater control over their data, and implementing reporting mechanisms to prevent unintended data retention. Automated the process to save the Platform team hours of manual work each month - and additionally reducing out-of-hours work as performance-heavy offboarding jobs were scheduled for overnight and didn't require manually starting.",
        },
      ],
    },
    {
      title: "Software Engineer",
      company: "Oracle",
      from: "2018-11-01",
      to: "2022-01-01",
      skills: [
        { icon: "fa-brands:python", name: "Django" },
        { icon: "fa-solid:database", name: "Oracle DB" },
        { icon: "fa-solid:cloud", name: "Oracle Cloud" },
        { icon: "fa-brands:linux", name: "Oracle Linux" },
        { icon: "fa-brands:docker", name: "Docker" },
        { icon: "fa-brands:node-js", name: "Express.js" },
        { icon: "fa-brands:java", name: "Spring Boot" },
        { icon: "fa-brands:gitlab", name: "Gitlab" },
        { icon: "fa-solid:sync-alt", name: "Gitlab Pipelines" },
      ],
      achievements: [
        {
          text: "Established and managed a Gitlab deployment pipeline across multiple OCI instances, handling project builds, test executions, and dynamic deployment to review environments for QA testing.",
        },
        {
          text: "Developed tools to manage local development environments and initiate development Docker containers, facilitating seamless onboarding for new team members and saving valuable development time.",
        },
        {
          text: "Anticipating Python 2 end-of-life, proactively upgraded the application from Python 2 to Python 3, ensuring compatibility and future-proofing the technology stack.",
        },
        {
          text: "Innovated a Python testing framework utilizing Selenium and PyTest, simplifying the complexities of writing Selenium tests and providing a user-friendly interface for QA to automate testing.",
        },
      ],
    },
    {
      title: "Application Developer",
      company: "GSA Ltd",
      from: "2016-06-01",
      to: "2018-11-01",
      skills: [
        { icon: "fa-brands:python", name: "IronPython" },
        { icon: "fa-brands:microsoft", name: "SQL Server" },
        { icon: "fa-brands:microsoft", name: "TFS" },
      ],
      achievements: [
        {
          text: "Engineered a bridge application facilitating communication between a legacy application and a new external system, ensuring seamless integration and interoperability.",
        },
        {
          text: "Built developer pipeline tools to improve efficiency:",
          subItems: [
            "Developed tools to synchronize changes with remote development environments and run linters, minimizing deployment issues and improving efficiency.",
            "Created tools to significantly reduce release and deployment times, enhancing overall development speed.",
          ],
        },
        {
          text: "Designed and maintained internal Python libraries, ensuring they meet evolving development needs and standards.",
        },
        {
          text: "Provided technical assistance to the support team and actively maintained existing systems.",
        },
      ],
    },
    {
      title: "Administrator",
      company: "Npower",
      from: "2014-01-01",
      to: "2016-06-01",
      skills: [{ icon: "fa-brands:python", name: "Python" }],
      achievements: [
        {
          text: "Developed a Python [application](https://github.com/alxwrd/auto-report) that generates and emails HTML reports from booking system exports, eliminating the manual creation of reports and saving several hours daily.",
        },
      ],
    },
  ],

  openSource: [
    {
      name: "textstat/textstat",
      href: "https://textstat.org/",
      role: "maintainer",
      description:
        "A Python package to calculate readability statistics of a text object - paragraphs, sentences, articles.",
    },
    {
      name: "trailassociation.uk",
      href: "https://trailassociation.uk",
      role: "maintainer",
      description:
        "A resource for trail associations in the UK to help with promotion and organisation.",
    },
  ],
};
