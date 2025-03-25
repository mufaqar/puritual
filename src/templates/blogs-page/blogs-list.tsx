import SquareButton from "@/components/ui/square-button";
import React from "react";

const BlogsList = ({ blog }: any) => {
  return (
    <>
      <div className="flex items-start gap-3 md:gap-6 py-3 sm:py-6 border-b border-gray-300">
        {/* Date Section */}
        <div className="text-center pr-3 md:pr-4 border-r-2 border-red-700">
          <p className="text-2xl md:text-4xl font-bold text-red-700">{blog.date}</p>
          <p className="text-sm text-red-700 uppercase font-semibold">
            {blog.month}
          </p>
          <p className="text-xs text-gray-500">{blog.year}</p>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl leading-[26px] font-medium text-dark font-cervo">
            {blog.title}
          </h2>
          <p className="text-[10px] sm:text-sm text-gray-600 mt-1">
            By {blog.author} | {blog.readTime} Read | {blog.comments}
          </p>
          <p className="text-gray-700 line-clamp-3 sm:line-clamp-none mt-2">{blog.description}</p>

          {/* Buttons */}
          <div className="mt-4 flex gap-3">
            <div className="relative">
              <SquareButton className="hidden md:block">
                <a
                  href={blog.readMoreLink}
                  className="bg-red-700 text-white px-4 py-2 text-sm hover:bg-red-800 transition"
                >
                  READ MORE
                </a>
              </SquareButton>
            </div>
            <div className="relative">
              <SquareButton className="hidden md:block">
                <a
                  href={blog.addCommentLink}
                  className="border border-red-700 text-red-700 px-4 py-2 text-sm hover:bg-red-700 hover:text-white transition"
                >
                  ADD COMMENT
                </a>
              </SquareButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsList;
