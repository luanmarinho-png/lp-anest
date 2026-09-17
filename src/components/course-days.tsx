"use client";

import { CalendarDays } from "lucide-react";
import { useState } from "react";
import type { CourseSchedule } from "@/components/course-catalog";

/**
 * Both days render on desktop, side by side. On mobile the toggle swaps
 * which one is visible instead of stacking them tall — the CSS keeps
 * every `.course-day` in the DOM and only hides the inactive one below
 * the `.course-days` mobile breakpoint.
 */
export function CourseDays({ days }: { days: CourseSchedule["days"] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="course-days">
      {days.length > 1 ? (
        <div className="course-days-toggle" role="tablist" aria-label="Dias do curso">
          {days.map((day, index) => (
            <button
              key={day.label}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              {day.label}
            </button>
          ))}
        </div>
      ) : null}

      {days.map((day, index) => (
        <article
          key={day.label}
          className={`course-day${active === index ? " is-active" : ""}`}
        >
          <header>
            <p className="course-day-label">{day.label}</p>
            <p className="course-day-date">
              <CalendarDays className="size-4" strokeWidth={2.4} aria-hidden />
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
  );
}
