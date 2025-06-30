import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
// import profileImage from "../assets/profile.png"; // update path to your image

const titles = [
  "Front-End Developer",
  "Web Developer",
  "Programmer",
  "Creative Thinker",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];
    const typeSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentTitle.substring(0, charIndex - 1)
          : currentTitle.substring(0, charIndex + 1)
      );
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, index, isDeleting]);

  return (
    <div className="bg-[#0F0F1B] text-white min-h-screen flex items-center justify-center px-6 md:px-20">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400">
            Hello! <span className="inline-block animate-wave">👋</span> I am
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-500">
            Jahangir Alam
          </h1>

          <h3 className="text-xl md:text-2xl text-cyan-300 h-10">
            {text}
            <span className="border-r-2 border-cyan-300 ml-1 animate-pulse" />
          </h3>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/resume.pdf" // replace with actual path
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-500 text-white border-none hover:bg-green-600"
            >
              Get Resume
            </a>
            <Link
              to="/about"
              className="btn border border-green-500 hover:bg-green-600 hover:text-white"
            >
              About Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src='https://i.ibb.co/YTPqtrqb/IMG-20250508-WA0005.jpg'
            alt="Jahangir Alam"
            className="w-[300px] md:w-[400px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
