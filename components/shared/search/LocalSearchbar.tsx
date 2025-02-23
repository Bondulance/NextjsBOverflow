"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeyfromQuery } from "@/lib/utils";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  otherClasses?: string;
  placeholder: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  otherClasses,
  placeholder,
}: CustomInputProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  const [search, setSearch] = useState(query || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newURL = formUrlQuery({
          params: searchParams.toString(),
          key: "q",
          value: search,
        });

        router.push(newURL, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl2 = removeKeyfromQuery({
            params: searchParams.toString(),
            keysToRemove: ["q"],
          });
          router.push(newUrl2, { scroll: false });
        }
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [search, route, router, pathname, searchParams, query]);

  return (
    <div
      className={`background-light800_darkgradient text-dark400_light relative flex 
        min-h-[56px] grow items-center gap-4 rounded-[10px] px-4
        ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="paragraph-regular no-focus placeholder
                background-light800_darkgradient text-dark400_light700 border-none
                shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchbar;
