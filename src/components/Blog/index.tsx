"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { blogDataEng, blogDataUa } from "./blogData";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { type Blog } from "@/types/blog";

const Blog = () => {
  const { i18n } = useTranslation();

  const blogData = i18n.language === "ua" ? blogDataUa : blogDataEng;
  const title =
    i18n.language === "ua" ? "Наші останні блоги" : "Our Latest Blogs";
  const paragraph =
    i18n.language === "ua"
      ? "Існує багато варіацій уривків Lorem Ipsum, але більшість з них зазнали змін у якійсь формі."
      : "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.";

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle title={title} paragraph={paragraph} center />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog, index) => (
            <BlogItem blog={blog} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

const BlogItem = ({
  blog,
index,
}: {
  blog: Blog,
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      key={blog.id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <SingleBlog blog={blog} />
    </motion.div>
  );
}