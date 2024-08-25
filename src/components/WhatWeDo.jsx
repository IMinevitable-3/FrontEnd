import { NearMe } from '@mui/icons-material';
import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-center text-[#06038D] font-semibold text-3xl mb-8">What we do.</h2>
      <div className="flex justify-center space-x-48 mt-14">
        <div className="border-4 border-[#06038D] p-6 rounded-md w-1/4">
          <img src={`./image15.png`} alt="General Specific" className="mx-auto mb-4" />
          <h3 className="text-center text-xl font-semibold mb-2">General Specific</h3>
          <p className="text-center text-lg mb-4">
            Contribute to the Development of Infrastructure in Junior Colleges of Andhra Pradesh
          </p>
          <div className="flex justify-center mr-3">
            <button className="bg-[#06038D] text-white font-semibold py-2 px-4 rounded">Contribute <NearMe className=' text-white text-sm ml-1.5'/></button>
          </div>
        </div>
        <div className="border-4 border-[#06038D] p-6 rounded-md w-1/4">
          <img src={`./image116.png`} alt="College Specific" className="mx-auto mb-4" />
          <h3 className="text-center text-xl font-semibold mb-2">College Specific</h3>
          <p className="text-center text-lg mb-4">
            Contribute to the Development of Infrastructure in a specific Junior College of Andhra Pradesh
          </p>
          <div className="flex justify-center mr-3">
            <button className="bg-[#06038D] text-white font-semibold py-2 px-4 rounded">Contribute <NearMe className=' text-white text-sm ml-1.5'/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
