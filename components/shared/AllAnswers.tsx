import React from "react";
import Filters from "./filters/Filters";
import { AnswerFilters } from "@/constants/filters";
import { getAnswers } from "@/lib/actions/answer.action";
import Link from "next/link";
import Image from "next/image";
import { getTimeStamp } from "@/lib/utils";
import ParseHtml from "./ParseHtml";
import Votes from "./Votes";
import Pagination from "./Pagination";

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: number;
  filter?: string;
}

const AllAnswers = async ({
  questionId,
  userId,
  totalAnswers,
  page,
  filter,
}: Props) => {
  const result = await getAnswers({
    questionId,
    page: page ? +page : 1,
    sortBy: filter,
  });
  return (
    <div className="mt-6">
      <div
        className="flex items-center
        justify-between"
      >
        <h3 className="primary-text-gradient">{totalAnswers} Answers</h3>

        <Filters filters={AnswerFilters} />
      </div>

      <div className="">
        {result.answers.map((answer) => (
          <article key={answer._id} className="light-border border-b py-10">
            <div className="mb-8 flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
              <Link
                href={`/profile/${answer.author.clerkId}`}
                className="flex flex-1 items-start gap-1 sm:items-center"
              >
                <Image
                  src={answer.author.picture}
                  alt="profile"
                  width={18}
                  height={18}
                  className="max-sm:
                        mt-0.5 rounded-full object-cover "
                />
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <p className="body-semibold text-dark300_light700">
                    {answer.author.name}
                  </p>

                  <p className="small-regular text-light400_light500 ml-0.5 mt-0.5 line-clamp-1">
                    &nbsp; answered {getTimeStamp(answer.createdAt)}
                  </p>
                </div>
              </Link>

              <div className="flex justify-end ">
                <Votes
                  type="Answer"
                  itemId={JSON.stringify(answer._id)}
                  userId={JSON.stringify(userId)}
                  upvotes={answer.upvotes.length}
                  hasupvoted={answer.upvotes.includes(userId)}
                  downvotes={answer.downvotes.length}
                  hasdownvoted={answer.upvotes.includes(userId)}
                />
              </div>
            </div>
            <ParseHtml data={answer.content} />
          </article>
        ))}
      </div>

      <div className="mt-1">
        <Pagination
          pageNumber={page ? +page : 1}
          isNext={result.isNextAnswer}
        />
      </div>
    </div>
  );
};

export default AllAnswers;
