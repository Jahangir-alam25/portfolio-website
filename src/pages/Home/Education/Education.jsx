import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

const educationData = [
  {
    institute: "Moulvibazar Polytechnic Institute.",
    exam: "Diploma In Engineering",
    department: "CSE",
    year: "2022-2026",
    result: "3.44 (last semester)",
  },
  {
    institute: "Shahgonj High School and College.",
    exam: "SSC",
    department: "Science",
    year: "2021",
    result: "4.33",
  },
];

const Education = () => {
  return (
    <div className="bg-[#0a0a23] text-white py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10 underline decoration-blue-500">Education</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#101d2f] to-[#0c0c1f] p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-teal-400 mb-4">{edu.institute}</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaGraduationCap className="text-teal-400" />
                <span><strong>Exam Name:</strong> {edu.exam}</span>
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineCastForEducation className="text-teal-400" />
                <span><strong>Department:</strong> {edu.department}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-teal-400" />
                <span><strong>Year:</strong> {edu.year}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaMedal className="text-teal-400" />
                <span><strong>Result:</strong> {edu.result}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;