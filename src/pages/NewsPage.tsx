import React from "react";
import { FaSearch } from "react-icons/fa";
import CategoryItem from "../components/CategoryItem";
import BlogSideCardItem from "../components/BlogSideCard";
import { formatDateToDMY } from "../utils/dateFormatter";

interface BlogItemProps {
  title: string;
  image: string;
  paragraph: string;
  date: string;
  category: string;
  tags: string[];
}

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  image,
  paragraph,
  date,
  category,
  tags,
}) => {
  return (
    <div className="w-full px-4">
      <div className="group mb-8 rounded-lg border border-stroke p-5 dark:border-dark-3 flex flex-col md:flex-row gap-6 items-start">
        {/* Image Side */}
        <div className="w-full md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
          <div className="overflow-hidden rounded w-full h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-48 md:h-full object-cover object-center duration-200 group-hover:scale-110"
            />
          </div>
        </div>
        {/* Content Side */}
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="mb-4 flex items-center justify-between text-xs text-body-color dark:text-dark-6">
            <span>{formatDateToDMY(date)}</span>
            <span className="px-2 py-0.5 rounded bg-green text-white dark:bg-yellow dark:text-dark font-semibold">
              {category}
            </span>
          </div>
          <h3 className="mb-2 line-clamp-2 cursor-pointer text-xl font-bold text-dark duration-200 hover:text-green dark:text-white dark:hover:text-yellow">
            {title}
          </h3>
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
          <p className="mb-3 line-clamp-3 text-base text-body-color dark:text-dark-6">
            {paragraph}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-dark duration-200 hover:gap-2.5 hover:text-green dark:text-white dark:hover:text-yellow"
            onClick={(e) => e.preventDefault()}
          >
            Read More
            <span>▻</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// Category Sidebar Component
const CategorySidebar: React.FC<{ categories: string[] }> = ({
  categories,
}) => (
  <aside className="w-full lg:w-3/12 px-4">
    <div className="sticky top-24">
      {/* Search Box */}
      <div className="mb-8 w-full">
        <div className="w-full">
          <h2 className="relative text-2xl font-semibold text-dark dark:text-white">
            Search
          </h2>
          <span className="mb-6 inline-block h-[2px] w-24 bg-green dark:bg-yellow"></span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded border border-stroke bg-white py-3 pl-4 pr-12 text-base text-body-color outline-none focus:border-green dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6 dark:focus:border-yellow"
            />
            <button className="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-body-color hover:text-green dark:text-dark-6 dark:hover:text-yellow">
              <FaSearch className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Category List */}
      <div className="mb-8 w-full">
        <div className="w-full">
          <h2 className="relative text-2xl font-semibold text-dark dark:text-white">
            Categories
          </h2>
          <span className="mb-6 inline-block h-[2px] w-24 bg-green dark:bg-yellow"></span>
          <div className="space-y-2">
            {categories.map((cat, index) => (
              <CategoryItem
                key={cat}
                name={cat}
                count={[12, 8, 15][index] || 5}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured News */}
      <div className="relative mb-8 bg-gradient-to-br from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 p-8">
        <BlogSideCardItem
          subtitle="Featured"
          title="Design is a Plan or The Construction of an Object."
          description="Lorem Ipsum is simply dummy text of the printing and industry page when looking at its layout."
        />
        <BlogSideCardItem
          subtitle="Trending"
          title="How to use Facebook ads to sell online courses"
          description="Lorem Ipsum is simply dummy text of the printing and industry page when looking at its layout."
        />

        <span className="absolute right-0 top-0">
          <svg
            width="46"
            height="45"
            viewBox="0 0 46 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="1.39737"
              cy="43.6026"
              r="1.39737"
              transform="rotate(-90 1.39737 43.6026)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="1.39737"
              cy="6.9913"
              r="1.39737"
              transform="rotate(-90 1.39737 6.9913)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="13.6943"
              cy="43.6026"
              r="1.39737"
              transform="rotate(-90 13.6943 43.6026)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="13.6943"
              cy="6.9913"
              r="1.39737"
              transform="rotate(-90 13.6943 6.9913)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="25.9911"
              cy="43.6026"
              r="1.39737"
              transform="rotate(-90 25.9911 43.6026)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="25.9911"
              cy="6.9913"
              r="1.39737"
              transform="rotate(-90 25.9911 6.9913)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="38.288"
              cy="43.6026"
              r="1.39737"
              transform="rotate(-90 38.288 43.6026)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="38.288"
              cy="6.9913"
              r="1.39737"
              transform="rotate(-90 38.288 6.9913)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="1.39737"
              cy="31.3057"
              r="1.39737"
              transform="rotate(-90 1.39737 31.3057)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="13.6943"
              cy="31.3057"
              r="1.39737"
              transform="rotate(-90 13.6943 31.3057)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="25.9911"
              cy="31.3057"
              r="1.39737"
              transform="rotate(-90 25.9911 31.3057)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="38.288"
              cy="31.3057"
              r="1.39737"
              transform="rotate(-90 38.288 31.3057)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="1.39737"
              cy="19.0086"
              r="1.39737"
              transform="rotate(-90 1.39737 19.0086)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="13.6943"
              cy="19.0086"
              r="1.39737"
              transform="rotate(-90 13.6943 19.0086)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="25.9911"
              cy="19.0086"
              r="1.39737"
              transform="rotate(-90 25.9911 19.0086)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
            <circle
              cx="38.288"
              cy="19.0086"
              r="1.39737"
              transform="rotate(-90 38.288 19.0086)"
              fill="white"
              fillOpacity="0.44"
            ></circle>
          </svg>
        </span>
      </div>
    </div>
  </aside>
);

const blogsData: BlogItemProps[] = [
  {
    image:
      "https://cdn.tailgrids.com/assets/images/application/blogs/blog-08/image-1.jpg",
    title: "How to use Facebook ads to sell online courses",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna.",
    date: "2025-07-16",
    category: "Marketing",
    tags: ["ads", "facebook", "online-course"],
  },
  {
    image:
      "https://cdn.tailgrids.com/assets/images/application/blogs/blog-08/image-2.jpg",
    title: "What to do if template do not work properly",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna.",
    date: "2025-07-10",
    category: "Troubleshooting",
    tags: ["templates", "issues", "fix"],
  },
  {
    image:
      "https://cdn.tailgrids.com/assets/images/application/blogs/blog-08/image-3.jpg",
    title: "Meet AutoManage, the best AI management tools",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna.",
    date: "2025-07-08",
    category: "AI Tools",
    tags: ["ai", "management", "tools"],
  },
  {
    image:
      "https://cdn.tailgrids.com/assets/images/application/blogs/blog-08/image-3.jpg",
    title: "Meet AutoManage, the best AI management tools",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna.",
    date: "2025-07-08",
    category: "AI Tools",
    tags: ["ai", "management", "tools"],
  },
  {
    image:
      "https://cdn.tailgrids.com/assets/images/application/blogs/blog-08/image-3.jpg",
    title: "Meet AutoManage, the best AI management tools",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis vehicula orciut ultricies facilisis magna.",
    date: "2025-07-08",
    category: "AI Tools",
    tags: ["ai", "management", "tools"],
  },
];

// Category List စုစည်းရန်
const categoryList = Array.from(
  new Set(blogsData.map((item) => item.category))
);

const News: React.FC = () => {
  return (
    <section className="bg-white py-10 dark:bg-dark">
      <div className="container">
        <div className="-mx-4 flex flex-col lg:flex-row">
          {/* Main Blog Items */}
          <div className="w-full lg:w-9/12 flex flex-wrap">
            {blogsData.map((blog, idx) => (
              <BlogItem key={idx} {...blog} />
            ))}
          </div>
          {/* Category Sidebar */}
          <CategorySidebar categories={categoryList} />
        </div>
      </div>
    </section>
  );
};

export default News;
