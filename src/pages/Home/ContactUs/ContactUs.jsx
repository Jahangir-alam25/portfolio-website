import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-[#0a0a23] text-white py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 underline decoration-blue-500">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
        {/* Contact Info */}
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-green-400">
              <FaEnvelope />
              <span className="text-white">jahangiralam10022003@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-blue-400">
              <FaPhoneAlt />
              <span className="text-white">+8801965194646</span>
            </div>
            <div className="flex items-center gap-3 text-green-500">
              <FaWhatsapp />
              <span className="text-white">+8801965194646</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-6 pt-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#0f0f2f] p-8 rounded-lg shadow-xl md:w-1/2 w-full">
          <h3 className="text-2xl font-semibold mb-6 text-green-400">Let’s Message Me!</h3>

          <form
            action="https://formsubmit.co/jahangiralam10022003@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* Hidden for FormSubmit features */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            {/* Optional: redirect after submit */}
            {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> */}

            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full md:w-1/2 p-3 rounded bg-white text-black"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full md:w-1/2 p-3 rounded bg-white text-black"
                required
              />
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded bg-white text-black"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
