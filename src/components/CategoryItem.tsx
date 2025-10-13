import React from "react";

interface CategoryItemProps {
  name: string;
  count: number;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, count }) => {
  return (
    <a
      href="#"
      className="flex items-center justify-between rounded px-4 py-2 text-base text-body-color hover:bg-green/10 hover:text-green dark:text-dark-6 dark:hover:bg-yellow/10 dark:hover:text-yellow transition-colors"
      onClick={(e) => e.preventDefault()}
    >
      <span>{name}</span>
      <span className="text-sm">({count})</span>
    </a>
  );
};

export default CategoryItem;
