import Footer from "@/components/footer";
import About from "./(components)/about/page";
import Contacts from "./(components)/contacts/page";
import Hero from "./(components)/hero/page";
import Project from "./(components)/projects/page";
import Skills_Experience from "./(components)/skills/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills_Experience />
      <Project />
      <Contacts />
      <Footer />
    </main>
  );
}
