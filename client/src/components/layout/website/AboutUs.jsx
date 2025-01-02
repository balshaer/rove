export default function AboutUs() {
  return (
    <div className=" about-us w-full " id="aboutus">
      <div className="flex justify-between items-center max-md:pt-10  h-[80vh] max-md:bg-white max-md:h-max container m-auto max-md:flex-col max-md:text-center max-md:justify-center max-md:items-center">
        <div className="w-1/2 max-md:w-full">
          <h1 className=" max-md:px-4 text-3xl font-extrabold sm:text-5xl text-[#2b2e4a]">
            About us
          </h1>
          <p className="mt-4  max-md:px-4 sm:text-xl/relaxed text-[#666a7b]">
            With more than 20 years of tradition in the commercial
            representation of fashion, Rove distributes the best brands to
            multi-brand retailers throughout Palestine. From footwear such as
            Melissa + Me Leva, our portfolio covers the 12 best brands in
            Palestine. Some of the examples are the premium apparel line like
            Farm, Animale, and Tommy Hilfiger. Our team has more than 15
            managers to best meet the needs that you, the shopkeeper, have in
            the store!
          </p>
        </div>

        <div className="w-1/3 max-md:pt-4 relative  flex items-center justify-center max-md:bg-white bg-[#1e1e1e] h-full max-md:flex-col max-md:text-center max-md:justify-center max-md:items-center max-md:w-full ">
          <img
            className=" absolute max-md:relative max-md:left-0 left-[-120px] top-0 m-auto bottom-0"
            src="https://uploads-ssl.webflow.com/6230851dfbef4b4d05285e07/623094bd106ddf724da49140_Grupo%20de%20ma%CC%81scara%203.png"
            alt="company"
          />
        </div>
      </div>
    </div>
  );
}
