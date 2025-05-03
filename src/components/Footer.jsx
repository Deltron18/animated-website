import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/karan-singh-28ba5b256/", icon: <FaLinkedin /> },
  { href: "https://github.com/Deltron18", icon: <FaGithub/> },
  { href: "https://www.instagram.com", icon: <FaInstagram /> },
 
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Deltron 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;