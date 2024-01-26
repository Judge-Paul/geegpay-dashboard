import { Inter } from "next/font/google";
import { Layout } from "@/components/layout";
import SalesTrend from "@/components/dashboard/SalesTrend";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Layout>
        <div className="container mt-16 grid w-full grid-cols-1 gap-4 overflow-y-scroll pt-5 md:grid-cols-5">
          <div className="col-span-3">
            <SalesTrend />
          </div>
          <div className="col-span-2">
            <div className="bg-gray-300 p-4">Column 2 - 40%</div>
          </div>
          <div className="col-span-3">
            <div className="bg-gray-300 p-4">Column 1 - 60%</div>
          </div>
          <div className="col-span-2">
            <div className="bg-gray-300 p-4">Column 2 - 40%</div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
