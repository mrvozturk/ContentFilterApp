'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import contentData from '../../app/data/dummy.json';
import FilterBar from '../filterBar';
import ContentList from '../contentList';

const ContentPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [showScrollButton, setShowScrollButton] = useState(false);

  const categories = [
    'Tümü',
    ...Array.from(new Set(contentData.map(item => item.category)))
  ];

  const filteredContent = contentData.filter(
    item =>
      (selectedCategory === 'Tümü' || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='max-w-7xl mx-auto p-4 md:p-8'>
      <h1 className='text-2xl font-extrabold text-center md:text-left text-[#90be5c] text-3xl mb-4'>
        Bilgi Köşesi
      </h1>

      <div className='flex flex-col lg:flex-row gap-8'>
        <FilterBar
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        <ContentList filteredContent={filteredContent} />
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-4 right-4 p-2 bg-black text-white rounded-full shadow-md hover:bg-gray-400 transition-all'
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ContentPage;
