import React from "react";
import StuGroup from "../assets/images/stugroup.png";
import StuGroupWhite from "../assets/images/stugroup_white.png";

export default function About() {
  return (
    <section className="overflow-hidden bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <img
            src={StuGroup}
            alt="about image"
            className="w-full object-center dark:hidden"
          />
          <img
            src={StuGroupWhite}
            alt="about image"
            className="w-full object-center hidden dark:block"
          />
        </div>
      </div>
    </section>
  );
}
