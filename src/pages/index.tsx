import { Inter } from "next/font/google";
import { Layout } from "@/components/layout";
import SalesTrend from "@/components/dashboard/SalesTrend";
import TrendCards from "@/components/dashboard/TrendCards";
import LastOrders from "@/components/dashboard/LastOrders";
import TopPlatforms from "@/components/dashboard/TopPlatforms";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>Geegpay Dashboard</title>
      </Head>
      <Layout>
        <div className="mt-16 px-6 pt-5">
          <div className="gap-4 xl:grid xl:grid-cols-12">
            <div className="xl:col-span-7 xl:flex-1">
              <SalesTrend />
            </div>
            <div className="xl:col-span-5 xl:flex-1">
              <TrendCards />
            </div>
          </div>
          <div className="mb-8 mt-4 gap-4 xl:grid xl:grid-cols-12">
            <div className="xl:col-span-7 xl:flex-1">
              <LastOrders />
            </div>
            <div className="mt-4 sm:mt-0 xl:col-span-5 xl:flex-1">
              <TopPlatforms />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
