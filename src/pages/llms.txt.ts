import type { APIRoute } from "astro";
import { cv, type JobEntry } from "../data/cv";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });

const formatRange = (job: JobEntry) =>
  `${formatDate(job.from)} - ${job.to ? formatDate(job.to) : "Present"}`;

const renderAchievement = ({ text, subItems }: JobEntry["achievements"][number]) => {
  const lines = [`- ${text}`];
  subItems?.forEach((sub) => lines.push(`  - ${sub}`));
  return lines.join("\n");
};

const renderJob = (job: JobEntry) =>
  [
    `### ${job.title} — ${job.company} (${formatRange(job)})`,
    "",
    `Tech: ${job.skills.map((skill) => skill.name).join(", ")}`,
    "",
    job.achievements.map(renderAchievement).join("\n"),
  ].join("\n");

const body = [
  `# ${cv.name} - ${cv.title}`,
  "",
  `> ${cv.description}`,
  "",
  "## Contact",
  "",
  ...cv.contact.map((contact) => `- ${contact.label}: ${contact.href}`),
  "",
  "## Skills",
  "",
  ...cv.skills.map((skill) =>
    skill.examples ? `- ${skill.name} (${skill.examples})` : `- ${skill.name}`,
  ),
  "",
  "## Experience",
  "",
  cv.jobs.map(renderJob).join("\n\n"),
  "",
  "## Open Source",
  "",
  ...cv.openSource.map(
    (project) => `- [${project.name}](${project.href}) — ${project.role}: ${project.description}`,
  ),
  "",
].join("\n");

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
