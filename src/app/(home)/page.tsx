"use client";

import { Navbar } from "./navbar";
import { TemplateGallery } from "./template-gallery";
import { api } from "../../../convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { DocumentTable } from "./documents-table";

const Home = () => {
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    {},
    { initialNumItems: 5 }
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentTable
          documents={results}
          status={status}
          loadMore={loadMore}
        />
      </div>
    </div>
  );
};

export default Home;
