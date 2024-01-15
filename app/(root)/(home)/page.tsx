import Filters from "@/components/shared/filters/Filters";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { HomePageFilters } from "@/constants/filters"; 
import Homefilters from "@/components/home/homefilters";
import NoResult from "@/components/shared/NoResult/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
import { getQuestions } from "@/lib/actions/question.action";

export default async function Home() {

  const result = await getQuestions({});

  console.log(result.questions)

  return (
   <>
      <div className="flex w-full flex-col-reverse
      justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="h1-bold text-dark100_light900">
            All Questions
          </h1>

          <Link href='/ask-question' className="flex
          justify-end max-sm:w-full">
            <Button className="primary-gradient min-h-[46px]
            px-4 py-3 !text-light-900">
              Ask a Question
            </Button>
          </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5
      max-sm:flex-col sm:items-center">
          <LocalSearchbar 
            route="/"
            iconPosition="left"
            imgSrc="/assets/icons/search.svg"
            otherClasses="flex-1"
            placeholder= "Search Questions..."
          />

          <Filters 
            filters={HomePageFilters}
            otherClasses="min-h-[56px] sm:min-w-[170px]"
            containerClasses="hidden max-md:flex"
          />
      </div>

      <Homefilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ?
          result.questions.map((question) => (
            <QuestionCard 
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        : <NoResult
        title="Theres no questions to show"
        description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
        link="/ask-question"
        linkTitle = "Ask a Question"
        />}
      </div>
      
   </>
  )
}