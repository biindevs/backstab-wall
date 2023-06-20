const Header = () => {
  return (
    <div className="w-full flex flex-col items-center p-4 mt-12 text-white ">
      <div className="w-[80vw] 2xl:w-[50%]  flex flex-col justify-center items-center">
        <h1 className="text-3xl 2xl:text-7xl font-bold mb-2 2xl:mb-7">
          Freedom Wall
        </h1>
        <p className="text-sm 2xl:text-2xl text-gray-300 text-center">
          Welcome to My Freedom Wall! Embrace the freedom of expression and
          share your thoughts about me anonymously. Unleash your creativity and
          let your message shine.
        </p>
      </div>
    </div>
  );
};

export default Header;
