
    import React from "react";

const ShimmerCard = () => {
  return (
    <div className=" shimmer-card flex flex-col  gap-[0.5rem] m-[1rem] grow-1">
      <div className=" h-[180px] md:w-[200px] w-[130px] rounded-t-2xl bg-[#373737] grow-1"></div>
      <div className="p-[0.2rem] mt-[0.4rem] flex flex-col justify-between grow-1 gap-[0.5rem] ">
        <div className=" h-[30px] md:w-[90%] bg-[#373737] rounded-2xl"></div>
        <div className="h-[30px] md:w-[90%] bg-[#373737] rounded-2xl"></div>
        <div className=" h-[50px] md:w-[90%] rounded-2xl bg-[#373737]"></div>
      </div>
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="shimmer-container max-w-[1400px] w-[90%] p-[1rem] mt-[1rem] flex flex-col">
      <div className="shimmer-search flex justify-center items-center mb-[1rem]">
        <div className="w-[90%] h-[60px] max-w-[800px] bg-[#373737] rounded-2xl"></div>
        
      </div>
      <div className="flex flex-row flex-wrap ">
        <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      </div>
    </div>
  );
};

export default Shimmer;

