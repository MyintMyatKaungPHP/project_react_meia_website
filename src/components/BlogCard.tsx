import React from "react";
import { formatDateToDMY } from "../utils/dateFormatter";

interface BlogCardProps {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  subtitle,
  title,
  description,
  date,
  category,
  tags,
}) => {
  return (
    <div className="mb-8 bg-gray dark:bg-dark-2">
      <div className="w-full items-stretch md:-mx-4 md:flex">
        <div className="w-full md:w-1/2 md:px-4">
          <div className="h-full w-full">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full px-8 md:w-1/2 md:px-4">
          <div className="w-full py-8">
            {/* Date (left) and Category (right) */}
            <div className="mb-4 flex items-center justify-between text-xs text-body-color dark:text-dark-6">
              <span>{formatDateToDMY(date)}</span>
              <span className="px-2 py-0.5 rounded bg-green text-white dark:bg-yellow dark:text-dark font-semibold">
                {category}
              </span>
            </div>

            {/* Title */}
            <h3>
              <a
                href="#"
                className="mb-2 inline-block text-xl font-semibold text-dark hover:text-green dark:text-white dark:hover:text-green-400"
              >
                {title}
              </a>
            </h3>

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-gray-200 dark:bg-dark-3 text-xs text-gray-600 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mb-3 text-base text-body-color dark:text-dark-6">
              {description}
            </p>

            {/* Read More */}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-dark duration-200 hover:gap-2.5 hover:text-green dark:text-white dark:hover:text-yellow"
            >
              Read More
              <span>▻</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
