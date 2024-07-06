import Image from "next/image";
import Stripes from "./lib/stripes/stripes";

export default function Home() {
  return (
    <main className="w-full h-screen bg-primary ">
      <div className="relative grid justify-between overflow-hidden">
        <Stripes />
      </div>
    </main>
  );
}
