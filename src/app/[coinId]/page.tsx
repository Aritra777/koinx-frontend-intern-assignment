'use client';
import About from "@/components/Page/About";
import Footer from "@/components/Page/Footer";
import Hero from "@/components/Page/Hero";
import Performance from "@/components/Page/Performance";
import Sentiment from "@/components/Page/Sentiment";
import AboutTeam from "@/components/Page/Team";
import BreadCrumb from "@/components/common/BreadCrumb";
import TabMenuComp from "@/components/common/TabMenu";
import { useGetCoinDetails } from "@/lib/Api/FetchCoinDetails";
import { useHome } from "@/lib/Context/HomeContext";
import { useEffect } from "react";

export default function Main({ params }: { params: { coinId: string } }) {
  const { coinId } = params;
  const { setCoinData } = useHome();
  const { data } = useGetCoinDetails(coinId);
  useEffect(() => {
    setCoinData?.(data);
  }, [data, setCoinData]);
  return (
    <>
      <BreadCrumb route={coinId} />
      <main className="space-y-8">
        <Hero coinid={coinId} />
        <TabMenuComp />
        <Performance />
        <Sentiment />
        <About />
        <AboutTeam />
        <Footer />
      </main>
    </>
  );
}
