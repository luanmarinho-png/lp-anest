"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { useRef, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import {
  VideoTestimonials,
  type Testimonial,
} from "@/components/video-testimonials";

export type CourseSection = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  /** "cover" for photographs, "contain" for device mockups. */
  fit?: "cover" | "contain";
  image: { src: string; alt: string };
};

export type Course = {
  id: string;
  name: string;
  tagline: string;
  status: "disponivel" | "em-breve";
  statusLabel?: string;
  /** Pulls the card forward as the main offer of the catalogue. */
  featured?: boolean;
  bullets: string[];
  detail?: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Brand lockup shown above the title. */
    logo?: { src: string; alt: string };
    /** Short list shown right under the lead, before the sections. */
    highlights?: string[];
    ctaLabel?: string;
    sections: CourseSection[];
    /** Vimeo/YouTube embed shown right under the header. */
    video?: { src: string; title: string };
    curriculum?: CourseCurriculum;
    /** Student videos, shown right after the header. */
    testimonials?: Testimonial[];
    pricing?: CoursePricing;
    schedule?: CourseSchedule;
    faculty?: {
      name: string;
      role: string;
      credentials: string[];
      image?: string;
    }[];
  };
};

export type CoursePricing = {
  title: string;
  lead: string;
  plans: {
    name: string;
    badge?: string;
    note?: string;
    installment: string;
    cash: string;
    bullets: string[];
    featured?: boolean;
  }[];
};

export type CourseCurriculum = {
  title: string;
  lead: string;
  groups: { label: string; caption: string; items: string[] }[];
};

export type CourseSchedule = {
  title: string;
  lead: string;
  location: string;
  seats: string;
  days: {
    label: string;
    date: string;
    hours: string;
    blocks: { time?: string; title: string; body?: string }[];
  }[];
};

export function CourseCatalog({
  courses,
  title,
  lead,
}: {
  courses: Course[];
  title: string;
  lead: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const open = courses.find((course) => course.id === openId) ?? null;

  const scrollToAnchor = () => {
    requestAnimationFrame(() => {
      anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section id="cursos" className="apple-section">
      <div ref={anchorRef} className="apple-module course-shell">
        {open?.detail ? (
          <article className="course-detail" key={open.id}>
            <button
              type="button"
              className="fase2-back"
              onClick={() => {
                setOpenId(null);
                scrollToAnchor();
              }}
            >
              <ArrowLeft className="size-4" strokeWidth={2.4} aria-hidden />
              <span>Ver todos os cursos</span>
            </button>

            <header className="course-detail-head">
              {open.detail.logo ? (
                <Image
                  src={open.detail.logo.src}
                  alt={open.detail.logo.alt}
                  width={520}
                  height={293}
                  quality={100}
                  className="course-logo"
                  priority
                />
              ) : (
                <p className="fase2-eyebrow">{open.detail.eyebrow}</p>
              )}
              <h2>{open.detail.title}</h2>
              <p>{open.detail.lead}</p>
              {open.detail.highlights?.length ? (
                <ul className="course-highlights">
                  {open.detail.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2
                        className="size-4"
                        strokeWidth={2.4}
                        aria-hidden
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="fase2-cta"
              >
                {open.detail.ctaLabel ?? "Quero me inscrever"}
                <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
              </a>
            </header>

            {open.detail.testimonials?.length ? (
              <VideoTestimonials
                variant="inline"
                eyebrow="Depoimentos"
                title="Quem já passou pelo Hands On"
                lead="Alunos contando o que mudou na prática depois dos dois dias."
                testimonials={open.detail.testimonials}
              />
            ) : null}

            {open.detail.video ? (
              <div className="course-video">
                <iframe
                  src={open.detail.video.src}
                  title={open.detail.video.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ) : null}

            {open.detail.curriculum ? (
              <section className="course-curriculum">
                <div className="course-schedule-head">
                  <p className="fase2-eyebrow">Grade curricular</p>
                  <h3>{open.detail.curriculum.title}</h3>
                  <p>{open.detail.curriculum.lead}</p>
                </div>
                <div className="course-curriculum-grid">
                  {open.detail.curriculum.groups.map((group) => (
                    <article key={group.label}>
                      <h4>{group.label}</h4>
                      <p>{group.caption}</p>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {open.detail.sections.map((section, index) => (
              <section
                key={section.title}
                className={`course-section ${index % 2 === 1 ? "is-flipped" : ""}`}
              >
                <div className="course-section-copy">
                  <p className="fase2-eyebrow">{section.eyebrow}</p>
                  <h3>{section.title}</h3>
                  <p className="course-section-body">{section.body}</p>
                  <ul className="fase2-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckCircle2
                          className="size-5"
                          strokeWidth={2.2}
                          aria-hidden
                        />
                        <div>
                          <strong>{bullet}</strong>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`course-section-visual is-${section.fit ?? "contain"}`}
                >
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(max-width: 900px) 92vw, 48vw"
                    quality={100}
                    className="course-section-image"
                    data-static-media
                  />
                </div>
              </section>
            ))}

            {open.detail.schedule ? (
              <section className="course-schedule is-highlight">
                <div className="course-schedule-head">
                  <p className="fase2-eyebrow">Estrutura do curso</p>
                  <h3>{open.detail.schedule.title}</h3>
                  <p>{open.detail.schedule.lead}</p>
                  <div className="course-facts">
                    <span>
                      <MapPin className="size-4" strokeWidth={2.4} aria-hidden />
                      {open.detail.schedule.location}
                    </span>
                    <span>
                      <Users className="size-4" strokeWidth={2.4} aria-hidden />
                      {open.detail.schedule.seats}
                    </span>
                  </div>
                </div>

                <div className="course-days">
                  {open.detail.schedule.days.map((day) => (
                    <article key={day.label} className="course-day">
                      <header>
                        <p className="course-day-label">{day.label}</p>
                        <p className="course-day-date">
                          <CalendarDays
                            className="size-4"
                            strokeWidth={2.4}
                            aria-hidden
                          />
                          {day.date}
                        </p>
                        <p className="course-day-hours">{day.hours}</p>
                      </header>
                      <ol>
                        {day.blocks.map((block) => (
                          <li key={block.title}>
                            {block.time ? <span>{block.time}</span> : null}
                            <div>
                              <strong>{block.title}</strong>
                              {block.body ? <em>{block.body}</em> : null}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {open.detail.pricing ? (
              <section className="course-pricing">
                <div className="course-schedule-head">
                  <p className="fase2-eyebrow">Investimento</p>
                  <h3>{open.detail.pricing.title}</h3>
                  <p>{open.detail.pricing.lead}</p>
                </div>
                <div className="course-plans">
                  {open.detail.pricing.plans.map((plan) => (
                    <article
                      key={plan.name}
                      className={plan.featured ? "is-featured" : ""}
                    >
                      {plan.badge ? (
                        <p className="course-plan-badge">
                          <Sparkles
                            className="size-3.5"
                            strokeWidth={2.4}
                            aria-hidden
                          />
                          {plan.badge}
                        </p>
                      ) : null}
                      <h4>{plan.name}</h4>
                      <p className="course-plan-installment">
                        <span>12x de</span> {plan.installment}
                      </p>
                      <p className="course-plan-cash">{plan.cash}</p>
                      <ul>
                        {plan.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      {plan.note ? (
                        <p className="course-plan-note">{plan.note}</p>
                      ) : null}
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="course-cta"
                      >
                        Quero me inscrever
                        <ArrowRight
                          className="size-4"
                          strokeWidth={2.4}
                          aria-hidden
                        />
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {open.detail.faculty?.length ? (
              <section className="course-faculty">
                <div className="course-schedule-head">
                  <p className="fase2-eyebrow">Corpo docente</p>
                  <h3>Quem vai corrigir a sua mão</h3>
                </div>
                <div className="course-faculty-grid">
                  {open.detail.faculty.map((person) => (
                    <article key={person.name}>
                      {person.image ? (
                        <span className="course-faculty-media">
                          <Image
                            src={person.image}
                            alt={`${person.name}, ${person.role}`}
                            fill
                            sizes="(max-width: 900px) 88vw, 28vw"
                            quality={100}
                            className="course-faculty-image"
                            data-static-media
                          />
                        </span>
                      ) : null}
                      <h4>{person.name}</h4>
                      <p>{person.role}</p>
                      <ul>
                        {person.credentials.map((credential) => (
                          <li key={credential}>{credential}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </article>
        ) : (
          <div className="apple-module-content">
            <div className="apple-stagger mx-auto max-w-5xl text-center">
              <p className="fase2-eyebrow">Cursos</p>
              <h2 className="apple-chapter-title mx-auto mt-3 max-w-3xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-[var(--muted)] text-pretty sm:text-[19px]">
                {lead}
              </p>
            </div>

            <div className="course-grid mx-auto mt-12 max-w-5xl">
              {courses.map((course) => {
                const soon = course.status === "em-breve";
                return (
                  <article
                    key={course.id}
                    className={`course-card ${soon ? "is-soon" : ""} ${
                      course.featured ? "is-featured" : ""
                    }`}
                  >
                    {course.featured ? (
                      <p className="course-flag">Mais completo</p>
                    ) : null}
                    <p className="course-status">
                      {course.statusLabel ??
                        (soon ? "Em breve" : "Inscrições abertas")}
                    </p>
                    <h3>{course.name}</h3>
                    <p className="course-tagline">{course.tagline}</p>
                    <ul>
                      {course.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    {soon ? (
                      <span className="course-cta is-disabled">Em breve</span>
                    ) : (
                      <button
                        type="button"
                        className="course-cta"
                        onClick={() => {
                          setOpenId(course.id);
                          scrollToAnchor();
                        }}
                      >
                        Conhecer
                        <ArrowRight
                          className="size-4"
                          strokeWidth={2.4}
                          aria-hidden
                        />
                      </button>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
