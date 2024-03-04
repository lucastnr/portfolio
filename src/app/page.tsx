import { Background } from "@/components/Background";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <main>
      <div className="min-h-dvh relative overflow-x-hidden flex justify-center items-center">
        <div className="absolute w-dvw min-w-[700px] max-w-[2200px] h-[100%] right-0 xl:left-0">
          <Background />
        </div>
        <div className="w-[80%] xl:w-[1210px]mb-24">
          <Title />
          <Subtitle />
        </div>
      </div>
    </main>
  );
}
