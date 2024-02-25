interface Experience {
  role: string;
  from: string;
  to: string;
  company: string;
  location: string;
}

// TODO: Update fore real data
const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    from: "2020",
    to: "2021",
    company: "Acme Inc.",
    location: "Mountain View, CA",
  },
  {
    role: "Backend Developer",
    from: "2018",
    to: "2020",
    company: "Acme Inc.",
    location: "Menlo Park, CA",
  },
  {
    role: "Fullstack Developer",
    from: "2016",
    to: "2018",
    company: "Acme Inc.",
    location: "Seattle, WA",
  },
];

export function ExperienceSection() {
  return (
    <div>
      {experiences.map(({ role, company, location, from, to }) => {
        return (
          <div key={role} className="border-t-[1px] border-txt-secondary/50 py-4">
            <h3 className="text-txt-secondary">{role}</h3>
            <div className="flex flex-row gap-4">
              <p>
                {from} - {to}
              </p>
              <p>{company}</p>
              <p>{location}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
