'use client';
import About from "@/components/Page/About";
import Footer from "@/components/Page/Footer";
import Hero from "@/components/Page/Hero";
import Performance from "@/components/Page/Performance";
import Sentiment from "@/components/Page/Sentiment";
import SidePanel from "@/components/Page/SidePanel";
import AboutTeam from "@/components/Page/Team";
import Tokenomics from "@/components/Page/Tokenomics";
import BreadCrumb from "@/components/common/BreadCrumb";
import ErrorPage from "@/components/common/ErrorPage";
import TabMenuComp from "@/components/common/TabMenu";
import { useGetCoinDetails } from "@/lib/Api/FetchCoinDetails";
import { useHome } from "@/lib/Context/HomeContext";
import { useEffect, useState } from "react";

export default function Main({ params }: { params: { coinId: string } }) {
  const { coinId } = params;
  const { setCoinData } = useHome();
  const { data, isError } = useGetCoinDetails(coinId);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    if (isError || data?.error) {
      setNotFound(true);
    }
  }, [isError, data?.error]);
  useEffect(() => {
    setCoinData?.(data);
  }, [data, setCoinData]);

  return (
    <>
      <BreadCrumb route={coinId} />
      <main className="">
        <div className="flex lg:flex-row flex-col gap-6">
          <div className="space-y-8 flex-1">
            {
              (isError || notFound) ? (
                <ErrorPage />
              ) : (
                <>
                  <Hero coinid={coinId} />
                  <TabMenuComp />
                  <Performance />
                  <Sentiment />
                  <About />
                  <Tokenomics />
                  <AboutTeam />
                </>
              )
            }
          </div>
          <div className="basis-1/3">
            <SidePanel />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
