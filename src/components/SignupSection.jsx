import arrow from "../assets/arrow-right.png";

const SignupSection = () => {
  const locations = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];
  return (
    <>
      <section className="flex m-27 gap-36">
        <div className="w-160 flex flex-col gap-6">
          <p className="text-4xl font-bold w-128">Ready to dive into HABOT?</p>
          <span className="text-lg">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </span>
          <button className="block w-80 h-14 bg-p-green text-white rounded-md font-bold">
            Sign up Today!{" "}
            <img
              className="inline ml-9"
              src={arrow}
              alt="arrow-right"
              width={32}
              height={16}
            />
          </button>
        </div>
        <div className="w-128 h-56 grid grid-cols-2 gap-5">
          {locations.map((location, i) => {
            return (
              <div
                key={i}
                className="font-inter font-medium flex items-center justify-center text-lg border border-b-orange rounded-md"
              >
                {location}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SignupSection;
