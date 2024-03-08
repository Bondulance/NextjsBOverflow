import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Find Jobs</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for jobs"
          otherClasses="flex-1"
        />
      </div>
    </>
  );
};

export default Page;
