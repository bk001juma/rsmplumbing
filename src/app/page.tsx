import { Metadata } from "next";
import Banner from "./components/home/hero";
import About from "./components/home/about";
import Simple from "./components/home/simple";
import Services from "./components/home/services";
import ProjectsTestimonials from "./components/home/companies";

export const metadata: Metadata = {
  title: "RSM",
  description: "RSM — Your trusted partner",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <Simple />
      <ProjectsTestimonials/>
    </main>
  );
}
