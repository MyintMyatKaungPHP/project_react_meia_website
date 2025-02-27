import React from "react";
import organisationalStructure from "../../assets/images/Organisational_Structure.png";
import organisationalStructure_white from "../../assets/images/Organisational_Structure_white.png";

function OrganisationalStructure() {
  return (
    <section className="dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Organisational Structure
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1170px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="relative z-10 overflow-hidden dark:bg-dark">
                <img
                  src={organisationalStructure}
                  alt="Organisational Structure"
                  className="w-full dark:hidden"
                />
                <img
                  src={organisationalStructure_white}
                  alt="Organisational Structure"
                  className="w-full hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrganisationalStructure;
