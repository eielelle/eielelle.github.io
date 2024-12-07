function Hero() {
  return (
    <section id="home" className="flex justify-center items-center h-full w-full relative">
      <div className="text-center">
        <p className="text-xl text-accent">Hi, my name is</p>
        <h2 className="font-semibold text-6xl">Eleazar Romero</h2>
        <h1 className="font-semibold text-gray-600 text-7xl">I build things for the web.</h1>
        <p className="w-1/2 mt-6 mx-auto">With a strong foundation in information technology, I'm passionate about web development, and currently interested in mobile app development. </p>
      </div>

      <div className="absolute left-0 right-0 bottom-7 w-full flex justify-center">
        <a href="" className="btn bg-gray-700 py-3 px-32 rounded-md flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
          Let's work together</a>
      </div>
    </section>
  );
}

export default Hero;
