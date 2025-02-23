import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import Leftsidebar from "@/components/shared/leftsidebar/Leftsidebar";
import RightSidebar from "@/components/shared/rightsidebar/RightSidebar";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <Leftsidebar />

        <section
          className="flex min-h-screen flex-1
        flex-col px-6 pt-36 max-md:pb-14 sm:px-14"
        >
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>

        <RightSidebar />
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
