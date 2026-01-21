import cones from "../assets/cones.png"
import juices from "../assets/juices.png"
import iceCreams from "../assets/icecreams.png"
import cone from "../assets/cone.png"
import ice from "../assets/ice.png"
import juice from "../assets/juice.png"
function Products() {
  return (
    <div id="products" className="w-full min-h-screen bg-gradient-to-br from-pink-200 to-pink-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-16 sm:mb-20 lg:mb-24">
        Products Range
      </h1>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        
        {/* Cones Card */}
        <div className="group bg-gradient-to-br from-blue-100 to-white rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg border-2 border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="relative -mt-16 sm:-mt-20 mb-4 overflow-hidden rounded-2xl">
            <img 
              src={cones} 
              alt="Cones" 
              className="w-64 sm:w-72 md:w-80 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <h3 className="font-bold text-2xl sm:text-3xl mb-3 capitalize">Cones</h3>
          
          <div className="mb-4">
            <img 
              src={cone} 
              alt="Cone icon" 
              className="w-10 h-10 sm:w-12 sm:h-12 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
            />
          </div>
          
          <p className="text-sm sm:text-base font-medium text-gray-700 mb-6 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto architecto blanditiis officia.
          </p>
          
          <button className="rounded-full bg-pink-200 px-10 sm:px-12 py-2.5 sm:py-3 border-2 border-black font-bold text-base sm:text-lg hover:bg-pink-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg">
            Try
          </button>
        </div>

        {/* Juices Card */}
        <div className="group bg-gradient-to-br from-blue-100 to-white rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg border-2 border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="relative -mt-16 sm:-mt-20 mb-4 overflow-hidden rounded-2xl">
            <img 
              src={juices} 
              alt="Juices" 
              className="w-64 sm:w-72 md:w-80 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <h3 className="font-bold text-2xl sm:text-3xl mb-3 capitalize">Juices</h3>
          
          <div className="mb-4">
            <img 
              src={juice} 
              alt="Juice icon" 
              className="w-12 h-12 sm:w-14 sm:h-14 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
            />
          </div>
          
          <p className="text-sm sm:text-base font-medium text-gray-700 mb-6 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto architecto blanditiis officia.
          </p>
          
          <button className="rounded-full bg-pink-200 px-10 sm:px-12 py-2.5 sm:py-3 border-2 border-black font-bold text-base sm:text-lg hover:bg-pink-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg">
            Try
          </button>
        </div>

        {/* Ice Creams Card */}
        <div className="group bg-gradient-to-br from-blue-100 to-white rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg border-2 border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 md:col-span-2 lg:col-span-1">
          <div className="relative -mt-16 sm:-mt-20 mb-4 overflow-hidden rounded-2xl">
            <img 
              src={iceCreams} 
              alt="Ice Creams" 
              className="w-64 sm:w-72 md:w-80 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <h3 className="font-bold text-2xl sm:text-3xl mb-3 capitalize">Ice Creams</h3>
          
          <div className="mb-4">
            <img 
              src={ice} 
              alt="Ice cream icon" 
              className="w-12 h-12 sm:w-14 sm:h-14 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
            />
          </div>
          
          <p className="text-sm sm:text-base font-medium text-gray-700 mb-6 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto architecto blanditiis officia.
          </p>
          
          <button className="rounded-full bg-pink-200 px-10 sm:px-12 py-2.5 sm:py-3 border-2 border-black font-bold text-base sm:text-lg hover:bg-pink-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg">
            Try
          </button>
        </div>

      </div>
    </div>
  );
}

export default Products;