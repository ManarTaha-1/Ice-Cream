import milk from "../assets/milk.png"
import milkfat from "../assets/milkfat.png"
function About() {
  return (
    <div id="about" className="bg-blue-100 w-full min-h-screen py-20">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center px-6 mb-16">
        We Care About You!
      </h1>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto">
        
        {/* Left Section - Image with Content */}
        <div className="w-full lg:w-1/2 relative">
          {/* Milk Image */}
          <img 
            src={milk} 
            alt="Milk" 
            className="absolute -top-4 lg:-top-6 left-4 sm:left-8 lg:left-16 w-40 sm:w-50 lg:w-100 z-10"
          />
          
          {/* Content Below Image */}
          <div className="pt-32 sm:pt-40 lg:pt-52 grid gap-6">
            <p className="text-sm sm:text-base font-medium text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita omnis provident impedit eius incidunt odit voluptatum corrupti. Qui hic pariatur non, consequuntur, odio quas harum fugit cupiditate necessitatibus vel obcaecati!
            </p>
            
            <p className="text-sm sm:text-base font-medium text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor consequatur illo in dolores ea nobis sunt minus rem, doloremque deleniti nulla officiis numquam quia, saepe omnis laborum voluptates voluptatibus suscipit!
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="rounded-full bg-yellow-400 px-6 sm:px-10 py-3 sm:py-4 border-2 border-black font-bold text-base sm:text-lg hover:bg-yellow-500 transition-colors w-full sm:w-auto">
                Learn More
              </button>
              <button className="rounded-full bg-white px-6 sm:px-10 py-3 sm:py-4 border-2 border-yellow-400 font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
                Try Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 max-w-md mx-auto lg:mx-0">
          <p className="text-sm sm:text-base font-medium text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error earum hic nisi debitis atque rem porro optio dolorem commodi? Ratione quam iure cum provident praesentium consectetur, commodi aliquam temporibus facere.
          </p>
          
          <button className="rounded-full bg-white px-6 sm:px-10 py-3 sm:py-4 border-2 border-yellow-400 font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
            Learn More
          </button>
          
          <img 
            src={milkfat} 
            alt="Milk Fat" 
            className="w-48 sm:w-56 lg:w-64 mx-auto mt-6"
          />
        </div>
      </div>
    </div>
  );
}

export default About;