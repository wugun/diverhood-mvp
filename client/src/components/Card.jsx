import React from 'react';

import {download} from '../assets'
import {downloadImage} from '../utils'

const Card = ({ _id, name, prompt, photo, onViewDetail }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

      <div className="banner mt-5 flex justify-between items-center gap-2">
        <div className="banner-left">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
            <p className="text-white text-xs">{name}</p>
          </div>
        </div>
        <div className="banner-right flex">
          <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none ml-2">
            <img src={download} alt="download" className="w-5 h-5 object-contain invert" />
          </button>
          <button type="button" onClick={() => onViewDetail()} className="text-xs text-white border-1 border-white bg-transparent py-1 px-2 cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 ml-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card