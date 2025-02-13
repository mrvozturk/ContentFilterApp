const Loading = () => {
  return (
    <div className='flex m-4 h-screen'>
      <div className='w-[55vw] h-[30vw] flex flex-col border border-gray-300 rounded-md p-5 animate-pulse'>
        <div className='h-8 w-3/4 bg-gray-300 rounded-md mb-4'></div>
        <div className='h-5 w-full bg-gray-200 rounded-md mb-2'></div>
        <div className='h-5 w-2/3 bg-gray-200 rounded-md mb-4'></div>

        <div className='h-10 w-32 bg-gray-400 rounded-md mt-6'></div>
        <div className='h-5 w-20 bg-gray-300 rounded-md mt-4'></div>
      </div>
    </div>
  );
};

export default Loading;
