import { TypedAnimation } from "./TypedAnimation";

export function Title() {
  return (
    <TypedAnimation
      delay={0.5}
      className="font-medium text-4xl text-txt-secondary"
    >
      {"<Lucas Tenorio/>"}
    </TypedAnimation>
  );
}
