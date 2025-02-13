import { Suspense } from 'react';
import contentData from './../../data/dummy.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Loading from './loading';

const ContentDetail = ({ params }: { params: { id: string } }) => {
  const content = contentData.find(item => item.id.toString() === params.id);

  if (!content) return notFound();

  return (
    <div className='w-full md:w-[55vw] h-auto md:h-[30vw] flex flex-col border border-gray-300 rounded-md p-4 md:p-5 mt-2'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-lg md:text-2xl font-bold text-gray-800'>
          {content.title}
        </h1>
        <span className='text-sm md:text-base text-gray-500 font-medium'>
          {content.category}
        </span>
      </div>

      <p className='text-gray-600 text-base md:text-lg mt-7 md:mb-4'>
        {content.description}
      </p>
    </div>
  );
};

const ContentDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className='flex flex-col m-4 md:m-10 h-screen'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-extrabold md:text-3xl text-[#90be5c]'>
          Bilgi Köşesi
        </h1>
      </div>

      <Link
        href='/'
        className='text-gray-600 hover:underline text-sm md:text-base mt-4 mb-4 md:mb-4 font-semibold'
      >
        ← Geri Dön
      </Link>

      <Suspense fallback={<Loading />}>
        <ContentDetail params={params} />
      </Suspense>
    </div>
  );
};

export default ContentDetailPage;
