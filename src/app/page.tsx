import { Hero } from "@/components/ui";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "tuna.dev - Xách dép chạy deadline",
  description: "Xin chào, đây là trang của một anh dev mới tập tành làm web",
};

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="container mx-auto py-4 px-12">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
