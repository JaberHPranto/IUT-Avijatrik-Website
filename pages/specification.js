import React from "react";
import Layout from "/components/Layout";

const Specification = () => {
  return (
    <Layout>
      <div className="h-screen">
        <div className="bg-homeBackground h-screen bg-cover bg-center bg-no-repeat  bgBlur -z-10 absolute top-0 left-0 right-0 bottom-0" />
        {/* frame */}
        <div className="flex items-center justify-center h-full md:justify-end md:container">
          <div className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] z-0 relative">
            <img src="/images/form.png" alt="form" />
            {/* login info */}
            <div className="absolute left-9 top-9 h-[275px] w-[236px] flex  flex-col pl-8 pt-4 gap-8 lg:left-12 lg:top-12 lg:h-[366px] lg:w-[316px] lg:gap-12">
              <ul className="lg:text-[21px]">
                <li>Technical specs:</li>
                <li>Drive system:</li>
                <li>Weight:</li>
                <li>Height:</li>
                <li>Power source:</li>
                <li>Max temp:</li>
                <li>Min temp:</li>
                <li>Max speed:</li>
                <li>Min turning radius:</li>
                <li>Driving mode: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Specification;
