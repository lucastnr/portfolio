import Image from "next/image";

export function Profile() {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 gap-4">
      <Image
        className="rounded-full"
        width={128}
        height={128}
        src="https://placekitten.com/128/128"
        alt="TODO: add alt"
      />
      <div className="text-center md:text-left md:flex-1">
        <h2>Lucas Tenorio</h2>
        <p className="text-txt-secondary">Software Engineer</p>
        <p className="text-txt-secondary">Maceió, Brazil</p>
      </div>
      <a
        className="bg-primary py-2 px-3 rounded-xl font-bold w-full md:w-fit text-center"
        href="/"
      >
        Contact
      </a>
    </div>
  );
}
