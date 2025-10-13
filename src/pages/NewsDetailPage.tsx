import React from "react";
import { FaCalendar, FaSearch } from "react-icons/fa";
import CategoryItem from "../components/CategoryItem";

interface NewsArticleCardProps {
  image: string;
  title: string;
  authorName: string;
}

interface NewsTagProps {
  link: string;
  name: string;
}

const NewsDetailPage: React.FC = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="relative z-20 mb-[60px] overflow-hidden rounded">
                <img
                  src="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-01.jpg"
                  alt="image"
                  className="lg:min-h-auto min-h-[250px] w-full object-cover"
                />
                <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-gradient-to-t from-dark/70 to-transparent">
                  <div className="flex flex-wrap items-center p-5 pb-4 sm:p-8 sm:pb-4">
                    <div className="mb-4 mr-5 flex items-center md:mr-10">
                      <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                        <img
                          src="https://cdn.tailgrids.com/assets/images/application/blog-details/blog-details-02/author-01.png"
                          alt="image"
                          className="w-full"
                        />
                      </div>
                      <p className="text-base font-medium text-white">
                        <span className="pr-0.5">By </span>
                        <a href="javascript:void(0)" className="text-white">
                          Samuyl Joshi
                        </a>
                      </p>
                    </div>
                    <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
                      <p className="flex items-center text-sm font-medium text-white">
                        <span className="px-3 py-1 rounded bg-green text-white dark:bg-yellow dark:text-dark text-xs font-semibold mr-10">
                          Education
                        </span>
                        <span className="mr-3">
                          <FaCalendar className="text-base" />
                        </span>

                        <span>26 Feb 2023</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-8/12">
                  <div>
                    <div className="mb-8 flex flex-wrap items-center md:mb-0">
                      <NewsTag link="#" name="Design" />
                      <NewsTag link="#" name="Development" />
                      <NewsTag link="#" name="Info" />
                    </div>
                    <h2 className="mb-6 text-[26px] font-bold leading-normal text-dark dark:text-white sm:text-2xl sm:leading-snug md:text-3xl md:leading-snug">
                      Facing a challenge is kind of a turn-on for an easy rider
                    </h2>
                    <p className="mb-8 text-base leading-relaxed text-body-color dark:text-dark-6">
                      There’s a time and place for everything… including asking
                      for reviews. For instance: you should not asking for a
                      review on your checkout page. The sole purpose of this
                      page is to guide your customer to complete their purchase,
                      and this means that the page should be as minimalist and
                      pared-down possible. You don’t want to have any
                      unnecessary elements or Call To Actions.
                    </p>
                    <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                      There’s a time and place for everything… including asking
                      for reviews. For instance: you should not asking for a
                      review on your checkout page. The sole purpose of this
                      page is to guide your customer to complete their purchase,
                      and this means that the page should be as minimalist and
                      pared-down possible. You don’t want to have any
                      unnecessary elements or Call To Actions.
                    </p>
                    <h3 className="mb-8 text-2xl font-bold text-dark dark:text-white sm:text-[26px]">
                      Sea no quidam vulputate
                    </h3>
                    <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                      At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                      vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                      iracundia signiferumque quo. Sed virtute suavitate
                      suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                      adversarium interpretaris eu sit, eum viris impedit ne.
                      Erant appareat corrumpit ei vel.
                    </p>

                    <div className="relative z-10 mb-10 overflow-hidden rounded bg-primary/5 p-10 text-center md:px-[60px]">
                      <div className="mx-auto max-w-[530px]">
                        <span className="mb-6 flex justify-center text-primary">
                          <svg
                            width="44"
                            height="26"
                            viewBox="0 0 44 26"
                            className="fill-current"
                          >
                            <path d="M10.1101 0.00124908C5.46698 -0.0701833 1.25247 2.92998 0.252417 7.00162C-0.319041 9.50175 0.180985 12.0019 1.68106 14.002C3.25258 16.145 5.68128 17.5022 8.39571 17.8593L10.8958 24.0025C11.1816 24.6454 11.8245 25.074 12.5388 25.074C13.2531 25.074 13.896 24.6454 14.1817 24.0025C14.6103 22.931 15.1103 21.7881 15.6104 20.7166C16.8247 18.0022 18.0391 15.2163 18.9677 12.359C19.9677 9.35889 19.5392 6.14443 17.8248 3.71573C16.1104 1.35846 13.396 0.0726814 10.1101 0.00124908ZM16.6104 11.6447C15.6818 14.3592 14.4675 17.145 13.3245 19.788C13.1102 20.3595 12.8245 20.8595 12.6102 21.431L10.1815 15.5735L9.39576 15.5021C7.10992 15.3592 4.96695 14.2163 3.7526 12.5733C2.68112 11.1447 2.32396 9.35889 2.75255 7.64451C3.46687 4.71579 6.53846 2.57281 10.0386 2.57281H10.1101C12.5388 2.57281 14.5389 3.57287 15.8247 5.28724C17.039 7.00162 17.3247 9.43032 16.6104 11.6447Z" />
                            <path d="M42.3267 3.78726C40.6124 1.35856 37.8979 0.00134277 34.612 0.00134277C34.5406 0.00134277 34.5406 0.00134277 34.4692 0.00134277C29.8975 0.00134277 25.7544 3.0015 24.7544 7.00171C24.1829 9.50185 24.6829 12.002 26.183 14.0735C27.7545 16.2165 30.1832 17.5737 32.8977 17.9309L35.3978 24.074C35.6835 24.7169 36.3264 25.1455 37.0407 25.1455C37.7551 25.1455 38.398 24.7169 38.6837 24.074C39.1123 23.0026 39.6123 21.8596 40.1123 20.7882C41.3267 18.0737 42.541 15.2879 43.4696 12.4306C44.4697 9.50184 44.0411 6.21596 42.3267 3.78726ZM41.1124 11.6448C40.1838 14.3592 38.9694 17.1451 37.8265 19.7881C37.6122 20.3596 37.3265 20.8596 37.1122 21.431L34.6835 15.5736L33.8977 15.5022C31.6119 15.3593 29.4689 14.2164 28.2546 12.5734C27.1831 11.1448 26.8259 9.35898 27.2545 7.57317C27.9688 4.64445 31.0404 2.50147 34.5406 2.50147H34.612C37.0407 2.50147 39.0408 3.50153 40.3266 5.2159C41.541 7.00171 41.8267 9.43041 41.1124 11.6448Z" />
                          </svg>
                        </span>
                        <p className="mb-4 text-base font-medium italic leading-[26px] text-dark dark:text-white">
                          A spring of truth shall flow from it: like a new star
                          it shall scatter the darkness of ignorance, and cause
                          a light heretofore unknown to shine amongst men.
                        </p>
                        <span className="text-sm italic text-body-color dark:text-dark-6">
                          “Andrio Domeco”
                        </span>
                      </div>
                      <div>
                        <span className="absolute left-0 top-0 -z-10">
                          <svg
                            width="103"
                            height="109"
                            viewBox="0 0 103 109"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="0.483916"
                              cy="3.5"
                              rx="102.075"
                              ry="105.5"
                              transform="rotate(180 0.483916 3.5)"
                              fill="url(#paint0_linear)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear"
                                x1="-101.591"
                                y1="-50.4346"
                                x2="49.1618"
                                y2="-49.6518"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3056D3" stopOpacity="0.15" />
                                <stop
                                  offset="1"
                                  stopColor="white"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute bottom-0 right-0 -z-10">
                          <svg
                            width="102"
                            height="106"
                            viewBox="0 0 102 106"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M204.558 105.5C204.558 163.766 158.858 211 102.484 211C46.1095 211 0.409152 163.766 0.409162 105.5C0.409172 47.234 46.1096 8.25865e-06 102.484 1.84462e-05C158.858 2.86338e-05 204.559 47.234 204.558 105.5Z"
                              fill="url(#paint0_linear_1179_3)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1179_3"
                                x1="0.40917"
                                y1="51.5654"
                                x2="151.162"
                                y2="52.3482"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3056D3" stopOpacity="0.15" />
                                <stop
                                  offset="1"
                                  stopColor="white"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-8 text-2xl font-bold text-dark dark:text-white sm:text-[26px]">
                      What is it with your ideas?
                    </h3>
                    <p className="mb-8 text-base leading-relaxed text-body-color dark:text-dark-6">
                      At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                      vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                      iracundia signiferumque quo. Sed virtute suavitate
                      suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                      adversarium interpretaris eu sit, eum viris impedit ne.
                      Erant appareat corrumpit ei vel.
                    </p>
                    <p className="mb-11 text-base leading-relaxed text-body-color dark:text-dark-6">
                      At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                      vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                      iracundia signiferumque quo. Sed virtute suavitate
                      suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                      adversarium interpretaris eu sit, eum viris impedit ne.
                      Erant appareat corrumpit ei vel.
                    </p>
                  </div>
                </div>

                <div className="w-full px-4 lg:w-4/12">
                  <div>
                    {/* Search Box */}
                    <div className="mb-8 w-full">
                      <div className="w-ful">
                        <h2 className="relative text-2xl font-semibold text-dark dark:text-white">
                          Search
                        </h2>
                        <span className="mb-6 inline-block h-[2px] w-24 bg-green dark:bg-yellow"></span>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full rounded border border-stroke bg-white py-3 pl-4 pr-12 text-base text-body-color outline-none focus:border-green dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6 dark:focus:border-yellow"
                          />
                          <button className="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-body-color hover:text-green dark:text-dark-6 dark:hover:text-yellow">
                            <FaSearch className="text-lg" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Category List */}
                    <div className="mb-8 w-full">
                      <div className="w-full">
                        <h2 className="relative text-2xl font-semibold text-dark dark:text-white">
                          Categories
                        </h2>
                        <span className="mb-6 inline-block h-[2px] w-24 bg-green dark:bg-yellow"></span>
                        <div className="space-y-2">
                          <CategoryItem name="Education" count={12} />
                          <CategoryItem name="Events" count={8} />
                          <CategoryItem name="News" count={15} />
                          <CategoryItem name="Achievements" count={6} />
                          <CategoryItem name="Announcements" count={10} />
                        </div>
                      </div>
                    </div>

                    <div className="-mx-4 mb-8 flex flex-wrap">
                      <div className="w-full">
                        <h2 className="relative text-2xl font-semibold text-dark dark:text-white">
                          Related News
                        </h2>
                        <span className="mb-6 inline-block h-[2px] w-24 bg-green dark:bg-yellow"></span>
                      </div>

                      <NewsArticleCard
                        title="Create engaging online courses your student…"
                        image="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        authorName="Glomiya Lucy"
                      />
                      <NewsArticleCard
                        image="https://cdn.tailgrids.com/assets/images/application/blog-details/blog-details-02/article-03.png"
                        title="The ultimate formula for launching online course"
                        authorName="Andrio jeson"
                      />
                      <NewsArticleCard
                        image="https://cdn.tailgrids.com/assets/images/application/blog-details/blog-details-02/article-04.png"
                        title="50 Best web design tips & tricks that will help you"
                        authorName="Samoyel Dayno"
                      />
                      <NewsArticleCard
                        image="https://cdn.tailgrids.com/assets/images/application/blog-details/blog-details-02/article-01.png"
                        title="The 8 best landing page builders, reviewed"
                        authorName="Andrio Glori"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetailPage;

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({
  image,
  title,
  authorName,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-full">
      <div className="mb-5 flex w-full items-center border-b border-stroke pb-5 dark:border-dark-3">
        <div className="mr-5 h-auto w-full max-w-[80px] overflow-hidden">
          <img src={image} alt="image" className="w-full" />
        </div>
        <div className="w-full">
          <h4>
            <a
              href="#"
              className="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-green dark:hover:text-yellow dark:text-white lg:text-base xl:text-lg"
            >
              {title}
            </a>
          </h4>
          <p className="text-sm text-body-color dark:text-dark-6">
            {authorName}
          </p>
        </div>
      </div>
    </div>
  );
};

const NewsTag: React.FC<NewsTagProps> = ({ link, name }) => {
  return (
    <a
      href={link}
      className="mb-2 mr-2 block rounded bg-primary/5 px-5 py-2 text-xs font-medium text-green hover:bg-green dark:text-yellow dark:hover:bg-yellow hover:text-white dark:hover:text-dark md:mr-4 lg:mr-2 xl:mr-4"
    >
      {name}
    </a>
  );
};
