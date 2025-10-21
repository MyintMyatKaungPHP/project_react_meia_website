import React from "react";
import { Link } from "react-router-dom";
import under from "../assets/images/under.gif";

const UnderConstructionPage: React.FC = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center py-24 md:py-32 lg:py-40">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[650px] text-center">
              <span className="mb-3 inline-block rounded bg-yellow px-3 py-1 text-sm font-medium text-dark">
                Under Construction
              </span>
              <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl">
                This page is coming soon
              </h1>
              <p className="mx-auto mb-8 max-w-[520px] text-base text-body-color dark:text-dark-6">
                We’re working hard to bring you this content. Please check back
                later.
              </p>

              <div className="flex items-center justify-center">
                <img src={under} alt="under construction" className="w-[50%]" />
              </div>

              <div className="flex items-center justify-center gap-3 py-10">
                <Link
                  to="/"
                  className="rounded-md bg-green px-6 py-3 text-base font-medium text-white hover:bg-yellow hover:text-dark"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderConstructionPage;
