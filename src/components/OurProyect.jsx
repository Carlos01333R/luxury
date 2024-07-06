export default function OurProyect(){
    return(
        <>
        
      <section
        className="self-stretch bg-white flex flex-col items-center justify-center  px-10 box-border max-w-full text-left text-37xl text-gray-100 font-playfair-display mq750:gap-[20px] mq750:pt-[78px] mq750:pb-[78px] mq750:box-border"
      >
        <div
          className="w-full flex flex-col items-start justify-start gap-[16px] max-w-[1200px] mq1275:max-w-full"
        >
          <div
            className="w-full flex flex-col items-start justify-start gap-[8px] max-w-[800px] mq1100:max-w-full"
          >
            <h1
              className="m-0  relative text-black text-5xl leading-[120%] font-extrabold font-inherit mq450:text-15xl mq450:leading-[40px] mq750:text-26xl mq750:leading-[54px]"
            >
              Our Projects
            </h1>
            <div
              className="self-stretch relative text-lg leading-[150%] font-fira-sans text-black"
            >
              Take a look at some of our successful projects and client
              testimonials.
            </div>
          </div>
          <div
            className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px_22px] max-w-full text-sm font-fira-sans"
          >
            <div
              className="flex-1 rounded-2xl box-border overflow-hidden flex flex-row flex-wrap items-start justify-start min-w-[320px] max-w-full border-[1px] border-solid border-gainsboro"
            >
              <div
                className="flex-[0.7823] bg-white flex flex-col items-start justify-center py-[17.5px] px-8 box-border gap-[24px] min-w-[240px]"
              >
                <div
                  className="self-stretch flex flex-col items-start justify-start gap-[16px]"
                >
                  <div className="self-stretch text-black relative leading-[160%]">
                    Building Dreams
                  </div>
                  <h3 className="text-black text-3xl">Crafting luxury spaces with precision and care</h3>
                  <div
                    className="self-stretch flex flex-col items-start justify-start gap-[8px] text-9xl"
                  >
                    <div className="self-stretch relative text-lg leading-[150%] text-black">
                      Expertly designed and constructed to your exact
                      specifications.
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-start text-center"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div
                      className="relative leading-[160%] inline-block min-w-[68px] text-black"
                    >
                      Contact Us
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[240px] min-h-[364px] ml-[-2px]"
                alt=""
                src="/public/image--lummi-1@2x.png"
              />
            </div>
            <div
              className="flex-1 rounded-2xl box-border overflow-hidden flex flex-row flex-wrap items-start justify-start min-w-[320px] max-w-full border-[1px] border-solid border-gainsboro"
            >
              <div
                className="flex-[0.7823] bg-white flex flex-col items-start justify-center py-[37px] px-8 box-border gap-[24px] min-w-[240px] mq450:pt-6 mq450:pb-6 mq450:box-border"
              >
                <div
                  className="self-stretch flex flex-col items-start justify-start gap-[16px]"
                >
                  <div className="self-stretch text-black relative leading-[160%]">
                    Quality Craftsmanship
                  </div>
                  <div
                    clasclassNames="self-stretch flex flex-col items-start justify-start gap-[8px] text-9xl"
                  >
                    <h1
                      className="m-0 text-black text-3xl self-stretch relative  leading-[138%] font-normal mq450:text-3xl mq450:leading-[31px]"
                    >
                      Building with precision and excellence
                    </h1>
                    <div className=" mt-2 self-stretch relative text-lg leading-[150%] text-black">
                      Our projects stand the test of time, combining durability
                      with elegance.
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-start text-center"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div
                      className="relative leading-[160%] inline-block min-w-[79px] text-black"
                    >
                      Get In Touch
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[240px] min-h-[364px] ml-[-2px]"
                alt=""
                src="/public/image--lummi-2@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

