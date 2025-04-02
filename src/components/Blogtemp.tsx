// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
const blogtemp = () => {
  return (
    <div>
      {/* Wrapper */}
      <div className="bg-color py-32">
        <div className="max-w-[1028px] flex flex-col m-auto">
          {/* Blogs */}
          <div className=" flex flex-col gap-x-16 relative">
            <h1 className="text-[#592AC7] text-[64px] leading-[120%] font-semibold text-center ">
              Blogs
            </h1>
            {/* Featured Blog */}

            <div className="flex flex-row gap-16 justify-between flex-wrap px-5 py-[52px] bg-white my-16 rounded-3xl xl:gap-16 xl:max-w-5xl xl:px-16 xl:py-[52px] xl:my-16 xl:flex-nowrap md:px-16 md:py-[52px] z-10">
              {/* Left Image */}
              <div className="flex flex-col justify-center w-[100%] xl:w-[35%] lg:w-[35%] md:[100%] sm:w-[100%]">
                <img
                  src="images\blogs\test.png"
                  alt=""
                  width={306}
                  height={371}
                  className="border-radius-1240 h-full object-cover w-full max-h-[371px]"
                />
              </div>
              {/* Right Content */}
              <div className="flex flex-col gap-y-6 w-[100%] xl:w-[55%] lg:w-[55%] md:w-[100%] sm:w-[100%]">
                {/* Date & Time to Read */}
                <div className="flex flex-row gap-x-1">
                  <p className="font-secondary font-normal leading-[30px] text-[18px]">
                    Nov 20, 2024
                  </p>
                  <p className="font-secondary font-normal leading-[30px] text-[18px]">
                    .
                  </p>
                  <p className="font-secondary font-normal leading-[30px] text-[18px]">
                    3 min read
                  </p>
                </div>
                {/* Category */}
                <div className="bg-[#592AC7] px-4 py-2 w-[114px] rounded-[30px]">
                  <h3 className="font-primary font-semibold leading-[150%] text-base text-white text-center">
                    Our Youth
                  </h3>
                </div>
                {/* Title */}
                <h2 className="font-primary font-semibold leading-[120%] text-[40px]">
                  Coding My Way Up: Becoming a Full Stack Developer
                </h2>
                {/* Content */}
                <p className="font-secondary font-normal leading-[30px] text-[18px]">
                  Every journey starts with a dream, but sometimes, the path we
                  envision changes in unexpected ways. For Madhan Raj, financial
                  realities led him down a different road than his initial
                  passion. His story is one of growth and grit. Here, he shares
                  his evolution from a curious student to a full-fledged full
                  stack developer.
                </p>
              </div>
            </div>
            <div className="svg">
              <svg
                width="1434"
                height="560"
                viewBox="0 0 1434 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-20%] top-[1%] hidden xl:block "
              >
                <path
                  d="M1312.8 134.693C1312.8 134.693 1936.73 915.519 15.2333 268.018"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="19 19"
                />
                <path
                  d="M1218.8 61.7622C1210.81 61.8533 1253.38 118.317 1263.92 132.233C1266.33 133.008 1306.36 107.285 1307.16 107.276M1218.8 61.7622C1226.78 61.6711 1324.52 89.0307 1328.19 95.8067L1311.11 103.22M1218.8 61.7622L1311.11 103.22M1218.8 61.7622L1307.16 107.276M1311.11 103.22C1311.12 104.29 1311.14 106.589 1311.15 107.23C1311.16 108.032 1307.96 107.267 1307.16 107.276"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          {/* Blog Cards */}
          <div className="flex flex-row flex-wrap gap-x-[25px] gap-y-16 blog-list-block relative my-52 justify-between px-5">
            {/* Individual Blog Cards */}
            <div className="flex flex-col flex-wrap items-start p-10 bg-white gap-[22.59px] border-radius-18 w-full xl:min-h-[450px] box-shadow-default blog-list-box z-10 md:w-[45%] xl:w-[31%] hover:bg-[#592AC7] group">
              {/* Text- Title & Excerpt */}
              <img
                src="images\blogs\test.png"
                alt=""
                className="border-radius-1240 blog-list-image w-full"
                width={247.7}
                height={163.02}
              />
              <div className="flex flex-col gap-y-[7.19px]">
                <h2 className="font-primary font-semibold leading-[24.45px] text-[18.83px] group-hover:text-white">
                  Coding My Way Up: Becoming a Full Stack Developer
                </h2>
                <p className="font-secondary font-normal leading-[24.45px] text-[13.18px] group-hover:text-white">
                  Every journey starts with a dream, but sometimes, the path...
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-start p-10 bg-white gap-[22.59px] border-radius-18 w-full xl:min-h-[450px] box-shadow-default blog-list-box z-10 md:w-[45%] xl:w-[31%] hover:bg-[#592AC7] group">
              {/* Text- Title & Excerpt */}
              <img
                src="images\blogs\test.png"
                alt=""
                className="border-radius-1240 blog-list-image w-full"
                width={247.7}
                height={163.02}
              />
              <div className="flex flex-col gap-y-[7.19px]">
                <h2 className="font-primary font-semibold leading-[24.45px] text-[18.83px] group-hover:text-white">
                  Coding My Way Up: Becoming a Full Stack Developer
                </h2>
                <p className="font-secondary font-normal leading-[24.45px] text-[13.18px] group-hover:text-white">
                  Every journey starts with a dream, but sometimes, the path...
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-start p-10 bg-white gap-[22.59px] border-radius-18 w-full xl:min-h-[450px] box-shadow-default blog-list-box z-10 md:w-[45%] xl:w-[31%] hover:bg-[#592AC7] group">
              {/* Text- Title & Excerpt */}
              <img
                src="images\blogs\test.png"
                alt=""
                className="border-radius-1240 blog-list-image w-full"
                width={247.7}
                height={163.02}
              />
              <div className="flex flex-col gap-y-[7.19px]">
                <h2 className="font-primary font-semibold leading-[24.45px] text-[18.83px] group-hover:text-white">
                  Coding My Way Up: Becoming a Full Stack Developer
                </h2>
                <p className="font-secondary font-normal leading-[24.45px] text-[13.18px] group-hover:text-white">
                  Every journey starts with a dream, but sometimes, the path...
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-start p-10 bg-white gap-[22.59px] border-radius-18 w-full xl:min-h-[450px] box-shadow-default blog-list-box z-10 md:w-[45%] xl:w-[31%] hover:bg-[#592AC7] group">
              {/* Text- Title & Excerpt */}
              <img
                src="images\blogs\test.png"
                alt=""
                className="border-radius-1240 blog-list-image w-full"
                width={247.7}
                height={163.02}
              />
              <div className="flex flex-col gap-y-[7.19px]">
                <h2 className="font-primary font-semibold leading-[24.45px] text-[18.83px] group-hover:text-white">
                  Coding My Way Up: Becoming a Full Stack Developer
                </h2>
                <p className="font-secondary font-normal leading-[24.45px] text-[13.18px] group-hover:text-white">
                  Every journey starts with a dream, but sometimes, the path...
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-start p-10 bg-white gap-[22.59px] border-radius-18 w-full xl:min-h-[450px] box-shadow-default blog-list-box z-10 md:w-[45%] xl:w-[31%] hover:bg-[#592AC7] group">
              {/* Text- Title & Excerpt */}
              <img
                src="images\blogs\test.png"
                alt=""
                className="border-radius-1240 blog-list-image w-full"
                width={247.7}
                height={163.02}
              />
              <div className="flex flex-col gap-y-[7.19px]">
                <h2 className="font-primary font-semibold leading-[24.45px] text-[18.83px] group-hover:text-white">
                  Coding My Way Up: Becoming a Full Stack Developer
                </h2>
                <p className="font-secondary font-normal leading-[24.45px] text-[13.18px] group-hover:text-white">
                  Every journey starts with a dream, but sometimes, the path...
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-wrap items-start p-10 bg-white gap-[22.59px] border-radius-18 w-full xl:min-h-[450px] box-shadow-default blog-list-box z-10 md:w-[45%] xl:w-[31%] hover:bg-[#592AC7] group">
              {/* Text- Title & Excerpt */}
              <img
                src="images\blogs\test.png"
                alt=""
                className="border-radius-1240 blog-list-image w-full"
                width={247.7}
                height={163.02}
              />
              <div className="flex flex-col gap-y-[7.19px]">
                <h2 className="font-primary font-semibold leading-[24.45px] text-[18.83px] group-hover:text-white">
                  Coding My Way Up: Becoming a Full Stack Developer
                </h2>
                <p className="font-secondary font-normal leading-[24.45px] text-[13.18px] group-hover:text-white">
                  Every journey starts with a dream, but sometimes, the path...
                </p>
              </div>
            </div>

            <div className="svgs">
              {/* Yellow Circle 1 */}
              <svg
                width="305"
                height="305"
                viewBox="0 0 305 305"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[10%] top-[-5%] scale-50 xl:scale-100"
              >
                <circle cx="152.368" cy="152.163" r="151.97" fill="#F9A91E" />
              </svg>
              {/* Green Crescent */}
              <svg
                width="387"
                height="286"
                viewBox="0 0 387 286"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-7%] top-[32%] scale-50 xl:scale-100"
              >
                <path
                  d="M386.623 166.788C340.587 268.35 220.934 313.361 119.373 267.324C17.8107 221.287 -27.2013 101.635 18.8354 0.0734748C255.678 107.43 101.168 37.3927 202.73 83.4297C304.292 129.467 192.48 78.7885 386.623 166.788Z"
                  fill="#91C644"
                />
              </svg>
              {/* Blue Circle Small */}
              <svg
                width="101"
                height="101"
                viewBox="0 0 101 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-[-5%] top-[5%] scale-50 xl:scale-100"
              >
                <circle cx="50.4913" cy="50.4406" r="50.3429" fill="#33BED4" />
              </svg>
              {/* Triangle Blue */}
              <svg
                width="234"
                height="262"
                viewBox="0 0 234 262"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute lg:bottom-[-10%] bottom-[-5%] left-[-2%] scale-50 xl:scale-100"
              >
                <path
                  d="M233.362 0.140296L221.129 261.443L0.950294 120.197L233.362 0.140296Z"
                  fill="#33BED4"
                />
              </svg>
              {/* Orange Circle 2 */}
              <svg
                width="305"
                height="304"
                viewBox="0 0 305 304"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[20%] right-[-5%] scale-50 xl:scale-100"
              >
                <circle cx="152.306" cy="151.97" r="151.97" fill="#FFCA2D" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="bg-white py-[128px]">
        <div className="max-w-[1228px] flex flex-row m-auto justify-between gap-10 flex-wrap xl:flex-nowrap px-5">
          {/* Left Form */}
          <div className="flex flex-col gap-10 xl:w-[44%] w-full">
            <h2 className="font-primary text-[40px] font-normal">
              For more inspiring stories, subscribe to{" "}
              <strong>
                YUVABEAT,
                <br />
              </strong>
              Yuvabe's monthly newsletter
            </h2>
            <form
              action=""
              className="flex flex-row gap-x-[18.58px] flex-wrap md:flex-nowrap gap-y-4"
            >
              <input
                type="text"
                name="email"
                id=""
                placeholder="Enter Your Email"
                className="rounded-[25.92px] bg-[#F1F1F1] py-[15.48px] px-[34.05px] font-primary text-[13.93px] font-normal leading-[150%] placeholder-black w-full xl:w-[67%]"
              />
              <button
                type="submit"
                value=""
                className="rounded-[25.92px] py-[15.48px] px-10  font-primary text-[13.93px] font-semibold leading-[150%] bg-[#592AC7] text-white w-full xl:w-1/3"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Right Image*/}
          <div className="xl:w-[54%] flex xl:justify-end w-full justify-center">
            <img
              src="\images\blogs\Lady-typing.png"
              alt=""
              width={644.39}
              height={382.01}
              className="scale-100 xl:scale-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default blogtemp;
