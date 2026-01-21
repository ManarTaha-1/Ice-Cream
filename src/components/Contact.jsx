
import { Mail } from 'lucide-react';
import contact from "../assets/contact.png"
function Contact() {
  return (
    <div id="contact" className="w-full min-h-screen bg-gradient-to-br from-pink-200 to-pink-100 relative overflow-hidden">
      {/* Decorative circles in background */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center min-h-screen px-6 sm:px-10 lg:px-20 py-20">
        
        {/* Form section */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-6 sm:gap-8">
          {/* Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
              Get In Touch! 📬
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              Subscribe to our newsletter for sweet updates
            </p>
          </div>

          {/* Input and Button container */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Email Input */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-yellow-500 transition-colors duration-300" />
              <input 
                type="email" 
                placeholder="Enter Your Email"
                className="
                  w-full sm:w-80
                  pl-12 pr-5 py-4
                  text-base
                  border-2 border-black
                  rounded-2xl
                  bg-white
                  outline-none
                  placeholder-gray-400
                  focus:border-yellow-400
                  focus:shadow-lg
                  transition-all duration-300
                  hover:shadow-md
                "
              />
            </div>

            {/* Submit Button */}
            <button className="
              px-8 sm:px-10 py-4
              text-base sm:text-lg
              font-bold
              bg-gradient-to-r from-yellow-300 to-yellow-400
              text-black
              border-2 border-black
              rounded-2xl
              hover:from-yellow-400 hover:to-yellow-500
              hover:scale-105
              hover:shadow-xl
              active:scale-95
              transition-all duration-300
              shadow-md
              whitespace-nowrap
            ">
              Contact Us
            </button>
          </div>

          {/* Optional: Social proof or additional info */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-pink-300 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-purple-300 border-2 border-white" />
            </div>
            <span className="font-medium">Join 1000+ happy customers!</span>
          </div>
        </div>

        {/* Contact Image */}
        <div className="hidden sm:block">
          <img 
            src={contact} 
            alt="Contact us illustration" 
            className="
              w-64 sm:w-80 lg:w-96
              hover:scale-105
              hover:-translate-y-2
              transition-all duration-500
              drop-shadow-2xl
            "
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;