import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import NavBar from "@/components/common/NavBar";
import { QueryClientProviderWrapper } from "@/lib/Providers/Queryclient";
import { HomeProvider } from "@/lib/Context/HomeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoinX",
  description: "Created By Aritra Biswas",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HomeProvider>
        <PrimeReactProvider>
          <QueryClientProviderWrapper>
            <body className={inter.className}>
              <div>
                <NavBar />
                <div className=" bg-gray-200">
                  <div className="max-w-maxScreen mx-auto box-content px-3">
                    {children}
                  </div>
                </div>
              </div>
            </body>
          </QueryClientProviderWrapper>
        </PrimeReactProvider>
      </HomeProvider>
    </html>
  );
}
