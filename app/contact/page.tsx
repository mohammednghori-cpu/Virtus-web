"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-24 text-white">
        <div className="container-v">
          <span className="eyebrow text-cyan">Connect With Us</span>

          <h1 className="text-5xl font-black sm:text-6xl">
            Get in Touch
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us what you are building, sourcing or integrating.
            Our team can help shape the next step.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="container-v grid gap-10 py-20 lg:grid-cols-[.75fr_1.25fr]">

        {/* Contact Details */}
        <div className="space-y-4">

          {/* Location */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <MapPin className="h-6 w-6 text-cyan" />

            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Location
            </div>

            <div className="mt-2 font-black leading-7 text-navy">
              Bengaluru, Karnataka
            </div>
          </div>

          {/* Email */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <Mail className="h-6 w-6 text-cyan" />

            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Email
            </div>

            <a
              href="mailto:sales@virtusda.com"
              className="mt-2 block font-black text-navy hover:text-cyan"
            >
              sales@virtusda.com
            </a>
          </div>

          {/* Phone */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <Phone className="h-6 w-6 text-cyan" />

            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Phone
            </div>

            <div className="mt-2 space-y-2 font-black text-navy">
              <a
                href="tel:+917019926676"
                className="block hover:text-cyan"
              >
                +91 7019926676
              </a>

              <a
                href="tel:+919380586656"
                className="block hover:text-cyan"
              >
                +91 9380586656
              </a>
            </div>
          </div>

        </div>

        {/* Enquiry Form */}
        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl sm:p-10"
        >
          <h2 className="text-2xl font-black text-navy">
            Start a conversation
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">

            <input
              required
              name="name"
              placeholder="Name"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Business email"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan"
            />

            <input
              name="company"
              placeholder="Company / Organisation"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan sm:col-span-2"
            />

            <select
              name="interest"
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan sm:col-span-2"
            >
              <option>Product enquiry</option>
              <option>Engineering / Design Services</option>
              <option>Manufacturing / Build-to-Print</option>
              <option>Solutions / COTS Boards</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>

            <textarea
              required
              name="message"
              placeholder="Tell us about your requirement"
              rows={6}
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan sm:col-span-2"
            />

          </div>

          <button
            className="btn-primary mt-6"
            type="submit"
          >
            <Send className="mr-2 h-4 w-4" />
            Send Enquiry
          </button>

          {sent && (
            <p className="mt-4 rounded-xl bg-ice p-4 text-sm font-semibold text-navy">
              Demo form submitted. Connect this form to your preferred
              email/API service before production.
            </p>
          )}
        </form>

      </section>
    </div>
  );
}