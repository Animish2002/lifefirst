"use client";
import React, { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import TurnstileWidget, { TurnstileWidgetRef } from "../../TurnstileWidget";
import { applyUrl, Job, JobFormField } from "@/lib/careers";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RESUME_MAX_BYTES = 5 * 1024 * 1024;

const fieldClass =
  "h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]";

/** One of the questions HR chose for this job. */
function Question({ field, error }: { field: JobFormField; error?: string }) {
  const name = `answer:${field.key}`;
  const id = `q-${field.key}`;
  const label = (
    <Label htmlFor={id} className="text-xs">
      {field.label}
      {!field.required && <span className="font-normal text-gray-500"> (optional)</span>}
    </Label>
  );
  let control: React.ReactNode;
  switch (field.type) {
    case "textarea":
      control = <Textarea id={id} name={name} required={field.required} rows={4} maxLength={3000} />;
      break;
    case "number":
      control = <Input id={id} name={name} type="number" min={0} step="any" required={field.required} className="h-9" />;
      break;
    case "date":
      control = <Input id={id} name={name} type="date" required={field.required} className="h-9" />;
      break;
    case "url":
      control = <Input id={id} name={name} type="url" placeholder="https://" required={field.required} className="h-9" />;
      break;
    case "yes_no":
    case "select": {
      const options = field.type === "yes_no" ? [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] : (field.options ?? []).map((o) => ({ value: o, label: o }));
      control = (
        <select id={id} name={name} required={field.required} defaultValue="" className={fieldClass}>
          <option value="" disabled={field.required}>
            Choose…
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
      break;
    }
    default:
      control = <Input id={id} name={name} required={field.required} maxLength={300} className="h-9" />;
  }
  return (
    <div className="space-y-1">
      {label}
      {control}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

type ApiFailure = { success: false; error: { message: string; code?: string; details?: Record<string, string[]> } };

const JobApplyClient = ({ job }: { job: Job }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const turnstileRef = useRef<TurnstileWidgetRef>(null);

  // Reset Turnstile on mount so the token is fresh for this page load
  useEffect(() => {
    setTimeout(() => {
      turnstileRef.current?.reset();
    }, 300);
  }, [turnstileKey]);

  const freshCheck = () => {
    turnstileRef.current?.reset();
    setTurnstileKey((k) => k + 1);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const resume = (form.elements.namedItem("resume") as HTMLInputElement).files?.[0];
    if (!resume) {
      setFieldErrors({ resume: "Attach your resume" });
      return;
    }
    if (resume.size > RESUME_MAX_BYTES) {
      setFieldErrors({ resume: "The resume is too large (5 MB at most)" });
      return;
    }
    const token = turnstileRef.current?.getToken();
    if (!token) {
      setFormError("Please complete the security check.");
      return;
    }

    // Name, email, phone, resume and consent as fields; the job's own questions as one JSON object.
    const data = new FormData(form);
    const body = new FormData();
    const answers: Record<string, string> = {};
    for (const [key, value] of data.entries()) {
      if (key.startsWith("answer:")) {
        if (typeof value === "string" && value.trim()) answers[key.slice(7)] = value.trim();
      } else {
        body.append(key, value);
      }
    }
    body.set("consent", data.get("consent") === "on" ? "true" : "false");
    body.append("answers", JSON.stringify(answers));
    body.append("turnstileToken", token);

    setLoading(true);
    try {
      const response = await fetch(applyUrl(job.slug), { method: "POST", body });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setSelectedFileName("");
        return;
      }
      const failure = (await response.json().catch(() => null)) as ApiFailure | null;
      const details = failure?.error.details ?? {};
      const errors: Record<string, string> = {};
      for (const [key, messages] of Object.entries(details)) {
        if (Array.isArray(messages) && messages[0]) errors[key.replace(/^answers\./, "")] = messages[0];
      }
      setFieldErrors(errors);
      setFormError(
        response.status === 429
          ? "Too many applications from here. Please try again later."
          : (failure?.error.message ?? "Something went wrong. Please try again later."),
      );
      freshCheck();
    } catch (error) {
      console.error("Application submission error:", error);
      setFormError("We couldn't send your application. Please check your connection and try again.");
      freshCheck();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:sticky lg:top-28 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">
          Apply for this role
        </h2>
      </div>

      <div className="p-6">
        {submitted ? (
          <div className="text-center py-4">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              Application submitted
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              Thank you for applying to {job.title}. We&apos;ve emailed you a
              confirmation, and we&apos;ll get back to you if your profile is a
              match.
            </p>
            <Link
              href="/careers"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Back to Careers
            </Link>
          </div>
        ) : !job.acceptingApplications ? (
          <div className="text-center py-4">
            <p className="text-sm text-gray-600 mb-5">
              This role is no longer accepting applications.
            </p>
            <Link
              href="/careers"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              See current openings
            </Link>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="apply-name" className="text-xs">Full Name</Label>
              <Input id="apply-name" name="name" required minLength={2} maxLength={120} autoComplete="name" className="h-9" />
              {fieldErrors.name && <p className="text-xs text-red-600">{fieldErrors.name}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="apply-email" className="text-xs">Email</Label>
              <Input id="apply-email" name="email" type="email" required autoComplete="email" className="h-9" />
              {fieldErrors.email && <p className="text-xs text-red-600">{fieldErrors.email}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="apply-phone" className="text-xs">Phone</Label>
              <Input id="apply-phone" name="phone" type="tel" required autoComplete="tel" pattern="\+?[0-9 ()\-]{7,20}" className="h-9" />
              {fieldErrors.phone && <p className="text-xs text-red-600">{fieldErrors.phone}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="apply-resume" className="text-xs">Resume (PDF or Word, up to 5 MB)</Label>
              <Input
                id="apply-resume"
                type="file"
                name="resume"
                required
                className="h-9"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setSelectedFileName(file ? file.name : "");
                }}
              />
              {selectedFileName && (
                <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  Selected:{" "}
                  <span className="font-medium">{selectedFileName}</span>
                </p>
              )}
              {fieldErrors.resume && <p className="text-xs text-red-600">{fieldErrors.resume}</p>}
            </div>

            {job.formFields.map((field) => (
              <Question key={field.key} field={field} error={fieldErrors[field.key]} />
            ))}

            <label className="flex items-start gap-2 text-xs text-gray-600">
              <input type="checkbox" name="consent" required className="mt-0.5" />
              <span>
                I agree that LifeFirst may store my details and resume to
                consider me for this and similar roles. See our{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700">
                  privacy policy
                </Link>
                .
              </span>
            </label>
            {fieldErrors.consent && <p className="text-xs text-red-600">{fieldErrors.consent}</p>}

            <div className="py-2 min-h-[80px] flex items-center justify-center w-full overflow-visible">
              <TurnstileWidget
                key={`turnstile-${turnstileKey}`}
                ref={turnstileRef}
              />
            </div>

            {formError && (
              <p role="alert" className="text-sm text-red-600">
                {formError}
              </p>
            )}

            <Button
              className="w-full rounded-full h-9 bg-blue-600 hover:bg-blue-700"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JobApplyClient;
