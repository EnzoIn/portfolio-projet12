import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <div className="text-center text-lg font-medium">loading ...</div>
    </div>
  );
};

export default Loading;
