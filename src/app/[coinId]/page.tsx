import About from "@/components/Page/About";
import Hero from "@/components/Page/Hero";
import Performance from "@/components/Page/Performance";
import Sentiment from "@/components/Page/Sentiment";
import AboutTeam from "@/components/Page/Team";
import TabMenuComp from "@/components/common/TabMenu";

export default function Main({ params }: { params: { coinId: string } }) {
  const { coinId } = params;
  return (
    <main className="space-y-8">
      <Hero coinid={coinId} />
      <TabMenuComp />
      <Performance />
      <Sentiment />
      <About />
      <AboutTeam />
    </main>
  );
}
