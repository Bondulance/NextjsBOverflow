"use client";
import { HomePageFilters } from "@/constants/filters";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

const Homefilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [active, setActive] = useState("");

  const handleTypeClick = (item: string) => {
    if (active === item) {
      setActive("");

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: null,
      });

      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: item.toLowerCase(),
      });

      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div
      className="mt-10 flex-wrap gap-3
    md:flex"
    >
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => handleTypeClick(item.value)}
          className={`body-medium rounded-lg px-6 py-3
            capitalize shadow-none max-md:hidden ${
              active === item.value
                ? "bg-primary-100 text-primary-500"
                : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-200"
            }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default Homefilters;
