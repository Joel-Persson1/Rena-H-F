import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
    </div>
  );
}
