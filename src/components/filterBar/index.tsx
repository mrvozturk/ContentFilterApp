import SearchBar from './../searchBar';
import CategoryFilter from './../categoryFilter';

const FilterBar = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  categories
}: {
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}) => {
  return (
    <div className='lg:w-1/4 flex flex-wrap xs:flex-row lg:flex-col items-center lg:items-start gap-2 w-full'>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
    </div>
  );
};

export default FilterBar;
