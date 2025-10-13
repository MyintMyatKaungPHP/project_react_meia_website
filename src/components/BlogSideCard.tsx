import React from "react";

interface BlogSideCardItemProps {
  subtitle: string;
  title: string;
  description: string;
}

const BlogSideCardItem: React.FC<BlogSideCardItemProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <div className="mb-8">
      <span className="mb-2 inline-block text-sm font-medium text-white">
        {subtitle}
      </span>
      <h3>
        <a
          href="#"
          className="mb-3 inline-block text-lg font-semibold text-white hover:text-opacity-80"
          onClick={(e) => e.preventDefault()}
        >
          {title}
        </a>
      </h3>
      <p className="text-base text-white text-opacity-70">{description}</p>
    </div>
  );
};

export default BlogSideCardItem;
