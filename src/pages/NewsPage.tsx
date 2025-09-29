import React from "react";

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
            <span>{date}</span>
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
      <div className="mb-8 rounded-lg border border-stroke p-5 dark:border-dark-3 bg-white dark:bg-dark-2">
        <h4 className="mb-4 text-lg font-bold text-dark dark:text-white">
          Search
        </h4>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg focus-lg border-stroke focus:outline-none focus:border bg-transparent text-body-color dark:text-dark-6"
        />
      </div>
      <div className="mb-8 rounded-lg border border-stroke p-5 dark:border-dark-3 bg-white dark:bg-dark-2">
        <h4 className="mb-4 text-lg font-bold text-dark dark:text-white">
          Categories
        </h4>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <a
                href="#"
                className="text-base text-body-color dark:text-dark-6 hover:text-green dark:hover:text-yellow transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
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
