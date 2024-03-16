import React, { useState } from 'react';
import bgImage from "../../public/spark.png"

const TimelinePage = () => {
  const [currentDay, setCurrentDay] = useState(1);

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  const renderDayContent = () => {
    switch (currentDay) {
      case 1:
        return (
          <div className="mx-auto max-w-lg">
              <div className="flex flex-col rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>        <p className="text-gray-700 text-base">Some description about the card goes here.</p>
      </div>
    </div> 
    

     <div className="flex flex-col mt-12 rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">Some description about the card goes here.</p>
      </div>
    </div>  
    

    <div className="flex flex-col mt-12 rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">Some description about the card goes here.</p>
      </div>
    </div> 


     <div className="flex flex-col mt-12 rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">Some description about the card goes here.</p>
      </div>
    </div>
          </div>
        );
      case 2:
       return (
          <div className="mx-auto max-w-lg">
              <div className="flex flex-col rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>        <p className="text-gray-700 text-base">Some description about the card goes here.</p>
      </div>
    </div> 

    
     <div className="flex flex-col mt-12 rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">Some description about the card goes here.</p>
      </div>
    </div>
          </div>
        );
      case 3:
        return (
            <div className="mx-auto max-w-lg">
                <div className="flex flex-col rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>        <p className="text-gray-700 text-base">Some description about the card goes here.</p>
        </div>
      </div> 
      
  
     
      
  
      <div className="flex flex-col mt-12 rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">Some description about the card goes here.</p>
        </div>
      </div> 
  
      
       <div className="flex flex-col mt-12 rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">Some description about the card goes here.</p>
        </div>
      </div>
            </div>
          );
      default:
        return null;
    }
  };

  return (
    <>
    <div className="relative bg-cover bg-center h-screen  items-center -mt-1" style={{backgroundImage: `url(${bgImage})`}}>
    <div className="bg- min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-5xl text-orange font-bold text-center mb-8"> [Our Timeline] </h1>
        {/* Day selector */}
        <div className="flex justify-center mb-4">
          <button onClick={() => handleDayChange(1)} className={`mx-2 px-4 py-2 rounded text-4xl ${currentDay === 1 ? ' text-white' : 'text-gray'}`}>First Day
          <p className='text-orange'>April'12,2024</p>
          </button>
          <button onClick={() => handleDayChange(2)} className={`mx-2 px-4 py-2 rounded text-4xl ${currentDay === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Second Day
          <p className='text-orange'>April'13,2024</p>
          </button>
          <button onClick={() => handleDayChange(3)} className={`mx-2 px-4 py-2 rounded text-4xl ${currentDay === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Third Day 
          <p className='text-orange'>April'14,2024</p>
          </button>
        </div>
        {/* Render content based on selected day */}
        {renderDayContent()}
      </div>
    </div>
    </div>
    </>
  );
};

export default TimelinePage;
