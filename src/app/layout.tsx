import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import NavBar from "@/components/common/NavBar";
import { QueryClientProviderWrapper } from "@/lib/Providers/Queryclient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoinX",
  description: "Created By Aritra Biswas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <QueryClientProviderWrapper>
          <body className={inter.className}>
            <div>
              <NavBar />
              <div className="box-content px-3 bg-gray-200">
                {children}
              </div>
            </div>
          </body>
        </QueryClientProviderWrapper>
      </PrimeReactProvider>
    </html>
  );
}
