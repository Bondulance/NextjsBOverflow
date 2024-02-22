import { formatBigNumber } from "@/lib/utils";
import { BadgeCounts } from "@/types";
import Image from "next/image";

import React from "react";

interface StatCardProps {
  imgUrl: string;
  value: number;
  title: string;
}

const StatCard = ({ imgUrl, value, title }: StatCardProps) => {
  return (
    <div
      className="background-light900_dark300 light-border flex flex-wrap items-center justify-start gap-4 rounded-md
    p-6 shadow-light-300 dark:shadow-dark-200"
    >
      <Image src={imgUrl} width={40} height={50} alt="medals" />
      <div>
        <p className="paragraph-semibold text-dark200_light900">{value}</p>
        <p className="body-medium text-dark400_light700 flex-1">{title}</p>
      </div>
    </div>
  );
};

interface Props {
  totalQuestions: number;
  totalAnswers: number;
  badges: BadgeCounts;
  reputation: number;
}

const Stats = ({ totalAnswers, totalQuestions, badges, reputation }: Props) => {
  return (
    <div className="mt-10">
      <h4 className="h3-semibold text-dark200_light900">
        Stats - {reputation}
      </h4>

      <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
        <div
          className="background-light900_dark300 light-border flex flex-wrap items-center justify-evenly gap-4 rounded-md
        p-6 shadow-light-300 dark:shadow-dark-200"
        >
          <div className="flex h-[39px] flex-col items-center">
            <p className="paragraph-semibold text-dark200_light900">
              {formatBigNumber(totalQuestions)}
            </p>
            <p className="body-medium text-dark400_light700 flex-1">
              Questions
            </p>
          </div>
          <div className="flex h-[39px] flex-col items-center">
            <p className="paragraph-semibold text-dark200_light900">
              {formatBigNumber(totalAnswers)}
            </p>
            <p className="body-medium text-dark400_light700 flex-1">Answers</p>
          </div>
        </div>

        <StatCard
          imgUrl="/assets/icons/gold-medal.svg"
          value={badges.GOLD}
          title="Gold Badges"
        />
        <StatCard
          imgUrl="/assets/icons/silver-medal.svg"
          value={badges.SILVER}
          title="Silver Badges"
        />
        <StatCard
          imgUrl="/assets/icons/bronze-medal.svg"
          value={badges.BRONZE}
          title="Bronze Badges"
        />
      </div>
    </div>
  );
};

export default Stats;
