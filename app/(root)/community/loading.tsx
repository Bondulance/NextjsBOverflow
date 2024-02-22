import Filters from "@/components/shared/filters/Filters";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserFilters } from "@/constants/filters";
import React from "react";

const Loading = () => {
  return (
    <section>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>

      <div
        className="mt-11 flex justify-between gap-5
      max-sm:flex-col sm:items-center"
      >
        <LocalSearchbar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
          placeholder="Search for amazing minds"
        />

        <Filters
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Skeleton
            key={item}
            className="background-light900_dark200 light-border flex h-[280px] 
          w-[260px] flex-col items-center justify-center rounded-2xl border p-8"
          />
        ))}
      </section>
    </section>
  );
};

export default Loading;
