"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { ProfileSchema } from "@/lib/validations";
import { usePathname, useRouter } from "next/navigation";
import { updateUser } from "@/lib/actions/user.action";
import { toast } from "../ui/use-toast";

interface Props {
  clerkId: string;
  user: string;
}

const Profile = ({ clerkId, user }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const parsedUser = JSON.parse(user);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: parsedUser.name || "",
      username: parsedUser.username || "",
      portfolioWebsite: parsedUser.portfolioWebsite || "",
      location: parsedUser.location || "",
      bio: parsedUser.bio || "",
    },
  });

  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
    setIsSubmitting(true);
    try {
      // update user server action
      await updateUser({
        clerkId,
        updateData: {
          name: values.name,
          username: values.username,
          portfolioWebsite: values.portfolioWebsite,
          location: values.location,
          bio: values.bio,
        },
        path: pathname,
      });
      router.back();

      return toast({
        title: "Profile Updated Successfully!",
        description:
          "Your profile has been updated. To see, go to Profile page",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-9 flex w-full flex-col gap-9"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="text-dark200_light800">
                Name <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="no-focus paragraph-regular light-border-2
                background-light700_dark300 text-dark300_light700 min-h-[56px] border"
                  placeholder="Your name"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="text-dark200_light800">
                Username <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="no-focus paragraph-regular light-border-2
                background-light700_dark300 text-dark300_light700 min-h-[56px] border"
                  placeholder="Your username"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="portfolioWebsite"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="text-dark200_light800">
                Portfolio Website
              </FormLabel>
              <FormControl>
                <Input
                  type="url"
                  className="no-focus paragraph-regular light-border-2
                background-light700_dark300 text-dark300_light700 min-h-[56px] border"
                  placeholder="Your Portfolio Website"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="text-dark200_light800">Location</FormLabel>
              <FormControl>
                <Input
                  className="no-focus paragraph-regular light-border-2
                background-light700_dark300 text-dark300_light700 min-h-[56px] border"
                  placeholder="Where you are from"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="text-dark200_light800">Bio</FormLabel>
              <FormControl>
                <Textarea
                  className="no-focus paragraph-regular light-border-2
                background-light700_dark300 text-dark300_light700 min-h-[56px] border"
                  placeholder="What's special about you"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-7 flex justify-end">
          <Button
            type="submit"
            className="primary-gradient w-fit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Profile;
