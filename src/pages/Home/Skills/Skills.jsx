// import { useState } from "react";
// import Marquee from "react-fast-marquee";

// const technologies = [
//   { name: "HTML", category: "Frontend", logo: "https://img.icons8.com/color/48/html-5.png" },
//   { name: "CSS", category: "Frontend", logo: "https://img.icons8.com/color/48/css3.png" },
//   { name: "JavaScript", category: "Frontend", logo: "https://img.icons8.com/color/48/javascript.png" },
//   { name: "React.js", category: "Frontend", logo: "https://img.icons8.com/color/48/react-native.png" },
//   { name: "Tailwind CSS", category: "Frontend", logo: "https://img.icons8.com/color/48/tailwindcss.png" },
//   { name: "Node.js", category: "Backend", logo: "https://img.icons8.com/color/48/nodejs.png" },
//   { name: "Express.js", category: "Backend", logo: "https://img.icons8.com/ios-filled/48/ffffff/express-js.png" },
//   { name: "MongoDB", category: "Database", logo: "https://img.icons8.com/color/48/mongodb.png" },
//   { name: "Firebase", category: "Other", logo: "https://img.icons8.com/color/48/firebase.png" },
//   { name: "GitHub", category: "Other", logo: "https://img.icons8.com/ios-glyphs/48/ffffff/github.png" },
//   { name: "TanStack Query", category: "Other", logo: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png" },
//   { name: "Axios", category: "Other", logo: "https://axios-http.com/assets/logo.svg" },
//   { name: "Vercel", category: "Other", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" },
//   { name: "Netlify", category: "Other", logo: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-services-logo-shadow-tal-revivo.png" },
//   { name: "Surge", category: "Other", logo: "https://surge.sh/favicon.ico" },
//   { name: "Figma", category: "Other", logo: "https://img.icons8.com/color/48/figma--v1.png" },
//   { name: "Mamba UI", category: "Other", logo: "https://mambaui.com/favicon.ico" },
//   { name: "Magic UI", category: "Other", logo: "https://magicui.design/favicon.ico" },
// ];

// const categories = ["All", "Frontend", "Backend", "Database", "Other"];

// const Skills = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredTech =
//     selectedCategory === "All"
//       ? technologies
//       : technologies.filter((tech) => tech.category === selectedCategory);

//   return (
//     <section id="skills" className="bg-[#0F0F1B] text-white py-16 px-6 md:px-20">
//       <h2 className="text-4xl font-bold text-center mb-6 border-b-4 inline-block border-cyan-400">
//         My Skills
//       </h2>

//       <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mt-4 mb-10">
//         Skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.
//         Experienced with Firebase, GitHub, TanStack Query, Axios, and deployment platforms like
//         Vercel, Netlify, Firebase, and Surge. Proficient in UI frameworks such as Mamba UI and Magic
//         UI, with design expertise in Figma.
//       </p>

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-full border ${
//               selectedCategory === cat
//                 ? "bg-cyan-400 text-black"
//                 : "border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Tech Cards in Marquee */}
//       <Marquee pauseOnHover speed={50} gradient={false}>
//         <div className="flex gap-6">
//           {filteredTech.map((tech, idx) => (
//             <div
//               key={idx}
//               className="bg-[#1F1F2B] rounded-xl shadow-md p-4 w-40 h-36 flex flex-col items-center justify-center text-center border border-cyan-700 hover:scale-105 transition"
//             >
//               <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2 object-contain" />
//               <p className="text-sm">{tech.name}</p>
//             </div>
//           ))}
//         </div>
//       </Marquee>
//     </section>
//   );
// };

// export default Skills;

import { useState } from "react";

const technologies = [
  { name: "HTML", category: "Frontend", logo: "https://img.icons8.com/color/48/html-5.png" },
  { name: "CSS", category: "Frontend", logo: "https://img.icons8.com/color/48/css3.png" },
  { name: "JavaScript", category: "Frontend", logo: "https://img.icons8.com/color/48/javascript.png" },
  { name: "React.js", category: "Frontend", logo: "https://img.icons8.com/color/48/react-native.png" },
  { name: "Tailwind CSS", category: "Frontend", logo: "https://img.icons8.com/color/48/tailwindcss.png" },
  { name: "Node.js", category: "Backend", logo: "https://img.icons8.com/color/48/nodejs.png" },
  { name: "Express.js", category: "Backend", logo: "https://img.icons8.com/ios-filled/48/ffffff/express-js.png" },
  { name: "MongoDB", category: "Database", logo: "https://img.icons8.com/color/48/mongodb.png" },
  { name: "Firebase", category: "Other", logo: "https://img.icons8.com/color/48/firebase.png" },
  { name: "GitHub", category: "Other", logo: "https://img.icons8.com/ios-glyphs/48/ffffff/github.png" },
  { name: "TanStack Query", category: "Other", logo: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png" },
  { name: "Axios", category: "Other", logo: "https://axios-http.com/assets/logo.svg" },
  { name: "Vercel", category: "Other", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" },
  { name: "Netlify", category: "Other", logo: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-services-logo-shadow-tal-revivo.png" },
  { name: "Surge", category: "Other", logo: "https://surge.sh/favicon.ico" },
  { name: "Figma", category: "Other", logo: "https://img.icons8.com/color/48/figma--v1.png" },
  { name: "Mamba UI", category: "Other", logo: "https://mambaui.com/favicon.ico" },
  { name: "Magic UI", category: "Other", logo: "https://magicui.design/favicon.ico" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Other"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTech =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <section id="skills" className="bg-[#0F0F1B] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-6 border-b-4 inline-block border-cyan-400">
        My Skills
      </h2>

      <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mt-4 mb-10">
        Skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.
        Experienced with Firebase, GitHub, TanStack Query, Axios, and deployment platforms like
        Vercel, Netlify, Firebase, and Surge. Proficient in UI frameworks such as Mamba UI and Magic
        UI, with design expertise in Figma.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-cyan-400 text-black"
                : "border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Marquee Effect - No package used */}
      <div className="overflow-hidden relative">
        <div className="animate-marquee flex gap-6 w-fit">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#1F1F2B] rounded-xl shadow-md p-4 w-40 h-36 flex flex-col items-center justify-center text-center border border-cyan-700 hover:scale-105 transition"
            >
              <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-2 object-contain" />
              <p className="text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

