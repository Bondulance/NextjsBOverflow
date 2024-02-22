import Filters from "@/components/shared/filters/Filters";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Skeleton } from "@/components/ui/skeleton";
import { QuestionFilters } from "@/constants/filters";
import React from "react";

const Loading = () => {
  return (
    <section>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>

      <div
        className="mt-11 flex justify-between gap-5
      max-sm:flex-col sm:items-center"
      >
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
          placeholder="Search Questions..."
        />

        <Filters
          filters={QuestionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton key={item} className="h-48 w-full rounded-xl" />
        ))}
      </div>
    </section>
  );
};

export default Loading;
