import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex">
        {/* <!-- Won't grow, stays at content width --> */}
        <div className="bg-blue-200 p-4 ">Static</div>

        {/* <!-- Will grow to fill available space --> */}
        <div className=" bg-green-200 p-4">Grows</div>

        {/* <!-- Won't grow --> */}
        <div className="bg-blue-200 p-4 flex-none">Static sdfsdfsdfsdfsf</div>
      </div>

      <div className="flex ">
        {/* <!-- Container has fixed width --> */}
        {/* <!-- This won't shrink (default is flex-shrink-1) --> */}
        <div className="flex-1 w-32 bg-red-200 p-4 invert">Won't shrink</div>

        {/* <!-- This will shrink to fit --> */}
        <div className="w-32 bg-yellow-200 p-4 invert-0">Will shrink</div>
      </div>
    </div>
  );
};

export default page;
