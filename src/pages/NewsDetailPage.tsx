import React from "react";

const NewsDetailPage = () => {
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
                    <div className="mb-4 flex items-center">
                      <p className="mr-5 flex items-center text-sm font-medium text-white md:mr-8">
                        <span className="mr-3">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 2.6499H12.7V2.0999C12.7 1.7999 12.45 1.5249 12.125 1.5249C11.8 1.5249 11.55 1.7749 11.55 2.0999V2.6499H4.42505V2.0999C4.42505 1.7999 4.17505 1.5249 3.85005 1.5249C3.52505 1.5249 3.27505 1.7749 3.27505 2.0999V2.6499H2.00005C1.15005 2.6499 0.425049 3.3499 0.425049 4.2249V12.9249C0.425049 13.7749 1.12505 14.4999 2.00005 14.4999H14C14.85 14.4999 15.575 13.7999 15.575 12.9249V4.1999C15.575 3.3499 14.85 2.6499 14 2.6499ZM1.57505 7.2999H3.70005V9.7749H1.57505V7.2999ZM4.82505 7.2999H7.45005V9.7749H4.82505V7.2999ZM7.45005 10.8999V13.3499H4.82505V10.8999H7.45005ZM8.57505 10.8999H11.2V13.3499H8.57505V10.8999ZM8.57505 9.7749V7.2999H11.2V9.7749H8.57505ZM12.3 7.2999H14.425V9.7749H12.3V7.2999ZM2.00005 3.7749H3.30005V4.2999C3.30005 4.5999 3.55005 4.8749 3.87505 4.8749C4.20005 4.8749 4.45005 4.6249 4.45005 4.2999V3.7749H11.6V4.2999C11.6 4.5999 11.85 4.8749 12.175 4.8749C12.5 4.8749 12.75 4.6249 12.75 4.2999V3.7749H14C14.25 3.7749 14.45 3.9749 14.45 4.2249V6.1749H1.57505V4.2249C1.57505 3.9749 1.75005 3.7749 2.00005 3.7749ZM1.57505 12.8999V10.8749H3.70005V13.3249H2.00005C1.75005 13.3499 1.57505 13.1499 1.57505 12.8999ZM14 13.3499H12.3V10.8999H14.425V12.9249C14.45 13.1499 14.25 13.3499 14 13.3499Z"
                              fill="currentColor"
                            />
                          </svg>
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
                      <MetaTagItem link="#" name="Design" />
                      <MetaTagItem link="#" name="Development" />
                      <MetaTagItem link="#" name="Info" />
                    </div>
                    <h2 className="mb-6 text-[26px] font-bold leading-normal text-dark dark:text-white sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug">
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
                    <div className="-mx-4 mb-8 flex flex-wrap">
                      <div className="w-full px-4">
                        <h2 className="relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
                          Related Articles
                        </h2>
                        <span className="mb-10 inline-block h-[2px] w-20 bg-green dark:bg-yellow"></span>
                      </div>

                      <RelatedArticleItem
                        title="Create engaging online courses your student…"
                        image="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        authorName="Glomiya Lucy"
                      />
                      <RelatedArticleItem
                        image="https://cdn.tailgrids.com/assets/images/application/blog-details/blog-details-02/article-03.png"
                        title="The ultimate formula for launching online course"
                        authorName="Andrio jeson"
                      />
                      <RelatedArticleItem
                        image="https://cdn.tailgrids.com/assets/images/application/blog-details/blog-details-02/article-04.png"
                        title="50 Best web design tips & tricks that will help you"
                        authorName="Samoyel Dayno"
                      />
                      <RelatedArticleItem
                        image="https://cdn.tailgrids.com/assets/images/application/blog-details/blog-details-02/article-01.png"
                        title="The 8 best landing page builders, reviewed"
                        authorName="Andrio Glori"
                      />
                    </div>

                    <div className="mb-12 overflow-hidden rounded">
                      <img
                        src="https://cdn.tailgrids.com/assets/images/application/blog-details/blog-details-02/bannder-ad.jpg"
                        alt="image"
                        className="w-full"
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

const RelatedArticleItem = ({ image, title, authorName }) => {
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

const MetaTagItem = ({ link, name }) => {
  return (
    <a
      href={link}
      className="mb-2 mr-2 block rounded bg-primary/5 px-5 py-2 text-xs font-medium text-green hover:bg-green dark:text-yellow dark:hover:bg-yellow hover:text-white dark:hover:text-dark md:mr-4 lg:mr-2 xl:mr-4"
    >
      {name}
    </a>
  );
};

const SocialLinkItem = ({ link, children }) => {
  return <a href={link}>{children}</a>;
};
