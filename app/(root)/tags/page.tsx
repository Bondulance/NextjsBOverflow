/* eslint-disable tailwindcss/no-custom-classname */
import NoResult from "@/components/shared/NoResult/NoResult";
import Pagination from "@/components/shared/Pagination";
import Filters from "@/components/shared/filters/Filters";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { TagFilters } from "@/constants/filters";
import { GetAllTags } from "@/lib/actions/tags.action";
import { SearchParamsProps } from "@/types";

import Link from "next/link";

import React from "react";

const Page = async ({ searchParams }: SearchParamsProps) => {
  const result = await GetAllTags({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <head>
        <meta property="og:image" content="/assets/images/meta.png" />
      </head>
      <h1 className="h1-bold text-dark100_light900">Tags</h1>

      <div
        className="mt-11 flex justify-between gap-5
      max-sm:flex-col sm:items-center"
      >
        <LocalSearchbar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
          placeholder="Search for used tags"
        />

        <Filters
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => (
            <Link
              href={`/tags/${tag._id}`}
              key={tag._id}
              className="shadow-light100_darknone"
            >
              <article
                className="background-light900_dark200
                light-border flex w-full flex-col rounded-2xl border
                px-8 py-10 sm:w-[260px]"
              >
                <div
                  className="bg-light800_dark400 w-fit
                rounded-sm px-5 py-1.5"
                >
                  <p
                    className="paragraph-semibold
                  text-dark300_light900  capitalize"
                  >
                    {tag.name}
                  </p>
                </div>

                <p
                  className="small-medium text-dark400_light500
                mt-3.5"
                >
                  <span className="body-semibold primary-text-gradient mr-2.5">
                    {tag.questions.length}+
                  </span>
                  &nbsp;Questions
                </p>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title="No tags Found"
            description="It looks like no tags are found."
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default Page;
