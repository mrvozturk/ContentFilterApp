import ContentCard from '../contentCard';

interface ContentItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  category: string;
}

const ContentGrid = ({ content }: { content: ContentItem[] }) => {
  return (
    <div className='w-full lg:w-3/4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {content.length === 0 ? (
        <div className='w-full sm:w-[80vw] md:w-[62vw] h-[40vh] flex flex-col items-center justify-center border border-gray-300 rounded-md p-4'>
          <p className='text-gray-500 text-base sm:text-lg'>
            Bu kategoriye ait içerik bulunamadı...
          </p>
        </div>
      ) : (
        content.map(item => (
          <ContentCard
            key={item.id}
            item={{ ...item, description: item.description ?? '' }}
          />
        ))
      )}
    </div>
  );
};

export default ContentGrid;
