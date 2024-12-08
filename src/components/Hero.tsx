import anime from "animejs";

function Hero() {
  anime({
    targets: ".up",
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInOutSine",
  });

  anime({
    targets: ".slide .anim",
    width: [0, "100%", 0],
    left: ["0%", "0%", "100%"],
    duration: 1000,
    easing: "easeInOutSine",
    complete: function () {
      // After the first animation completes, trigger the opacity animation
      anime({
        targets: "nav .item a",
        opacity: [0, 1, 0, 1], // Animate opacity from 0 to 1, then back to 0 and 1 again
        duration: 600,
        easing: "easeInOutSine",
      });
    },
  });

  return (
    <section
      id="home"
      className="flex justify-center items-center h-full w-full relative"
    >
      <div className="text-center">
        <p className="text-xl text-accent up">Hi, my name is</p>
        <div className="relative inline-block slide">
          <span className="anim"></span>
          <h2 className="font-semibold text-5xl">Eleazar Romero</h2>
        </div>
        <div className="relative inline-block slide">
          <span className="anim"></span>
          <h1 className="font-semibold text-gray-600 text-6xl">
            I build things for the web.
          </h1>
        </div>

        <p className="w-1/2 mt-6 mx-auto up">
          With a strong foundation in information technology, I'm passionate
          about web development, and currently interested in mobile app
          development.{" "}
        </p>
      </div>

      <div className="absolute left-0 right-0 bottom-7 w-full flex justify-center up">
        <a
          href=""
          className="btn bg-gray-700 py-3 px-32 rounded-md flex items-center gap-3"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Let's work together
        </a>
      </div>
    </section>
  );
}

export default Hero;
