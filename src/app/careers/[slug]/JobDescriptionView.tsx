import { Check, FileText } from "lucide-react";
import { Job, jdUrl, salaryLabel } from "@/lib/careers";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-medium bg-blue-50 text-blue-700 rounded-full px-3 py-1.5">
    {children}
  </span>
);

const JobDescriptionView = ({ job }: { job: Job }) => {
  const salary = salaryLabel(job.salary);
  const hasDescription = job.summary || job.sections.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">
          Job Description
        </h2>
      </div>

      <div className="p-6 space-y-8">
        <div className="flex flex-wrap gap-2">
          <Chip>
            {job.openings} open position{job.openings === 1 ? "" : "s"}
          </Chip>
          <Chip>
            {job.experienceLabel === "Freshers welcome"
              ? job.experienceLabel
              : `${job.experienceLabel} experience`}
          </Chip>
          <Chip>{job.employmentTypeLabel}</Chip>
          {job.workMode !== "on_site" && <Chip>{job.workModeLabel}</Chip>}
          {salary && <Chip>{salary}</Chip>}
        </div>

        {job.summary && (
          <p className="text-gray-600 leading-relaxed text-[15px]">{job.summary}</p>
        )}

        {job.sections.map((section) => (
          <div key={section.heading}>
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              {section.heading}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-600" strokeWidth={2.5} />
                  </span>
                  <span className="text-gray-600 leading-relaxed text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {!hasDescription && !job.hasJd && (
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Job description for {job.title} is coming soon.
          </p>
        )}

        {job.hasJd && (
          <a
            href={jdUrl(job.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 transition-colors"
          >
            <FileText className="w-4 h-4" />
            View Job Description (PDF)
          </a>
        )}
      </div>
    </div>
  );
};

export default JobDescriptionView;
