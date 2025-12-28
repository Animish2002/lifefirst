"use client";
import Footer from "@/Landing/Footer";
import Navigation from "@/Landing/Navigation";
import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { investorNews } from "@/data/investors";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import TurnstileWidget, { TurnstileWidgetRef } from "../TurnstileWidget";

const Page = () => {
  const [openNewsId, setOpenNewsId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const turnstileRef = useRef<TurnstileWidgetRef>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  useEffect(() => {
    if (isDialogOpen) {
      // focus first input when dialog opens
      setTimeout(() => firstInputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
      // Reset turnstile after dialog is fully mounted
      setTimeout(() => {
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
      }, 300);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDialogOpen]);

  const toggleNews = (id: number) => {
    setOpenNewsId(openNewsId === id ? null : id);
  };

  const openRequestModal = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", reason: "" });
    setIsDialogOpen(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.reason.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Get Turnstile token
    const token = turnstileRef.current?.getToken();
    if (!token) {
      alert("Please complete the security verification.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("https://formflowapi.thefortune.club/api/submit/6c412278-0ba7-4b02-a9d0-47069fbf31a7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          reason: form.reason,
          turnstileToken: token, // Include the Turnstile token
        }),
      });

      if (!res.ok) {
        throw new Error("Formflow submission failed");
      }

      console.log("Submitted:", form);
      setSubmitted(true);
      setTimeout(() => setIsDialogOpen(false), 1200);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
      // Reset Turnstile on error so user can try again
      turnstileRef.current?.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navigation />
      <div className="relative md:mt-26 mt-24 overflow-hidden" />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Investor News
          </h1>
          <p className="text-md md:text-lg font-light drop-shadow-md max-w-2xl mx-auto">
            Stay up-to-date with our latest financial reports, press releases,
            and corporate announcements.
          </p>
        </div>
      </section>

      {/* News */}
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Latest Updates
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[...investorNews]
              .sort((a, b) => {
                // Parse dates from strings like "August 27, 2025"
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                // Sort in descending order (latest first)
                return dateB.getTime() - dateA.getTime();
              })
              .map((news) => (
                <AccordionItem key={news.id} value={news.id}>
                  <AccordionTrigger>
                    <div className="flex flex-col items-start">
                      <h3 className="text-xl font-semibold text-gray-900 text-left">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-500 text-left">
                        {news.date}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-700">{news.description}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Financial Filings
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Access our complete library of financial documents and reports.
          </p>

          <Button
            onClick={openRequestModal}
            className="inline-flex items-center rounded-full px-8 py-3 bg-blue-600 hover:bg-blue-700"
          >
            Request Fillings
          </Button>
        </div>
      </section>

      <Footer />

      {/* Request Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-lg md:max-w-xl w-full max-h-[90vh] rounded-2xl border border-white/20 shadow-2xl p-0 overflow-y-auto">
          {/* Frosted Blur */}
          <div className="fixed inset-0 -z-10 backdrop-blur-md" />

          {/* Header */}
          <div className="px-4 sm:px-6 py-4 sticky top-0 bg-white z-10 border-b">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold">
                Request Financial Reports
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base">
                Fill in your details and we&apos;ll send the latest filings.
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      ref={firstInputRef}
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="reason">Reason for Request</Label>
                  <Textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    className="mt-1"
                    placeholder="Tell us what you need the reports for..."
                    value={form.reason}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Turnstile Widget with ref */}
                <div className="py-3 sm:py-4 min-h-[80px] flex items-center justify-center w-full overflow-visible">
                  <TurnstileWidget key={`turnstile-${isDialogOpen}`} ref={turnstileRef} />
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setIsDialogOpen(false)}
                    className="rounded-full w-full sm:w-auto"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                  >
                    {submitting ? "Submitting..." : "Send Request"}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-2xl">✔</span>
                </div>
                <p className="text-green-600 font-semibold">
                  Request submitted successfully!
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;