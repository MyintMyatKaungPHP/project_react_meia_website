import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider"; // path ကိုသင့် folder structure အတိုင်း

interface TabItem {
  id: string;
  label: string;
  bg: string;
  border: string;
  text: string;
  hoverBg: string;
  hoverBorder: string;
  hoverText: string;
}

const tabList: TabItem[] = [
  {
    id: "1",
    label: "Advanced Level",
    bg: "bg-red-100 dark:bg-red-900",
    border: "border-red-500",
    text: "text-red-700 dark:text-red-300",
    hoverBg: "hover:bg-red-100 dark:hover:bg-red-900",
    hoverBorder: "hover:border-red-500",
    hoverText: "hover:text-red-700 dark:hover:text-red-300",
  },
  {
    id: "2",
    label: "Upper Secondary (IGCSE)",
    bg: "bg-green-100 dark:bg-green-900",
    border: "border-green-500",
    text: "text-green-700 dark:text-green-300",
    hoverBg: "hover:bg-green-100 dark:hover:bg-green-900",
    hoverBorder: "hover:border-green-500",
    hoverText: "hover:text-green-700 dark:hover:text-green-300",
  },
  {
    id: "3",
    label: "Lower Secondary (Pre-IGCSE)",
    bg: "bg-blue-100 dark:bg-blue-900",
    border: "border-blue-500",
    text: "text-blue-700 dark:text-blue-300",
    hoverBg: "hover:bg-blue-100 dark:hover:bg-blue-900",
    hoverBorder: "hover:border-blue-500",
    hoverText: "hover:text-blue-700 dark:hover:text-blue-300",
  },
];

const imagesTab1 = [
  "https://thumbs.dreamstime.com/z/cheerful-teacher-interacting-diverse-students-colorful-classroom-plastic-bag-free-day-cheerful-teacher-interacting-317149403.jpg",
  "https://thumbs.dreamstime.com/z/asian-female-teacher-teaching-diversity-kids-reading-book-cla-classroom-kindergarten-pre-school-concept-111242734.jpg",
  "https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://as2.ftcdn.net/v2/jpg/05/40/23/99/1000_F_540239926_4VPbVHUSfnMXiZ5L03YNlaVuwynrfMdP.jpg",
];

const imagesTab2 = [
  "https://c8.alamy.com/comp/F35NTH/teacher-teaching-her-classroom-of-students-F35NTH.jpg",
  "https://c8.alamy.com/comp/CB3DPK/teacher-teaching-students-in-the-classroom-CB3DPK.jpg",
  "https://c8.alamy.com/comp/M7ATRW/female-teacher-teaching-her-students-in-a-classroom-M7ATRW.jpg",
  "https://thumbs.dreamstime.com/z/teacher-students-classroom-teaching-58888092.jpg",
];

const imagesTab3 = [
  "https://c8.alamy.com/comp/KX38AY/indian-school-students-teacher-teaching-studying-computer-education-KX38AY.jpg",
  "https://thumbs.dreamstime.com/z/diverse-classroom-interaction-engaged-teacher-students-vector-317148365.jpg",
  "https://img.freepik.com/free-photo/group-diverse-kids-studying_53876-138030.jpg?w=2000",
  "https://img.freepik.com/free-photo/kids-studying-laboratory_23-2148898479.jpg?w=2000",
];

interface ListItemProps {
  count: number;
  text: string;
}

const ListItem_Pearson: React.FC<ListItemProps> = ({ count, text }) => {
  return (
    <li className="flex text-base text-left">
      <span className="bg-sky-500 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
        {count}
      </span>
      {text}
    </li>
  );
};

const ListItem_CIE: React.FC<ListItemProps> = ({ count, text }) => {
  return (
    <li className="flex text-base">
      <span className="bg-red mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
        {count}
      </span>
      {text}
    </li>
  );
};

const ListItem_MIEA: React.FC<ListItemProps> = ({ count, text }) => {
  return (
    <li className="flex text-base text-left">
      <span className="bg-green mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
        {count}
      </span>
      {text}
    </li>
  );
};

const ProgrammesPage: React.FC = () => {
  const [openTab, setOpenTab] = useState<string>("1");

  // Tab-specific images
  let selectedImages = imagesTab1;
  if (openTab === "2") selectedImages = imagesTab2;
  else if (openTab === "3") selectedImages = imagesTab3;

  const inactiveClasses = "text-body-color border-transparent dark:text-dark-6";

  return (
    <section className="relative z-20 overflow-hidden bg-white py-10 dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              className="mx-auto mb-[60px] max-w-[510px] text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-2 block text-lg font-semibold text-green">
                What we Serve
              </span>
              <motion.h2
                className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Best Services
              </motion.h2>
              <motion.p
                className="text-base text-body-color dark:text-dark-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-10 overflow-hidden rounded-sm bg-[#F3F6FF] lg:mb-0 dark:bg-dark-3">
              {tabList.map((tab) => {
                const isActive = openTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setOpenTab(tab.id)}
                    className={`block w-full border-l-4 px-7 py-6 text-base font-medium md:px-10 lg:px-7 xl:px-10 text-left transition
                      ${
                        isActive
                          ? `${tab.bg} ${tab.border} ${tab.text}`
                          : `${inactiveClasses} ${tab.hoverBg} ${tab.hoverBorder} ${tab.hoverText}`
                      }
                    `}
                    type="button"
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-full px-4 lg:w-8/12 xl:w-7/12">
            <div className="lg:pl-8 2xl:pl-[60px]">
              <div className="text-dark dark:text-white text-justify">
                {openTab === "1" && (
                  <div>
                    <h2 className="mb-6 text-3xl font-semibold text-dark dark:text-white">
                      Advanced Level
                    </h2>
                    <ImageSlider
                      images={imagesTab1}
                      key={imagesTab1.join("-")}
                    />
                    <p className="mb-2">
                      The Advanced Level (A Level) is an internationally
                      recognized academic qualification, particularly prominent
                      in the United Kingdom and in many countries around the
                      world.
                    </p>
                    <p className="mb-2">
                      Studied typically over two years by students aged 16 to
                      19, A Levels allow learners to focus deeply on a few
                      chosen subjects based on their interests and future
                      university plans. The courses are designed to promote
                      analytical thinking, problem-solving, and a thorough
                      understanding of each subject.
                    </p>
                    <p className="mb-2">
                      Completing A Levels is a common pathway to higher
                      education; universities in the UK and across the globe
                      widely accept A Levels as proof of academic achievement
                      and subject expertise. As such, A Levels are highly valued
                      by both universities and employers, providing students
                      with strong foundations for further study and professional
                      success.
                    </p>
                    <h2 className="text-2xl font-semibold py-3">
                      Programme Information
                    </h2>
                    <table className="min-w-full border border-gray-300">
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Age Range
                          </td>
                          <td className="border px-4 py-2">
                            16 - 19 years old
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Class Year
                          </td>
                          <td className="border px-4 py-2">Year 12, Year 13</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Duration
                          </td>
                          <td className="border px-4 py-2">24 months</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Class Types
                          </td>
                          <td className="border px-4 py-2">
                            On-Campus or Online
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <h2 className="text-2xl font-semibold py-3">
                      Available Subjects in MIEA
                    </h2>
                    <h3 className="text-lg pb-3 font-semibold text-sky-500">
                      Pearson | Edexcel Curriculum
                    </h3>
                    <div className="mb-3 flex flex-col md:flex-row gap-x-8 gap-y-4">
                      <div className="w-full md:w-1/2">
                        <ol className="space-y-3">
                          <ListItem_Pearson count={1} text="Chemistry" />
                          <ListItem_Pearson count={2} text="Biology" />
                          <ListItem_Pearson count={3} text="Physics" />
                          <ListItem_Pearson
                            count={4}
                            text="Information Technology (IT)"
                          />
                          <ListItem_Pearson count={5} text="Pure Mathematics" />
                          <ListItem_Pearson
                            count={6}
                            text="Further Pure Mathematics"
                          />
                        </ol>
                      </div>
                      <div className="w-full md:w-1/2">
                        <ol className="space-y-3">
                          <ListItem_Pearson count={7} text="Mechanics" />
                          <ListItem_Pearson count={8} text="Statistics" />
                          <ListItem_Pearson
                            count={9}
                            text="Decision Mathematics"
                          />
                          <ListItem_Pearson count={10} text="Accounting" />
                          <ListItem_Pearson count={11} text="Bussiness" />
                          <ListItem_Pearson count={12} text="Economics" />
                        </ol>
                      </div>
                    </div>
                  </div>
                )}

                {openTab === "2" && (
                  <div>
                    <h2 className="mb-6 text-3xl font-semibold text-dark dark:text-white">
                      Upper Secondary (IGCSE)
                    </h2>
                    <ImageSlider
                      images={imagesTab2}
                      key={imagesTab2.join("-")}
                    />
                    <p className="mb-2">
                      Upper Secondary (IGCSE) refers to an academic stage
                      designed for students typically aged 14 to 16, offering
                      them an internationally recognized qualification called
                      the International General Certificate of Secondary
                      Education (IGCSE). Developed by Cambridge Assessment
                      International Education and other major examination boards
                      such as Pearson | Edexcel.
                    </p>
                    <p className="mb-2">
                      IGCSE provides a wide range of subjects and is designed
                      for a global student community. It emphasizes both
                      knowledge and practical skill development, using a
                      flexible curriculum and modern assessment methods.
                    </p>
                    <p className="mb-2">
                      IGCSE is widely accepted by universities and employers
                      around the world as equivalent to the UK’s GCSE. It is an
                      ideal stepping stone toward A Levels, International
                      Baccalaureate (IB), or other post-16 programs.
                    </p>
                    <h2 className="text-2xl font-semibold py-3">
                      Programme Information
                    </h2>
                    <table className="min-w-full border border-gray-300">
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Age Range
                          </td>
                          <td className="border px-4 py-2">
                            14 - 16 years old
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Class Year
                          </td>
                          <td className="border px-4 py-2">Year 10, Year 11</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Duration
                          </td>
                          <td className="border px-4 py-2">
                            18 months or 24 months
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Class Types
                          </td>
                          <td className="border px-4 py-2">
                            On-Campus or Online
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h2 className="text-2xl font-semibold py-3">
                      Available Subjects in MIEA
                    </h2>
                    {/* Columns row flex */}
                    <div className="mb-3 flex flex-col md:flex-row gap-x-8 gap-y-4">
                      {/* CIE Column */}
                      <div className="w-full md:w-1/2">
                        <h3 className="text-lg pb-3 font-semibold text-red">
                          CIE Curriculum
                        </h3>
                        <ol className="space-y-3">
                          <ListItem_CIE
                            count={1}
                            text="English First Language"
                          />
                          <ListItem_CIE
                            count={2}
                            text="English Second Language"
                          />
                          <ListItem_CIE
                            count={3}
                            text="Additional Mathematics"
                          />
                          <ListItem_CIE count={4} text="Extended Mathematics" />
                          <ListItem_CIE count={5} text="Physics" />
                          <ListItem_CIE count={6} text="Chemistry" />
                          <ListItem_CIE count={7} text="Biology" />
                          <ListItem_CIE count={8} text="ICT" />
                          <ListItem_CIE count={9} text="Computer Science" />
                          <ListItem_CIE count={10} text="Bussiness" />
                          <ListItem_CIE count={11} text="Accounting" />
                          <ListItem_CIE count={12} text="Economics" />
                        </ol>
                      </div>
                      {/* Pearson Column */}
                      <div className="w-full md:w-1/2">
                        <h3 className="text-lg pb-3 font-semibold text-sky-500">
                          Pearson | Edexcel Curriculum
                        </h3>
                        <ol className="space-y-3">
                          <ListItem_Pearson
                            count={1}
                            text="English Language B"
                          />
                          <ListItem_Pearson
                            count={2}
                            text="English Second Language"
                          />
                          <ListItem_Pearson count={3} text="Mathematics B" />
                          <ListItem_Pearson
                            count={4}
                            text="Further Pure Mathematics"
                          />
                          <ListItem_Pearson count={5} text="Physics" />
                          <ListItem_Pearson count={6} text="Chemistry" />
                          <ListItem_Pearson count={7} text="Biology" />
                          <ListItem_Pearson count={8} text="Human Biology" />
                          <ListItem_Pearson count={9} text="ICT" />
                          <ListItem_Pearson
                            count={10}
                            text="Computer Science"
                          />
                          <ListItem_Pearson count={11} text="Bussiness" />
                          <ListItem_Pearson count={12} text="Accounting" />
                          <ListItem_Pearson count={13} text="Economics" />
                        </ol>
                      </div>
                    </div>
                  </div>
                )}
                {openTab === "3" && (
                  <div>
                    <h2 className="mb-6 text-3xl font-semibold text-dark dark:text-white">
                      Lower Secondary (Pre-IGCSE)
                    </h2>
                    <ImageSlider
                      images={imagesTab3}
                      key={imagesTab3.join("-")}
                    />
                    <p className="mb-2">
                      Lower Secondary is an important stage in a student’s
                      education, typically designed for learners aged 11 to 14.
                      During this phase, students build on the foundational
                      skills acquired in primary school and are introduced to a
                      wider range of subjects, such as mathematics, science,
                      languages, and social studies.
                    </p>
                    <p className="mb-2">
                      The Lower Secondary curriculum aims to develop students’
                      critical thinking, creativity, and problem-solving
                      abilities while encouraging independent learning and a
                      deeper understanding of core concepts.
                    </p>
                    <p className="mb-2">
                      This programmes serves as preparation for the next level
                      of education, enabling students to transition smoothly
                      into Upper Secondary programmes like IGCSE and beyond.
                    </p>
                    <h2 className="text-2xl font-semibold py-3">
                      Programme Information
                    </h2>
                    <table className="min-w-full border border-gray-300">
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Age Range
                          </td>
                          <td className="border px-4 py-2">
                            11 - 14 years old
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Class Year
                          </td>
                          <td className="border px-4 py-2">
                            Year 7, Year 8, Year 9
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Duration
                          </td>
                          <td className="border px-4 py-2">33 months</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold bg-gray-100 dark:bg-dark-2">
                            Class Types
                          </td>
                          <td className="border px-4 py-2">
                            On-Campus or Online
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h2 className="text-2xl font-semibold py-3">Subjects</h2>
                    <div className="mb-3 flex flex-col md:flex-row gap-x-8 gap-y-4">
                      <div className="w-full md:w-1/3">
                        <h3 className="text-lg pb-3 font-semibold text-green">
                          Year 7
                        </h3>
                        <ol className="space-y-3">
                          <ListItem_MIEA count={1} text="English" />
                          <ListItem_MIEA count={2} text="Mathematics" />
                          <ListItem_MIEA count={3} text="Computing" />
                          <ListItem_MIEA
                            count={4}
                            text="Combined Science (Physics, Chemistry, Biology)"
                          />
                          <ListItem_MIEA count={5} text="Global Perspectives" />
                        </ol>
                      </div>
                      <div className="w-full md:w-1/3">
                        <h3 className="text-lg pb-3 font-semibold text-green">
                          Year 8
                        </h3>
                        <ol className="space-y-3">
                          <ListItem_MIEA count={1} text="English" />
                          <ListItem_MIEA count={2} text="Mathematics" />
                          <ListItem_MIEA count={3} text="Computing" />
                          <ListItem_MIEA
                            count={4}
                            text="Combined Science (Physics, Chemistry, Biology)"
                          />
                          <ListItem_MIEA count={5} text="Global Perspectives" />
                        </ol>
                      </div>
                      <div className="w-full md:w-1/3">
                        <h3 className="text-lg pb-3 font-semibold text-green">
                          Year 9
                        </h3>
                        <ol className="space-y-3">
                          <ListItem_MIEA count={1} text="English" />
                          <ListItem_MIEA count={2} text="Mathematics" />
                          <ListItem_MIEA count={3} text="Computing" />
                          <ListItem_MIEA
                            count={4}
                            text="Combined Science (Physics, Chemistry, Biology)"
                          />
                          <ListItem_MIEA count={5} text="Global Perspectives" />
                          <ListItem_MIEA
                            count={6}
                            text="FAME (Business, Economics, Accounting"
                          />
                        </ol>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesPage;
