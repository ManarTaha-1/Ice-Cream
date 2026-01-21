import cono from "../assets/cono.png"
import border from "../assets/border.png"


function Flavors() {
  return (
    <div id="flavors" className="w-full min-h-screen relative bg-pink-200 overflow-hidden">
      {/* Blue rounded background */}
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-50  pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        
        {/* Main content container */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 relative">
          
          {/* Ice cream with floating flavors */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[450px] sm:min-h-[550px] py-8">
            
            {/* Floating flavor tags - Mobile positioning (above ice cream) */}
            <div className="absolute inset-0 lg:hidden">
              <div className="vanilla absolute top-2 left-1/2 -translate-x-1/2 rounded-full bg-yellow-200 border-2 border-black text-xs sm:text-sm font-bold px-3 py-1 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '0s'}}>
                Vanilla
              </div>
              
              <div className="absolute top-16 left-4 sm:left-8 rounded-full bg-purple-400 border-2 border-black text-xs sm:text-sm font-bold px-3 py-1 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '0.5s'}}>
                Blueberry
              </div>
              
              <div className="absolute top-16 right-4 sm:right-8 rounded-full bg-yellow-800 text-white border-2 border-black text-xs sm:text-sm font-bold px-3 py-1 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '1s'}}>
                Chocolate
              </div>
            </div>

            {/* Floating flavor tags - Desktop positioning (around ice cream) */}
            <div className="hidden lg:block absolute inset-0 w-full h-full">
              <div className="absolute top-[20%] left-0 rounded-full bg-yellow-200 border-2 border-black text-base font-bold px-4 py-1.5 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '0s'}}>
                Vanilla
              </div>
              
              <div className="absolute top-[8%] left-[15%] rounded-full bg-purple-400 border-2 border-black text-base font-bold px-4 py-1.5 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '0.5s'}}>
                Blueberry
              </div>
              
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 rounded-full bg-yellow-800 text-white border-2 border-black text-base font-bold px-4 py-1.5 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '1s'}}>
                Chocolate
              </div>
              
              <div className="absolute top-[2%] right-[15%] rounded-full bg-pink-300 border-2 border-black text-base font-bold px-4 py-1.5 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '1.5s'}}>
                Strawberry
              </div>
              
              <div className="absolute top-[8%] right-0 rounded-full bg-green-200 border-2 border-black text-base font-bold px-4 py-1.5 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '2s'}}>
                Pistachio
              </div>
              
              <div className="absolute top-[20%] right-[-5%] rounded-full bg-yellow-500 border-2 border-black text-base font-bold px-4 py-1.5 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '2.5s'}}>
                Mango
              </div>
            </div>

            {/* Ice cream cone */}
            <img 
              src={cono} 
              alt="Ice Cream Cone" 
              className="w-48 sm:w-56 lg:w-64 xl:w-72 relative z-10 animate-sway"
            />

            {/* Mobile flavors below ice cream */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-3 px-4">
              <div className="rounded-full bg-pink-300 border-2 border-black text-sm sm:text-base font-bold px-4 py-1.5 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '1.5s'}}>
                Strawberry
              </div>
              <div className="rounded-full bg-green-200 border-2 border-black text-sm sm:text-base font-bold px-4 py-1.5 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '2s'}}>
                Pistachio
              </div>
              <div className="rounded-full bg-yellow-500 border-2 border-black text-sm sm:text-base font-bold px-4 py-1.5 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl animate-float" style={{animationDelay: '2.5s'}}>
                Mango
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8 px-4">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Heavenly Flavors
            </h1>
            
            <p className="font-medium text-base sm:text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum quam laudantium ducimus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="rounded-full bg-yellow-400 px-8 sm:px-10 py-3 border-2 border-black font-bold text-base sm:text-lg hover:bg-yellow-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg">
                Learn More
              </button>
              <button className="rounded-full bg-white px-8 sm:px-10 py-3 border-2 border-yellow-400 font-bold text-base sm:text-lg hover:bg-yellow-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg">
                Try Now
              </button>
            </div>
          </div>
        </div>

        {/* Decorative border */}
        <div 
          className="absolute -bottom-5 left-0 w-full h-16 sm:h-20 bg-repeat-x opacity-50"
          style={{
            backgroundImage: `url(${border})`,
            backgroundSize: '100px 100%'
          }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateX(5px) rotate(1deg);
          }
          75% {
            transform: translateX(-5px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Flavors;