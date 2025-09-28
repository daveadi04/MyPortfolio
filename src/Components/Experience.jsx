// src/Components/Experience.jsx
function Tag({ children }) {
  return (
    <span className="rounded-full border px-2.5 py-1 text-[11px] opacity-90">
      {children}
    </span>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 text-[11px]">
      {children}
    </span>
  );
}

function Dot({ index }) {
  return (
    <div className="relative z-10">
      <div className="absolute -inset-3 rounded-full bg-primary/10 blur" />
      <div className="size-4 rounded-full bg-primary shadow ring-4 ring-primary/20 flex items-center justify-center text-[10px] text-primary-foreground font-semibold">
        {index + 1}
      </div>
    </div>
  );
}

export default function Experience() {
  const items = [
    {
      role: "Technical Support Engineer",
      company: "TRADER Corporation",
      location: "Ontario, Canada",
      dates: "Sept 2024 – Aug 2025",
      badges: ["90% FPR", "−40% manual", "500+ users"],
      bullets: [
        "90% first-pass fixes across Jira / Azure AD / Exchange incidents.",
        "Jira automations → −40% manual entry, −20% team effort.",
        "Admin for Azure AD/AD, Intune, Okta; Citrix VAD support (3 migrations, 500+ users).",
      ],
      tags: ["Jira", "Azure AD", "Intune", "Okta", "Exchange", "Citrix"],
    },
    {
      role: "Network System Administrator",
      company: "Life Labs",
      location: "Mississauga, ON",
      dates: "Jan 2024 – Apr 2024",
      badges: ["+20% efficiency", "−30% downtime", "95% tickets"],
      bullets: [
        "Cisco switch rollout & config across sites.",
        "Monitoring uplift: +20% efficiency, −30% downtime.",
        "~95% ticket resolution with prompt SLAs.",
      ],
      tags: ["Cisco", "Switching", "Monitoring", "Networking"],
    },
    {
      role: "Student Ambassador",
      company: "Sheridan College",
      location: "Oakville, ON",
      dates: "Sept 2024 – Apr 2025",
      badges: ["20+ events", "+30% engagement"],
      bullets: [
        "Led 20+ tours & events; ~30% higher engagement.",
        "Frontline support for prospective students & visitors.",
      ],
      tags: ["Events", "Public Speaking", "Customer Service"],
    },
  ];

  return (
    <section id="experience" className="section relative">
      {/* central glow line */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent"
      />

      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <ol className="relative space-y-14">
          {items.map((item, i) => {
            const left = i % 2 === 0; // alternate cards
            return (
              <li key={i} className="relative">
                {/* node on spine */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2">
                  <Dot index={i} />
                </div>

                {/* date chip (desktop) */}
                <div
                  className={[
                    "hidden md:block absolute top-2 text-xs opacity-70",
                    left ? "right-[calc(50%+1rem)]" : "left-[calc(50%+1rem)]",
                  ].join(" ")}
                >
                  {item.dates}
                </div>

                {/* connector from spine to card */}
                <div
                  aria-hidden
                  className={[
                    "hidden md:block absolute top-12 h-0.5 w-10",
                    left
                      ? "right-[calc(50%+8px)] bg-gradient-to-l from-primary/50 to-transparent"
                      : "left-[calc(50%+8px)] bg-gradient-to-r from-primary/50 to-transparent",
                  ].join(" ")}
                />

                {/* journey card */}
                <article
                  className={[
                    "group card p-6 md:p-7 backdrop-blur-sm transition",
                    "hover:translate-y-[-3px]",
                    left ? "md:mr-[55%]" : "md:ml-[55%]",
                  ].join(" ")}
                >
                  <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-lg font-semibold">
                      {item.role}{" "}
                      <span className="opacity-70 font-normal">
                        · {item.company}
                      </span>
                    </h3>
                    <div className="sm:hidden text-sm opacity-70">
                      {item.dates}
                    </div>
                  </header>

                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <div className="text-sm opacity-80">{item.location}</div>
                    <span className="hidden sm:inline opacity-40">•</span>
                    <div className="flex flex-wrap gap-2">
                      {item.badges.map((b) => (
                        <Badge key={b}>{b}</Badge>
                      ))}
                    </div>
                  </div>

                  <ul className="mt-3 space-y-2 leading-relaxed">
                    {item.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full bg-primary/70 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  {/* hover sheen */}
                  <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-br from-primary/10 to-fuchsia-400/10 mix-blend-overlay" />
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
