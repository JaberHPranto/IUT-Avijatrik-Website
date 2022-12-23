import React from "react";
import {
  ArrowSmUpIcon,
  ArrowSmDownIcon,
  ArrowSmRightIcon,
  ArrowSmLeftIcon,
} from "@heroicons/react/outline";

const Controller = () => {
  return (
    <div className="relative px-8">
      <div className="bg-homeBackground h-screen bg-cover bg-center bg-no-repeat  bgBlur -z-10 absolute top-0 left-0 right-0 bottom-0" />
      {/* Video Feed */}
      <div className="w-2/3 pt-8">
        <img
          alt="gallery"
          class="w-full object-cover h-full object-center"
          src="https://dummyimage.com/820x410"
        />
      </div>
      {/* Controller */}
      <div className="w-2/3 pt-10 flex items-center justify-center">
        <div className="w-56 h-32 relative">
          <ArrowSmUpIcon className="controllerIcon absolute left-1/2 transform -translate-x-1/2" />
          <ArrowSmLeftIcon className="controllerIcon absolute left-0 top-1/2 transform -translate-y-1/2" />
          <ArrowSmRightIcon className="controllerIcon absolute right-0 top-1/2 transform -translate-y-1/2" />
          <ArrowSmDownIcon className="controllerIcon absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        </div>
      </div>
      {/* Statistics */}
      <div className="bg-greenCustom1 absolute right-20 top-1/2 transform -translate-y-1/2 pl-5 pr-10 py-6 shadow-greenCustom1 shadow-glow text-lg space-y-3">
        <p>
          <span className="font-semibold">Speed : &nbsp;</span> 70 km/h
        </p>
        <p>
          <span className="font-semibold">Weight : &nbsp;</span> 75 kg
        </p>
        <p>
          <span className="font-semibold">Speed : &nbsp;</span> 70 km/h
        </p>
      </div>
    </div>
  );
};

export default Controller;
