import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import About from "@/components/About";
import Outputs from "@/components/Outputs";
import Plugins from "@/components/Plugins";
import Closing from "@/components/Closing";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Outputs />
      <Plugins />
      <About />
      <Closing />
      <Reveal />
    </>
  );
}
