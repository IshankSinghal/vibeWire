import { animationDefaultOPtions } from "@/lib/utils";
import Lottie from "react-lottie";

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 md:bg-[#1c1d25] md:flex flex-col items-center justify-center hidden duration-1000 transition-all">
      <Lottie
        isClickToPauseDisabled={true}
        height={200}
        width={200}
        options={animationDefaultOPtions}
      />
      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-300 text-center">
        <h3 className="poppins-medium ">
          Hey<span className="text-purple-500">! </span>Let's{" "}
          <span className="text-purple-500 "><i>Vibe</i></span>
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
