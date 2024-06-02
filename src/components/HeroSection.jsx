import suitcase from "../assets/suitcase.png";
import location from "../assets/location.png";

const HeroSection = () => {
  return (
    <>
      <section className="hero w-full h-150 bg-hero bg-cover relative z-10 text-white flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <p className=" text-5.5xl font-bold">Are You a Supplier?</p>
          <p className=" text-5.5xl">Explore Matching Opportunities</p>
        </div>
        <div>
          <form className="flex gap-2">
            <div className="bg-white px-2.5 rounded-md">
              <img
                className="inline"
                src={suitcase}
                alt="suitcase"
                width={22}
                height={22}
              />
              <input
                className="h-14 w-96 px-2.5 outline-none text-black"
                type="text"
                placeholder="Search your required service here"
              />
            </div>
            <div className="bg-white px-2.5 rounded-md">
              <img
                className="inline"
                src={location}
                alt="suitcase"
                width={22}
                height={22}
              />
              <input
                className="h-14 w-96 px-2.5 outline-none text-black"
                type="text"
                placeholder="Search your desired location here"
              />
            </div>
            <button className="w-28 h-14 rounded-md bg-p-green">Search</button>
          </form>
        </div>
        <div className="text-center">
          <p className="inline text-lg font-bold mr-3">Are you a buyer?</p>
          <span className="text-lg underline">
            Click here if you are looking to post a requirements
          </span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
