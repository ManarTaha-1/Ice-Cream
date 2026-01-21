import homeImage from "../assets/home.png";
import iceCream from "../assets/icecream.png";

function Home() {
  return (
    <div
      id="home"
      style={{ backgroundImage: `url(${homeImage})` }}
      className="
        w-full min-h-screen
        bg-cover bg-center
        flex flex-col-reverse lg:flex-row
        items-center justify-center
        px-6 sm:px-10 lg:px-24 
        pt-32 lg:pt-0
        gap-10 
      "
    >
      {/* Content */}
      <div className="content max-w-xl text-center lg:text-left grid gap-6">
        <h1
          className="
            font-bold
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          "
        >
          Grab The Best Ice Cream
        </h1>

        <p className="text-sm sm:text-base font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Vero suscipit porro repellat. Error molestias vitae nobis
          accusantium saepe sapiente?
        </p>

        <div className="flex justify-center lg:justify-start">
          <button
            className="
              bg-yellow-200
              cursor-pointer
              hover:bg-black hover:text-yellow-200 hover:border-yellow-200
              duration-500 ease-in-out
              rounded-full
              border-2 border-black
              font-bold
              text-base sm:text-lg
              w-44 sm:w-52
              h-14 sm:h-16
            "
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="image w-full lg:w-1/2 flex justify-center">
        <img
          src={iceCream}
          alt="Ice Cream"
          className="
            w-64 sm:w-80 md:w-[420px] lg:w-[520px]
            object-contain 
          "
        />
      </div>
    </div>
  );
}

export default Home;