import Answer from "@/components/forms/Answer";
import AllAnswers from "@/components/shared/AllAnswers";
import Metric from "@/components/shared/Metric";
import ParseHtml from "@/components/shared/ParseHtml";
import Votes from "@/components/shared/Votes";
import RenderTag from "@/components/shared/rendertag/RenderTag";
import { getQuestionsById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { formatBigNumber, getTimeStamp } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params, searchParams }: any) => {
  const result = await getQuestionsById({ questionId: params.id });
  const { userId: clerkId } = auth();

  let mongoUser;
  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }

  return (
    <>
      <div className="flex-start w-full flex-col">
        <div
          className="flex w-full flex-col-reverse justify-between
        gap-5 sm:flex-row sm:items-center sm:gap-2"
        >
          <Link
            href={`/profile/${result.author.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={result.author.picture}
              className="rounded-full"
              width={22}
              height={22}
              alt="profile"
            />
            <p className="paragraph-semibold text-dark300_light700">
              {result.author.name}
            </p>
          </Link>
          <div className="flex justify-end">
            <Votes
              type="Question"
              itemId={JSON.stringify(result._id)}
              userId={JSON.stringify(mongoUser._id)}
              upvotes={result.upvotes.length}
              hasupvoted={result.upvotes.includes(mongoUser._id)}
              downvotes={result.downvotes.length}
              hasdownvoted={result.upvotes.includes(mongoUser._id)}
              hasSaved={mongoUser?.saved.includes(result._id)}
            />
          </div>
        </div>
        <h2 className="h2-bold text-dark200_light900 mt-3.5 w-full text-left">
          {result.title}
        </h2>
      </div>

      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/assets/icons/clock.svg"
          alt="clock icon"
          title=""
          value={`asked ${getTimeStamp(result.createdAt)}`}
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="messages"
          title="Answers"
          value={formatBigNumber(result.answers.length)}
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          title="Views"
          value={formatBigNumber(result.views)}
          textStyles="small-medium text-dark400_light800"
        />
      </div>

      <ParseHtml data={result.content} />

      <div className="mt-8 flex flex-wrap gap-2">
        {result.tags.map((tag: any) => (
          <RenderTag
            key={tag._id}
            _id={tag._id}
            name={tag.name}
            showCount={false}
          />
        ))}
      </div>

      <AllAnswers
        questionId={result._id}
        userId={mongoUser._id}
        totalAnswers={result.answers.length}
        page={searchParams?.page}
        filter={searchParams?.filter}
      />

      <Answer
        question={result.content}
        questionId={JSON.stringify(result._id)}
        authorId={JSON.stringify(mongoUser._id)}
      />
    </>
  );
};

export default Page;
