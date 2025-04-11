import React from "react";

export async function generateMetadata({ params }: any) {
  const slug = await params
  return {
    title: `${slug?.single.replace(/-/g, ' ').replace(/\b\w/g, (char:any) => char.toUpperCase())} | Puritual`,
    description: "Puritual",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug?.single}`,
    },
  };
}

const BlogSingle = async ({ params }: any) => {
  const { single } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WC_URL}/wp-json/wp/v2/posts?slug=${single}`
  );
  const posts = await response.json();
  const post = posts?.[0];

  return (
    <>
      <section className="bg-primary w-full">
        <main className="overflow-y-hidden sm:pt-24 pt-26 pb-10 sm:pb-20 bg-dark rounded-b-[60px]">
          {/* Animated Heading */}
          <h1 className="flex justify-center flex-wrap px-10 md:mt-8 overflow-y-hidden text-[6vw] font-medium font-cervo leading-[6vw] text-primary  text-center">
            {Array.from(post?.title?.rendered).map((char: any, index) => (
              <span key={index} className="t1 uppercase">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </main>
      </section>
      <section className="bg-primary py-14">
        <div className="not-format max-w-[1280px] mx-auto px-3">
          <address className="flex items-center mb-6 not-italic">
            <div className="inline-flex items-center mr-3 text-sm text-dark ">
              <img
                className="mr-4 w-16 h-16 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Jese Leos"
              />
              <div>
                <a
                  href="#"
                  rel="author"
                  className="text-xl font-bold text-dark "
                >
                  Jese Leos
                </a>
                <p className="text-base text-gray-500 ">
                  Graphic Designer, educator & CEO Flowbite
                </p>
                <p className="text-base text-gray-500 ">
                  <time>{formatDate(post?.modified)}</time>
                </p>
              </div>
            </div>
          </address>
          <h1 className="text-2xl font-extrabold leading-tight text-dark lg:text-3xl ">
            {post?.title?.rendered}
          </h1>
          <div className="mt-4 singleBlog">
            <div
              dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const options: any = { month: "short", day: "numeric", year: "numeric" };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};
