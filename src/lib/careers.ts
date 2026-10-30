/**
 * Job openings come from LifeFlow (HR posts them there). The pages read them
 * on the server. LifeFlow calls /api/careers/revalidate after every change, so
 * a job shows up on the next visit, without a redeploy; the timer below is the
 * fallback if that call is lost. Applications are sent from the browser
 * straight to the same API.
 */

/** LifeFlow's API root, e.g. https://api.example.com/api/v1. Unset = no openings are shown. */
export const LIFEFLOW_API_URL = (process.env.NEXT_PUBLIC_LIFEFLOW_API_URL ?? "").replace(/\/+$/, "");

/** Seconds a fetched list or job is reused before it's fetched again. */
export const CAREERS_REVALIDATE = 300;

/** Cache tag on every LifeFlow fetch; clearing it refreshes the Careers pages. */
export const CAREERS_TAG = "careers";

export type JobSection = {
  heading: string;
  items: string[];
};

export type JobFormField = {
  key: string;
  label: string;
  type: "text" | "textarea" | "number" | "yes_no" | "select" | "date" | "url";
  required: boolean;
  options?: string[];
};

export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  employmentTypeLabel: string;
  /** schema.org JobPosting's employmentType (FULL_TIME, CONTRACTOR…). */
  schemaEmploymentType: string;
  workMode: "on_site" | "hybrid" | "remote";
  workModeLabel: string;
  openings: number;
  experienceMinYears: number;
  experienceMaxYears: number | null;
  experienceLabel: string;
  /** Rupees a year; null unless HR chose to show it. */
  salary: { min: number | null; max: number | null } | null;
  summary: string;
  sections: JobSection[];
  formFields: JobFormField[];
  hasJd: boolean;
  applyBy: string | null;
  publishedAt: string | null;
  updatedAt: string;
  acceptingApplications: boolean;
};

type ApiResponse<T> = { success: true; data: T } | { success: false; error: { message: string; code?: string } };

/** The posted jobs, newest first. An unreachable API shows no openings rather than breaking the page. */
export async function getJobs(): Promise<Job[]> {
  if (!LIFEFLOW_API_URL) return [];
  try {
    const res = await fetch(`${LIFEFLOW_API_URL}/careers/public/jobs`, {
      next: { revalidate: CAREERS_REVALIDATE, tags: [CAREERS_TAG] },
    });
    if (!res.ok) return [];
    const body = (await res.json()) as ApiResponse<Job[]>;
    return body.success ? body.data : [];
  } catch {
    return [];
  }
}

/** One posted (or recently closed) job; null when there's no such job. */
export async function getJob(slug: string): Promise<Job | null> {
  if (!LIFEFLOW_API_URL) return null;
  try {
    const res = await fetch(`${LIFEFLOW_API_URL}/careers/public/jobs/${encodeURIComponent(slug)}`, {
      next: { revalidate: CAREERS_REVALIDATE, tags: [CAREERS_TAG] },
    });
    if (!res.ok) return null;
    const body = (await res.json()) as ApiResponse<Job>;
    return body.success ? body.data : null;
  } catch {
    return null;
  }
}

export const jdUrl = (slug: string) => `${LIFEFLOW_API_URL}/careers/public/jobs/${encodeURIComponent(slug)}/jd`;

export const applyUrl = (slug: string) =>
  `${LIFEFLOW_API_URL}/careers/public/jobs/${encodeURIComponent(slug)}/applications`;

const rupees = (n: number) =>
  n >= 100_000 ? `₹${(n / 100_000).toLocaleString("en-IN", { maximumFractionDigits: 1 })} LPA` : `₹${n.toLocaleString("en-IN")}`;

/** "₹4–6 LPA", "From ₹4 LPA", "Up to ₹6 LPA". */
export function salaryLabel(salary: Job["salary"]): string | null {
  if (!salary) return null;
  const { min, max } = salary;
  if (min !== null && max !== null) return min === max ? rupees(min) : `${rupees(min)} – ${rupees(max)}`;
  if (min !== null) return `From ${rupees(min)}`;
  if (max !== null) return `Up to ${rupees(max)}`;
  return null;
}
