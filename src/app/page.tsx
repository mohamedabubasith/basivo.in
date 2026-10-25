import Hero from "@/components/Hero";
import About from "@/components/About";
import Plugins from "@/components/Plugins";
import Closing from "@/components/Closing";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Plugins />
      <About />
      <Closing />
      <Reveal />
    </>
  );
}
