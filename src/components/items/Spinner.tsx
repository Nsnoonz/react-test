const Spinner = () => {
  return (
    <>
     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <span className="text-lg text-white">Loading...</span>
      </div>
    </div>
    </>
  );
};

export default Spinner;