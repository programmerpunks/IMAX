import React from "react";
import VideoPlayer from '../../VideoPlayer'

const line = require("../../../images/NFT/line.svg").default;

const NFTDetailsCart = ({ NFT }) => {
  return (
    <>
      <div className="flex md:px-40 justify-center bg-white flex-wrap flex-col md:flex-row">
        <div className="flex p-10 py-20 flex-col w-full md:w-[100%] gap-5 flex-wrap">
          <div className="flex justify-start">
            <h1 className="text-3xl text-red-900">{NFT.title}</h1>
          </div>
          <div className="flex  justify-center font-bold">{NFT.details}</div>
          <div className="flex   justify-center text-gray-700">{NFT.about}</div>
          <div className="flex justify-end">
            <div className="flex justify-end border-gray-700 border-r-2 border-b-2 w-fit border-">
              <p>{NFT.speaker}</p>
            </div>
          </div>
        </div>

        <div className="masking-image w-full md:w-[100%] lg:w-[80%] 2xl:w-[60%] pt-[2%] flex">
          <div className="flex justify-center mx-10 mb-10 overflow-hidden w-[100%] masking-image">
            <VideoPlayer url={NFT.video_url} id={3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTDetailsCart;
