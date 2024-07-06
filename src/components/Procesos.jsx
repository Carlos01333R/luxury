export default function ProcesosConstrucción() {
  return (
    <>
      <section className="self-stretch bg-white flex flex-col items-center justify-center py-20 px-5 box-border gap-14 max-w-full text-left text-4xl text-gray-100 font-playfair-display">
        <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 max-w-4xl mx-auto">
          <img
            className="h-80 flex-1 relative rounded-xl overflow-hidden object-cover min-w-[272px] md:max-w-[564px] w-full"
            loading="lazy"
            alt=""
            src="https://www.arquibase.com/uploads/8/3/4/5/8345765/published/fachada-de-casa-minimalista-moderna-con-piedra-natural-y-madera.jpg?1717657514"
          />

          <div className="flex-1 flex flex-col items-start justify-center gap-10 min-w-[272px] md:max-w-[720px] w-full">
            <div className="self-stretch flex flex-col items-start justify-center gap-4">
              <h1 className="m-0 text-black text-3xl md:text-4xl relative font-extrabold">
                Our Process
              </h1>
              <div className="self-stretch relative text-lg leading-6 font-fira-sans text-black">
                From planning to execution, see how we bring your vision to life.
              </div>
            </div>
            <button className="cursor-pointer border-none py-3 px-6 bg-gold rounded-lg flex items-center justify-center max-w-xs">
              <div className="flex items-center justify-center">
                <div className="relative text-sm leading-6 font-fira-sans text-gray-200 text-center inline-block min-w-[72px] whitespace-nowrap p-3 bg-yellow-800 rounded-lg">
                  Get Started
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap items-start justify-start gap-10 max-w-4xl mx-auto text-lg font-fira-sans">
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[240px] max-w-[400px] w-full">
            <img className="w-8 h-8 relative" alt="" src="/public/icon-icon.svg" />
            <div className="self-stretch relative leading-6 text-black font-bold">
              Initial Consultation
            </div>
            <div className="self-stretch relative text-sm leading-6 text-black">
              Discuss your project ideas and requirements with our expert team.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[240px] max-w-[400px] w-full">
            <img className="w-8 h-8 relative" alt="" src="/public/icon-icon-1.svg" />
            <div className="self-stretch relative leading-6 text-black font-bold">
              Design & Planning
            </div>
            <div className="self-stretch relative text-sm leading-6 text-black">
              We create detailed plans and blueprints tailored to your specifications.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[240px] max-w-[400px] w-full">
            <img className="w-8 h-8 relative" alt="" src="/public/icon-icon-2.svg" />
            <div className="self-stretch relative leading-6 text-black font-bold">
              Preparation & Permits
            </div>
            <div className="self-stretch relative text-sm leading-6 text-black">
              We handle all necessary permits and site preparations for a smooth start.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
