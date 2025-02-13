import Link from 'next/link';

const ContentCard = ({
  item
}: {
  item: { id: string; title: string; description: string; category: string };
}) => {
  return (
    <Link
      key={item.id}
      href={`/content/${item.id}`}
      className='relative block p-4 bg-white border border-gray-200 rounded-lg shadow-md 
                 hover:scale-105 hover:shadow-lg hover:bg-black group'
    >
      <h3 className='text-sm md:text-lg font-semibold text-gray-800 group-hover:text-white'>
        {item.title}
      </h3>

      <p className='text-gray-600 text-xs md:text-sm mt-4 xs:mt-2 xs:mb-4 md:mt-2 md:mb-2 lg:mt-2 lg:mb-2 group-hover:text-white'>
        {item.description}
      </p>

      <p className='text-xs text-gray-500 absolute bottom-2 right-2 group-hover:text-white'>
        {item.category}
      </p>
    </Link>
  );
};

export default ContentCard;
