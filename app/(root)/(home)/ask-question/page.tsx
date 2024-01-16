import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // const { userId } = auth();

  const userId = "clerk123";
  if (!userId) redirect("/sign-in");

  const MongoUser = await getUserById({ userId });

  console.log(MongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark400_light900">Ask a Question</h1>
      <div className="mt-9">
        <Question MongoUserId={JSON.stringify(MongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
