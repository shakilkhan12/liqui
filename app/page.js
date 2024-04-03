import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import News from "@/components/News";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <Companies />
      <div className="bg-[url('/images/bg.png')] bg-cover w-full h-full bg-no-repeat">
        <Cards />
        <Intro />
        <Work />
        <News />
      </div>

      <Footer />
    </main>
  );
}
