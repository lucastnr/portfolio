const skills = ["JavaScript", "TypeScript", "React", "Node.js", "Express.js"];

export function SkillsSection() {
  return (
    <div>
      {skills.map((skill) => (
        <p key={skill}>{skill}</p>
      ))}
    </div>
  );
}
