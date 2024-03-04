import { Background } from "@/components/Background";
import { TypedAnimation } from "@/components/TypedAnimation";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen relative overflow-x-hidden flex justify-center items-center">
        <div className="absolute z-[-1] w-screen min-w-[700px] max-w-[2200px] h-[100%] right-0 xl:left-0">
          <Background />
        </div>
        <div className="w-[80%] text-txt-secondary mb-24">
          <TypedAnimation className="font-medium text-4xl">
            {"<Lucas Tenorio/>"}
          </TypedAnimation>
          <TypedAnimation className="font-light mt-2 text-lg" ms={40}>
            A talented software developer with over 4 years of experience
            building production-ready products for companies.
          </TypedAnimation>
        </div>
      </div>
    </main>
  );
}
