// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const GsapSmoothScroll = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to("body", {
//       scrollTrigger: {
//         trigger: "body",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 2,
//       },
//       y: "-500px",
//       ease: "power3.out",
//     });
//   }, []);

//   return null; // 화면에 렌더링할 요소 없음
// };

// export default GsapSmoothScroll;