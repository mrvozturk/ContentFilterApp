const SearchBar = ({
    search,
    setSearch
  }: {
    search: string;
    setSearch: (value: string) => void;
  }) => {
    return (
      <input
        type='text'
        placeholder='Ara...'
        className='w-full xs:w-85 md:w-90 lg:w-full lg:h-12 p-2 text-xs lg:text-base border border-gray-300 rounded-md xs:mb-4 md:mb-4 lg:mb-0 focus:border-black focus:outline-none focus:ring-0'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  