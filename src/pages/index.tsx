import { Inter } from "next/font/google";
import { Layout } from "@/components/layout";
import SalesTrend from "@/components/dashboard/SalesTrend";
import TrendCards from "@/components/dashboard/TrendCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div className="container mt-16 overflow-y-scroll pt-5">
          <div className="gap-4 xl:flex">
            <div className="flex-1">
              <SalesTrend />
            </div>
            <div className="flex-1">
              <TrendCards />
            </div>
            {/* <div className="col-span-2">
              <div className="bg-gray-300 p-4">Column 1 - 60%</div>
            </div>
            <div className="col-span-2">
              <div className="bg-gray-300 p-4">Column 2 - 40%</div>
            </div> */}
          </div>
        </div>
      </Layout>
    </main>
  );
}
