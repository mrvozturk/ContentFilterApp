const Placeholder = ({ className }: { className: string }) => (
  <div className={className}></div>
);

const Loading = () => {
  return (
    <div className='w-full md:w-[55vw] h-auto md:h-[30vw] flex flex-col border border-gray-300 rounded-md p-5 animate-pulse'>
      <Placeholder className='h-8 w-3/4 bg-gray-300 rounded-md mb-4' />
      <Placeholder className='h-5 w-full bg-gray-200 rounded-md mb-2' />
      <Placeholder className='h-5 w-2/3 bg-gray-200 rounded-md mb-4' />
      <Placeholder className='h-10 w-32 bg-gray-400 rounded-md mt-6' />
      <Placeholder className='h-5 w-20 bg-gray-300 rounded-md mt-4' />
    </div>
  );
};

export default Loading;
