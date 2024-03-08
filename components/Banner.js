import Image from "next/image";

const Banner = () => {
  return (
    <header className="bg-[url('/images/banner.jpg')] w-full h-[450px] md:h-[600px] lg:h-[788px] bg-no-repeat bg-cover bg-top">
      <div className="flex flex-col items-center justify-between h-[450px] md:h-[600px] lg:h-[788px]">
        <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
          <Image
            src="/images/banner-logo.webp"
            fill
            alt="banner logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="bg-gradient-to-r from-[#1E1E1E] to-[#00E1D2]/30 mb-10 border rounded-full border-[white]/30 pt-3 px-4">
          <button className="cursor-pointer bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] rounded-[40px] px-10 capitalize text-lg text-white ">
            Coming to opBNB
          </button>
        </span>
      </div>
    </header>
  );
};

export default Banner;
