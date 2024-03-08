import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Companies from "@/components/Companies";
import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <Companies />
      <Cards />
      <Intro />
      <Work />
    </main>
  );
}
