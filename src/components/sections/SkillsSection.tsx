// TODO: Replace for real skills
const skills = ["Language", "Language2", "Language3", "Languag4", "Language5"];

export function SkillsSection() {
  return (
    <div>
      {skills.map((skill) => (
        <p
          className="bg-primary inline-block rounded-xl px-4 py-2 font-medium"
          key={skill}
        >
          {skill}
        </p>
      ))}
    </div>
  );
}
