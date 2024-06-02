import user from "../assets/add-user.png";
import checkList from "../assets/check-list.png";
import searchList from "../assets/search.png";
import profile from "../assets/g2259 (2).png";
import buyersList from "../assets/quote-request.png";
import handShake from "../assets/hand-shake.png";

const FeaturesSection = () => {
  const features = [
    { id: 1, image: user, description: "Select your Role and Sign Up" },
    { id: 2, image: checkList, description: "Buyers Post Your Requirements" },
    {
      id: 3,
      image: searchList,
      description: "Review, Select, and Contact the Best Supplier",
    },
    {
      id: 4,
      image: profile,
      description:
        "Suppliers Complete your Profile and get notified for opportunities",
    },
    {
      id: 5,
      image: buyersList,
      description: "Contact to Buyers and Share your Quote for the service",
    },
    {
      id: 6,
      image: handShake,
      description:
        "Both the Parties can Connect and make Business Leave a Feedback",
    },
  ];
  const videoId = "IZLp-TZyDkQ";
  return (
    <>
      <section className="m-27 h-160 bg-p-blue px-16 py-24 rounded-md">
        <div className="flex gap-20">
          <div>
            <iframe
              className="w-100 h-72 rounded-md"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
            />
          </div>
          <div className="w-110">
            <div className="flex justify-between">
              <div className="w-48 text-2xl font-bold">
                <p className="text-p-orange text-center">Buyer</p>
                <span className="block w-48 h-1 rounded-sm bg-p-orange"></span>
              </div>
              <div className="w-48 text-2xl font-bold">
                <p className="text-center text-white">Supplier</p>
              </div>
            </div>
            <div className="mt-10 text-white">
              <ul className="list-image-greenTick text-lg">
                <li>Post your requirements.</li>
                <li>Sit back for multiple suppliers to contact you.</li>
                <li>
                  Choose among the suppliers based on the ratings and reviews.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-p-light-blue h-64 flex justify-around items-center ">
        <div>
          <p className="text-4xl font-semibold">Let Suppliers Find You</p>
          <span className="block w-40 mt-1 h-1 bg-p-orange float-right"></span>
        </div>
        <div>
          <button className="w-52 h-14 bg-p-orange text-white font-bold rounded-md">
            Get Verified
          </button>
        </div>
      </section>

      <section className="m-27">
        <div className="flex flex-col items-center gap-9">
          <div>
            <p className="text-4xl font-bold">How it Works?</p>
          </div>
          <div>
            <p className="text-lg text-center max-w-4xl">
              Buyers post their needs and review top suppliers, while suppliers
              complete profiles, connect with potential buyers, and build
              successful business relationships, sharing valuable feedback.
            </p>
          </div>
          <div className="grid grid-cols-3">
            {features.map((feature) => {
              return (
                <div
                  key={feature.id}
                  className="flex items-center flex-col p-10 gap-6 h-64 font-medium odd:bg-p-light-blue"
                >
                  <img src={feature.image} alt="user" width={75} height={75} />
                  <p className="text-lg text-center">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
