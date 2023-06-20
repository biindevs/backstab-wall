const Header = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 pt-12 text-white">
      <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 2xl:mb-7">
          Freedom Wall
        </h1>
        <p className="text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 text-center">
          Welcome to My Freedom Wall! Embrace the freedom of expression and
          share your thoughts about me anonymously. Unleash your creativity and
          let your message shine.
        </p>
      </div>
    </div>
  );
};

export default Header;
