// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "lg";
  variant?: "outline";
};

type IconProps = {
  className?: string;
};

type Capability = string;

function Button({
  children,
  className = "",
  size,
  variant,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition";
  const height = size === "lg" ? "h-12 text-base" : "h-10 text-sm";

  return (
    <button className={`${base} ${height} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Icon({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      {label}
    </span>
  );
}

const ArrowRight = ({ className = "" }: IconProps) => (
  <Icon label="→" className={className} />
);

const Gauge = ({ className = "" }: IconProps) => (
  <Icon label="◉" className={className} />
);

const Mail = ({ className = "" }: IconProps) => (
  <Icon label="✉" className={className} />
);

const Phone = ({ className = "" }: IconProps) => (
  <Icon label="☎" className={className} />
);

const capabilities: Capability[] = [
  "Engineering support & DFMA",
  "FEA analysis & assembly modeling",
  "Multi-axis machining & turning",
  "Prototype, R&D & production manufacturing",
  "Complex assemblies & fixture development",
  "Aerospace, defense & motorsports components",
  "Integrated post-processing & finishing",
  "Inspection, quality & documentation support",
];

export default function ManufacturingWebsite() {
  return (
    <div className="min-h-screen bg-[#f3f3ef] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-300 bg-[#f3f3ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Taylor Manufacturing"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-zinc-700 md:flex">
            <Link href="/capabilities" className="hover:text-zinc-900">
              Capabilities
            </Link>
            <a href="#quality" className="hover:text-zinc-900">
              Quality
            </a>
            <a href="#industries" className="hover:text-zinc-900">
              Industries
            </a>
            <a href="#contact" className="hover:text-zinc-900">
              Contact
            </a>
          </nav>

          <a
            href="mailto:quotes@taylormanufacturingus.com"
            className="inline-flex h-10 items-center justify-center rounded-2xl bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            Email RFQ
          </a>
        </div>
      </header>

      <main className="bg-[#f3f3ef] text-zinc-900">
        <section className="relative overflow-hidden border-b border-zinc-200 bg-[#f3f3ef]">
          <div className="absolute inset-0">
            <img
              src="/images/logo.png"
              alt=""
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 w-[1500px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-50"
            />
            <div className="absolute inset-0 bg-[#f3f3ef]/85" />
          </div>

          <div className="relative mx-auto grid max-w-[1600px] items-center gap-20 px-8 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-4 py-2 text-sm text-zinc-700">
                <Gauge className="h-4 w-4" />
                Quality-driven manufacturing for demanding applications
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.03em] text-zinc-900 md:text-7xl">
                High-performance manufacturing built around precision and
                quality.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
                Taylor Manufacturing delivers precision manufacturing and
                engineering support for motorsports, aerospace, industrial, and
                prototype applications with a strong emphasis on quality,
                inspection, and repeatability.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:quotes@taylormanufacturingus.com"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-7 text-base font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  Start an RFQ <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href="/capabilities"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/70 px-7 text-base font-semibold text-zinc-900 transition hover:bg-white"
                >
                  View Capabilities
                </Link>
              </div>

              <div className="mt-10 grid gap-4 text-sm text-zinc-700 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-300 bg-white/70 p-4">
                  <p className="text-2xl font-medium text-zinc-900">
                    Precision
                  </p>
                  <p>Automated quality-focused manufacturing</p>
                </div>

                <div className="rounded-2xl border border-zinc-300 bg-white/70 p-4">
                  <p className="text-2xl font-medium text-zinc-900">Quality</p>
                  <p>
                    In-process part inspection and attention to detail on every
                    surface
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-300 bg-white/70 p-4">
                  <p className="text-2xl font-medium text-zinc-900">QC</p>
                  <p>Inspection-focused workflow</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-300 shadow-none">
                <img
                  src="/images/milling-img1.png"
                  alt="CNC machining"
                  className="h-[520px] w-full object-cover opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#f3f3ef]/70 via-[#f3f3ef]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 text-zinc-700">
                    <div className="h-2 w-2 rounded-full bg-orange-400" />
                    <p className="text-sm uppercase tracking-[0.3em]">
                      QUALITY • PROCESS CONTROL • PRECISION
                    </p>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-zinc-900">
                    Precision manufacturing driven by quality, process control,
                    and repeatability. No shortcuts. No compromises.
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="capabilities" className="border-t border-zinc-300">
          <div className="grid lg:grid-cols-2">
            <div className="min-h-[700px] overflow-hidden">
              <img
                src="/images/capabilities-milling-image1.webp"
                alt="Precision machining"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center bg-[#ecece7] px-12 py-20 lg:px-20">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                  Capabilities
                </p>

                <h2 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900">
                  Engineering-driven manufacturing built around quality and
                  repeatability.
                </h2>

                <div className="mt-14 space-y-6 border-t border-zinc-300 pt-10 text-xl text-zinc-700">
                  {capabilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-zinc-300 pb-5"
                    >
                      <span>{item}</span>
                      <ArrowRight className="text-zinc-600" />
                    </div>
                  ))}
                </div>

                <Link
                  href="/capabilities"
                  className="mt-10 inline-flex h-12 items-center justify-center rounded-2xl bg-zinc-950 px-7 text-base font-semibold text-white transition hover:bg-zinc-800"
                >
                  Full Capabilities
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="quality" className="border-t border-zinc-300 bg-[#efefe9]">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="flex items-center px-10 py-24 lg:px-20">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                  Quality
                </p>

                <h2 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900">
                  Quality is the foundation of every component we manufacture.
                </h2>

                <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-700">
                  <p>
                    Every component begins with print review, planning,
                    tolerance evaluation, and a defined inspection strategy
                    before machining begins.
                  </p>

                  <p>
                    Inspection, traceability, and process control are treated as
                    part of the manufacturing workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid min-h-[700px] grid-cols-2 gap-px bg-white/70">
              <img
                src="/images/Shot-3.jpg"
                alt="Inspection"
                className="h-full w-full object-cover object-center scale-95"
              />
              <img
                src="/images/InsepctionBanner-575x400.jpg"
                alt="Inspection equipment"
                className="h-full w-full object-cover object-left scale-100"
              />
            </div>
          </div>
        </section>

        <section id="industries" className="border-t border-zinc-300 bg-[#f3f3ef]">
          <div className="px-10 py-24 lg:px-20">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              Industries
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-900">
              Engineering and manufacturing support for high-performance and
              mission-critical industries.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3">
            <div className="relative h-[520px] overflow-hidden border-t border-zinc-300">
              <img
                src="/images/aerospace.jpg"
                alt="Aerospace and defense"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <p className="text-3xl font-semibold text-white">
                  Aerospace & Defense
                </p>
              </div>
            </div>

            <div className="relative h-[520px] overflow-hidden border-t border-zinc-300 lg:border-l">
              <img
                src="/images/motorsports.webp"
                alt="Motorsports"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <p className="text-3xl font-semibold text-white">
                  Motorsports
                </p>
              </div>
            </div>

            <div className="relative h-[520px] overflow-hidden border-t border-zinc-300 lg:border-l">
              <img
                src="/images/industrial.jpg"
                alt="Industrial and prototype"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <p className="text-3xl font-semibold text-white">
                  Industrial & Prototype
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 pt-20">
          <div className="overflow-hidden rounded-[1.25rem] border border-zinc-300 bg-[#f5f5f3] text-zinc-950 shadow-none">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.8fr]">
              <div className="p-8 md:p-12">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
                  Request a Quote
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  Send your print. Get a clear path forward.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                  Include a PDF print, STEP file, material, quantity, finish
                  requirements, tolerance requirements, and target delivery
                  date.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:quotes@taylormanufacturingus.com"
                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-zinc-950 px-7 text-base font-semibold text-white transition hover:bg-zinc-800"
                  >
                    Email RFQ <Mail className="ml-2 h-4 w-4" />
                  </a>

                  <Link
                    href="/capabilities"
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-zinc-300 px-7 text-base font-semibold text-zinc-950 transition hover:bg-zinc-50"
                  >
                    Capabilities
                  </Link>
                </div>
              </div>

              <div id="contact" className="bg-zinc-100 p-8 md:p-12">
                <h3 className="text-2xl font-semibold">Contact</h3>

                <div className="mt-6 space-y-5 text-zinc-700">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <a
                      href="mailto:quotes@taylormanufacturingus.com"
                      className="hover:text-zinc-950"
                    >
                      quotes@taylormanufacturingus.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <a href="tel:5209819556" className="hover:text-zinc-950">
                      (520) 981-9556
                    </a>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
                  <p className="font-medium">RFQ checklist</p>

                  <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                    <li>• PDF print and STEP model</li>
                    <li>• Quantity and material</li>
                    <li>• Required finish or coating</li>
                    <li>• Delivery target</li>
                    <li>• Inspection or cert requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-300 px-6 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Taylor Manufacturing •
        TaylorManufacturingUS.com
      </footer>
    </div>
  );
}
