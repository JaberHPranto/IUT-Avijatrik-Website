import React, { useEffect, useState } from "react";
import {
  ArrowSmUpIcon,
  ArrowSmDownIcon,
  ArrowSmRightIcon,
  ArrowSmLeftIcon,
} from "@heroicons/react/outline";

const Controller = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startVideo = () => {
    setIsPlaying(true);
    navigator.getUserMedia(
      { video: true },
      (stream) => {
        let video = document.getElementsByClassName("videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.log(err)
    );
  };
  const stopVideo = () => {
    setIsPlaying(false);
    let video = document.getElementsByClassName("videoFeed")[0];
    video.srcObject?.getTracks()[0].stop();
  };

  // Arrow controllers
  // Govet ei simple function o likhte paros na

  // using arrows on keyboard
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp") {
        handleUp();
      }
      if (e.key === "ArrowDown") {
        handleDown();
      }
      if (e.key === "ArrowLeft") {
        handleLeft();
      }
      if (e.key === "ArrowRight") {
        handleRight();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleUp = () => {
    console.log("UP arrow clicked");
  };
  const handleDown = () => {
    console.log("DOWN arrow clicked");
  };
  const handleLeft = () => {
    console.log("LEFT arrow clicked");
  };
  const handleRight = () => {
    console.log("RIGHT arrow clicked");
  };

  // servo buttons
  const handleLeftServo = () => {};
  const handleRightServo = () => {};

  return (
    <div className="relative">
      <div className="bg-homeBackground h-screen bg-cover bg-center bg-no-repeat bgBlur -z-10 absolute top-0 left-0 right-0 bottom-0" />
      <div className="flex">
        {/* Video Feed */}
        <div className="w-2/3 p-6 h-80 relative">
          <video
            muted
            autoPlay
            className="videoFeed h-[90vh] w-auto border-green border-[3px] bg-white/40"
          />
          {/* Controls */}
          <div className="w-full gap-8 flex items-center">
            {isPlaying ? (
              <button
                className="bg-white text-black px-4 py-1 rounded-md my-1"
                onClick={stopVideo}
              >
                Stop
              </button>
            ) : (
              <button
                className="bg-white text-black px-4 py-1 rounded-md my-1"
                onClick={startVideo}
              >
                Start
              </button>
            )}
            <div className="flex gap-2">
              <ArrowSmLeftIcon
                className="w-8 h-8 bg-white text-black/80 rounded-md"
                onClick={handleLeftServo}
              />
              <ArrowSmRightIcon
                className="w-8 h-8 bg-white text-black/80 rounded-md"
                onClick={handleRightServo}
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 h-screen flex flex-col items-center gap-20">
          {/* Controller */}
          <div className="h-1/3 pt-10 flex items-center justify-center">
            <div className="w-40 h-32 relative">
              <ArrowSmUpIcon
                className="controllerIcon absolute left-1/2 transform -translate-x-1/2"
                onClick={handleUp}
              />
              <ArrowSmLeftIcon
                className="controllerIcon absolute left-0 top-1/2 transform -translate-y-1/2"
                onClick={handleLeft}
              />
              <ArrowSmRightIcon
                className="controllerIcon absolute right-0 top-1/2 transform -translate-y-1/2"
                onClick={handleRight}
              />
              <ArrowSmDownIcon
                className="controllerIcon absolute bottom-0 left-1/2 transform -translate-x-1/2"
                onClick={handleDown}
              />
            </div>
          </div>
          {/* Statistics */}
          <div className="max-w-xs bg-greenCustom1 shadow-greenCustom1 shadow-glow text-lg space-y-5 px-8 py-8 rounded-md">
            <input type="text" placeholder="Speed" className="formInput" />
            <input
              type="text"
              placeholder="Acceleration"
              className="formInput"
            />
            <input type="text" placeholder="Velocity" className="formInput" />
            <div className=" bg-white text-black/80 text-center p-1.5 rounded-lg lg:p-2 text-sm font-medium lg:text-base font-poppins relative">
              <button className="tracking-widest block mx-auto w-1/2">
                Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controller;
