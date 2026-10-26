import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import JsonLd from "@/components/JsonLd";
import { getJob, getJobs, Job } from "@/lib/careers";
import JobApplyClient from "./JobApplyClient";
import JobDescriptionView from "./JobDescriptionView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Jobs come from LifeFlow; a page is rebuilt at most every 5 minutes, and
// jobs posted after the build are rendered on first visit.
export const revalidate = 300;

/**
 * schema.org JobPosting, so the job can appear in Google's job search. The
 * hiring organisation is always LifeFirst: which company in the group a job
 * belongs to isn't shown on the website.
 */
function jobPostingSchema(job: Job, jobUrl: string, baseUrl: string) {
  const description = [
    job.summary ? `<p>${escapeHtml(job.summary)}</p>` : "",
    ...job.sections.map(
      (s) =>
        `<h3>${escapeHtml(s.heading)}</h3><ul>${s.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`,
    ),
  ].join("");
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: description || `${job.title} (${job.department}) at LifeFirst, ${job.location}.`,
    identifier: { "@type": "PropertyValue", name: "LifeFirst", value: job.slug },
    // The day in India it was posted.
    datePosted: new Date(Date.parse(job.publishedAt ?? job.updatedAt) + 330 * 60_000).toISOString().slice(0, 10),
    ...(job.applyBy ? { validThrough: `${job.applyBy}T23:59:59+05:30` } : {}),
    employmentType: job.schemaEmploymentType,
    hiringOrganization: { "@type": "Organization", name: "LifeFirst", sameAs: baseUrl, logo: `${baseUrl}/favicon.ico` },
    ...(job.workMode === "remote"
      ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "India" } }
      : {
          jobLocation: {
            "@type": "Place",
            address: { "@type": "PostalAddress", addressLocality: job.location, addressCountry: "IN" },
          },
        }),
    experienceRequirements: {
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: job.experienceMinYears * 12,
    },
    totalJobOpenings: job.openings,
    ...(job.salary && (job.salary.min !== null || job.salary.max !== null)
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              ...(job.salary.min !== null ? { minValue: job.salary.min } : {}),
              ...(job.salary.max !== null ? { maxValue: job.salary.max } : {}),
              unitText: "YEAR",
            },
          },
        }
      : {}),
    directApply: true,
    url: jobUrl,
  };
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const JobPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    notFound();
  }

  const baseUrl = "https://life-first.in";
  const jobUrl = `${baseUrl}/careers/${job.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Careers",
        item: `${baseUrl}/careers`,
      },
      { "@type": "ListItem", position: 3, name: job.title, item: jobUrl },
    ],
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <JsonLd data={breadcrumbSchema} />
      {job.acceptingApplications && <JsonLd data={jobPostingSchema(job, jobUrl, baseUrl)} />}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 sm:px-6 lg:px-8 mt-24 md:mt-26">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/careers"
            className="inline-block text-sm text-blue-100 hover:text-white mb-3 transition-colors"
          >
            ← Back to Careers
          </Link>
          <h1 className="text-2xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
            {job.title}
          </h1>
          <p className="text-md md:text-lg font-light drop-shadow-md">
            {job.department} • {job.location}
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
          <JobDescriptionView job={job} />
          <JobApplyClient job={job} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobPage;

export async function generateStaticParams() {
  return (await getJobs()).map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    return {
      title: "Job Not Found",
      description: "The requested job opening could not be found.",
    };
  }

  return {
    title: `${job.title} | Careers at LifeFirst`,
    description:
      job.summary ||
      `Apply for the ${job.title} role (${job.department}) at LifeFirst, ${job.location}.`,
  };
}
