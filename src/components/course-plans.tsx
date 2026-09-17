"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { CoursePricing } from "@/components/course-catalog";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Both plans render on desktop, side by side. On mobile the toggle swaps
 * which one is visible instead of squeezing two narrow columns — the CSS
 * keeps every plan in the DOM and only hides the inactive one below the
 * `.course-plans` mobile breakpoint.
 */
export function CoursePlans({ plans }: { plans: CoursePricing["plans"] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="course-plans">
      {plans.length > 1 ? (
        <div className="course-plans-toggle" role="tablist" aria-label="Planos">
          {plans.map((plan, index) => (
            <button
              key={plan.name}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              {plan.name}
            </button>
          ))}
        </div>
      ) : null}

      {plans.map((plan, index) => (
        <article
          key={plan.name}
          className={`${plan.featured ? "is-featured" : ""}${
            active === index ? " is-active" : ""
          }`}
        >
          {plan.badge ? (
            <p className="course-plan-badge">
              <Sparkles className="size-3.5" strokeWidth={2.4} aria-hidden />
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
          {plan.note ? <p className="course-plan-note">{plan.note}</p> : null}
          {plan.secondaryCta ? (
            <Link href={plan.secondaryCta.href} className="course-plan-secondary">
              {plan.secondaryCta.label}
              <ArrowRight className="size-3.5" strokeWidth={2.4} aria-hidden />
            </Link>
          ) : null}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="course-cta">
            Quero me inscrever
            <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
          </a>
        </article>
      ))}
    </div>
  );
}
