import React from "react";
// import aboutImage from "../assets/about.png"; // use your actual image path

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0F0F1B] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold border-b-4 inline-block border-blue-500 mb-4">
          About Me
        </h2>

        <p className="text-lg leading-8">
          I am <span className="text-cyan-400 font-semibold">MD Jahangir Alam</span>, a passionate{" "}
          <span className="text-cyan-400 font-semibold">Frontend Developer</span> and{" "}
          <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> focused on
          creating interactive, responsive, and user-friendly web applications.
        </p>

        <p className="text-lg leading-8">
          I started web development in <span className="text-cyan-400 font-semibold">2023</span> and
          have built several projects. My goal is to become a skilled{" "}
          <span className="text-cyan-400 font-semibold">Full Stack Developer</span>. I constantly
          learn and improve to deliver high-quality solutions that meet client needs. Let’s connect
          and build something amazing!
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src='https://i.ibb.co/YTPqtrqb/IMG-20250508-WA0005.jpg' alt="About illustration" className="w-[300px] md:w-[450px]" />
      </div>
    </section>
  );
};

export default About;
