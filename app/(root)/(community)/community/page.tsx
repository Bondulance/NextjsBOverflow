/* eslint-disable tailwindcss/no-custom-classname */
import Filters from "@/components/shared/filters/Filters";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { UserFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";

import React from "react";

export default async function Community() {
  const result = await getQuestions({});

  console.log(result.questions);

  return (
    <>
      <div
        className="flex w-full flex-col-reverse
      justify-between gap-4 sm:flex-row sm:items-center"
      >
        <h1 className="h1-bold text-dark100_light900">All Users</h1>
      </div>

      <div
        className="mt-11 flex justify-between gap-5
      max-sm:flex-col sm:items-center"
      >
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
          placeholder="Search Users..."
        />

        <Filters
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses=" max-md:flex"
        />
      </div>

      <div
        className="width-[1070px] flex flex-wrap
      items-start justify-between"
      >
        Users
      </div>
    </>
  );
}
