import React, { lazy } from "react";

import AppSidebar from "@/components/AppSidebar";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("./page"), {
  loading: () => <div>Loading....</div>,
});
const layout = () => {
  return (
    <main className="fullContainer">
      <AppSidebar />
      <section className="overflow-auto">
        <Page />
      </section>
    </main>
  );
};

export default layout;
