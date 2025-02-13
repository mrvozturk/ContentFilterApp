const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
  categories
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}) => {
  return (
    <div className='flex flex-wrap xs:flex-row lg:flex-col justify-center lg:justify-start gap-2 w-full'>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`w-auto xs:w-auto lg:w-full px-2 py-1 border rounded-md text-gray-700 text-[9px] sm:text-xs md:text-sm lg:text-base lg:px-4 lg:py-3 lg:h-12 font-semibold transition-all ${
            selectedCategory === category
              ? 'bg-gray-300 font-bold'
              : 'hover:bg-gray-200'
          }`}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
