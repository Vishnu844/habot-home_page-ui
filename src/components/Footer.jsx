import logo from "../assets/footer-logo.png";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/Twitter.png";
import linkedin from "../assets/LinkedIn.png";

const Footer = () => {
  const footerLinks = [
    { id: 1, title: "Company", links: ["About", "FAQ"] },
    {
      id: 2,
      title: "Terms",
      links: ["Data Privacy", "Terms", "Accessibility"],
    },
    { id: 3, title: "Related", links: ["Find Buyer", "Feedback"] },
  ];

  const socialLogos = [
    { source: linkedin, text: "linkedin" },
    { source: twitter, text: "twitter" },
    { source: facebook, text: "facebook" },
    { source: instagram, text: "instagram" },
  ];

  return (
    <>
      <footer className="bg-f-blue text-white py-11">
        <div className="mx-27 py-10 flex items-center justify-between border-y">
          <div className="flex gap-9 items-center">
            <div>
              <img src={logo} alt="logo" className="w-52 h-10 object-cover" />
              <p className="ml-3 mt-4">© R Singhania</p>
            </div>
            <div className="flex gap-6">
              {footerLinks.map((footerLink) => {
                return (
                  <div key={footerLink.id}>
                    <p className="font-bold text-base mb-2">
                      {footerLink.title}
                    </p>
                    <ul className="list-none">
                      {footerLink.links.map((link, i) => {
                        return (
                          <li key={i} className="font-light text-sm m-1">
                            {link}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-2">
            {socialLogos.map((logo, i) => {
              return <img key={i} src={logo.source} alt={logo.text} width={40} height={40}/>;
            })}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
