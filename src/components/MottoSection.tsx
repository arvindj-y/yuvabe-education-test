import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MottoSection = () => {
  const pathRef = useRef(null);
  const planeRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set initial state for line drawing
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animate line drawing on scroll
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "power2.out",
      duration: 3,
      scrollTrigger: {
        trigger: "#wave-section",
        start: "top center",
        end: "bottom center",
        scrub: 2,
      },
    });

    // Animate paper plane along the wave path
    gsap.to(planeRef.current, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#wave-section",
        start: "top center",
        end: "bottom center",
        scrub: 2,
      },
    });

    // Animate content sections on scroll (fade-in + slide-up)
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div id="wave-section" className="relative">
      {/* SVG for Vertical Wave Path */}
      <svg
        width="400"
        height="1500"
        viewBox="0 0 400 1500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 transform -translate-x-1/2"
      >
        <path
          ref={pathRef}
          d="M200 0 Q 250 150, 200 300 T 200 600 T 200 900 T 200 1200 T 200 1500"
          stroke="black"
          strokeWidth="3"
          strokeDasharray="10 10"
          strokeLinecap="round"
        />
      </svg>

      {/* Paper Plane Following the Wave Path */}
      <img
        ref={planeRef}
        src="/images/paper-plane.glb"
        alt="Paper Plane"
        className="absolute w-10 h-10"
      />

      {/* Content Sections with Alternating Layout */}
      <div className="container mx-auto px-6 lg:px-20">
        {[
          { title: "Work", img: "images/work.svg" },
          { title: "Serve", img: "serve.png" },
          { title: "Evolve", img: "evolve.png" },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`flex items-center justify-between py-16 opacity-0 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Image */}
            <div className="w-1/2 flex justify-center">
              <img
                src={`/images/${item.img}`}
                alt={item.title}
                className="w-48 h-48 object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-1/2">
              <h2 className="text-3xl font-bold">{item.title}</h2>
              <p className="text-gray-600 mt-2">
                To nurture a generation of self-aware, skilled, and
                purpose-driven individuals...
              </p>
              <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MottoSection;
