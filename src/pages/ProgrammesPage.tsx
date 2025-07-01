import React, { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface StateContextType {
  openTab: string;
  setOpenTab: Dispatch<SetStateAction<string>>;
}

const StateContext = React.createContext<StateContextType | undefined>(
  undefined
);

interface ButtonProps {
  children: ReactNode;
  tabNumber: string;
}

const tabColors: Record<string, string> = {
  "1": "border-red-500 bg-red-100 text-red-700 dark:bg-red-900 dark:text-white",
  "2": "border-green bg-green/[.13] text-dark dark:bg-green-900 dark:text-white",
  "3": "border-blue-500 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-white",
};

const Button: React.FC<ButtonProps> = ({ children, tabNumber }) => {
  const context = React.useContext(StateContext);
  if (!context) return null;
  const { openTab, setOpenTab } = context;
  const isActive = tabNumber === openTab;
  const colorClass = isActive
    ? tabColors[tabNumber] || ""
    : "bg-gray-100 dark:bg-dark-2 border-transparent text-body-color hover:border-yellow hover:text-dark dark:text-dark-6 dark:hover:text-white";
  return (
    <button
      onClick={() => setOpenTab(tabNumber)}
      className={`block w-full border-l-4 px-7 py-6 text-left text-base font-medium md:px-10 lg:px-7 xl:px-10 ${colorClass}`}
    >
      {children}
    </button>
  );
};

interface ContentItemProps {
  title: string;
  text: string;
  text2: string;
  children: ReactNode;
  tabNumber: string;
}

const ContentItem: React.FC<ContentItemProps> = ({
  title,
  text,
  text2,
  children,
  tabNumber,
}) => {
  const context = React.useContext(StateContext);
  if (!context) return null;
  const { openTab } = context;
  if (openTab !== tabNumber) return null;
  return (
    <div>
      <h2 className="mb-6 text-3xl font-semibold text-dark dark:text-white">
        {title}
      </h2>
      <p className="mb-8 text-base leading-relaxed text-body-color dark:text-dark-6">
        {text}
      </p>
      <p className="mb-8 text-base leading-relaxed text-body-color dark:text-dark-6">
        {text2}
      </p>
      <div>{children}</div>
    </div>
  );
};

interface FeaturesListProps {
  listNumber: string;
  listText: string;
}

const FeaturesList: React.FC<FeaturesListProps> = ({
  listNumber,
  listText,
}) => {
  return (
    <div className="mb-4 flex">
      <span className="mr-5 flex h-[30px] w-full max-w-[30px] items-center justify-center rounded-full bg-green text-sm font-semibold text-white">
        {listNumber}
      </span>
      <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
        {listText}
      </p>
    </div>
  );
};

const ProgrammesPage: React.FC = () => {
  const [openTab, setOpenTab] = useState<string>("1");

  return (
    <StateContext.Provider value={{ openTab, setOpenTab }}>
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
              <div className="mb-10 overflow-hidden rounded bg-[#f3fff4] dark:bg-dark-3 lg:mb-0">
                <Button tabNumber="1">A Level</Button>
                <Button tabNumber="2">Upper Secondary (IGCSE)</Button>
                <Button tabNumber="3">Lower Secondary (Pre-IGCSE)</Button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-8/12 xl:w-7/12">
              <div className="lg:pl-8 2xl:pl-[60px]">
                <ContentItem
                  tabNumber="1"
                  title="A Level"
                  text="A Level is a two-year post-secondary education program that prepares students for university-level study. It is a rigorous and challenging program that requires students to take a wide range of subjects, including English, mathematics, science, and social studies."
                  text2="A Level is a two-year post-secondary education program that prepares students for university-level study. It is a rigorous and challenging program that requires students to take a wide range of subjects, including English, mathematics, science, and social studies."
                >
                  <FeaturesList
                    listNumber="1"
                    listText="Long established fact that a reader will be distracted."
                  />
                  <FeaturesList
                    listNumber="2"
                    listText="There are many variations of Lorem Ipsum."
                  />
                  <FeaturesList
                    listNumber="3"
                    listText="The standard chunk of Lorem Ipsum used since for those interested."
                  />
                </ContentItem>
                <ContentItem
                  tabNumber="2"
                  title="Upper Secondary (IGCSE)"
                  text="Upper Secondary (IGCSE) is a two-year post-secondary education program that prepares students for university-level study. It is a rigorous and challenging program that requires students to take a wide range of subjects, including English, mathematics, science, and social studies."
                  text2="Upper Secondary (IGCSE) is a two-year post-secondary education program that prepares students for university-level study. It is a rigorous and challenging program that requires students to take a wide range of subjects, including English, mathematics, science, and social studies."
                >
                  <FeaturesList
                    listNumber="1"
                    listText="Long established fact that a reader will be distracted."
                  />
                  <FeaturesList
                    listNumber="2"
                    listText="There are many variations of Lorem Ipsum."
                  />
                  <FeaturesList
                    listNumber="3"
                    listText="The standard chunk of Lorem Ipsum used since for those interested."
                  />
                </ContentItem>
                <ContentItem
                  tabNumber="3"
                  title="Lower Secondary (Pre-IGCSE)"
                  text="Lower Secondary (Pre-IGCSE) is a two-year post-secondary education program that prepares students for university-level study. It is a rigorous and challenging program that requires students to take a wide range of subjects, including English, mathematics, science, and social studies."
                  text2="Lower Secondary (Pre-IGCSE) is a two-year post-secondary education program that prepares students for university-level study. It is a rigorous and challenging program that requires students to take a wide range of subjects, including English, mathematics, science, and social studies."
                >
                  <FeaturesList
                    listNumber="1"
                    listText="Long established fact that a reader will be distracted."
                  />
                  <FeaturesList
                    listNumber="2"
                    listText="There are many variations of Lorem Ipsum."
                  />
                  <FeaturesList
                    listNumber="3"
                    listText="The standard chunk of Lorem Ipsum used since for those interested."
                  />
                </ContentItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StateContext.Provider>
  );
};

export default ProgrammesPage;
