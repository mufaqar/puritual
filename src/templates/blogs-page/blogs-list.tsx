import CircleButton from "@/components/ui/circle-button";
import React from "react";

import Link from "next/link";

const BlogsList = ({ blog }: any) => {
  const formattedDate = blog.date;

  return (
    <>
      <div className="flex items-start gap-3 md:gap-6 py-3 sm:py-6 border-b border-gray-300">
        {/* Date Section */}
        <div className="text-center pr-3 md:pr-4 border-r-2 border-red-700">
          <p className="text-2xl md:text-4xl font-bold text-red-700">
            {formattedDate?.date}
          </p>
          <p className="text-sm text-red-700 uppercase font-semibold">
            {formattedDate.month}
          </p>
          <p className="text-xs text-gray-500">{formattedDate.year}</p>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <Link
            href={`/blogs/${blog.slug}`}
            className="text-2xl sm:text-3xl leading-[26px] font-medium text-dark font-cervo"
          >
            {blog.title.rendered}
          </Link>
          <p className="text-[10px] sm:text-sm text-gray-600 mt-1">
            By Developer | 1 minute Read | 4 Comments
          </p>
          <div
            className="text-gray-700 line-clamp-3 sm:line-clamp-none mt-2"
            dangerouslySetInnerHTML={{ __html: blog.excerpt?.rendered }}
          />

          {/* Buttons */}
          <div className="mt-4 flex gap-3">
            <div className="relative">
              <CircleButton className="hidden md:block">
                <a
                  href={`/blogs/${blog.slug}`}
                  className="bg-red-700 text-white px-4 py-2 text-sm hover:bg-red-800 transition"
                >
                  READ MORE
                </a>
              </CircleButton>
            </div>
            <div className="relative">
              <CircleButton className="hidden md:block">
                <a
                  href={blog?.addCommentLink || "#"}
                  className="border border-red-700 text-red-700 px-4 py-2 text-sm hover:bg-red-700 hover:text-white transition"
                >
                  ADD COMMENT
                </a>
              </CircleButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsList;
