import gsap from "gsap";
import { useRef, useEffect } from "react";
import ArrowSvg from "@/assets/arrow.svg?react";
import Per1 from "@/assets/per1.png";
import Per2 from "@/assets/per2.png";
import PerCenter from "@/assets/perCenter.png";
import Per3 from "@/assets/per3.png";
import Per4 from "@/assets/per4.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const perCenterRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ScrollTrigger로 전체 섹션 고정
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=100%",
      pin: true,
      anticipatePin: 1,
    });

    // 일반 이미지들 애니메이션
    imagesRef.current.forEach((img, index) => {
      if (!img) return;
      gsap.fromTo(
        img,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          zIndex : 1,
          y: -400,
          ease: "power2.out",
          duration: 2 + index * 0.3,
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (perCenterRef.current) {
      gsap.fromTo(
        perCenterRef.current,
        { scale: 1, opacity: 0 },
        {
          width : '100vw',
          height : '100vh',
          y : -800,
          opacity : 0.6,
          ease: "power2.out",
          duration: 2,
          scrollTrigger: {
            trigger: perCenterRef.current,
            start: "top 50%",
            end: "top 20%",
            scrub: 2,
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="performance-container"> 
      <div className="performance-headline-wrapper">
        <p className="performance-headline-text">
          Environmental consultancy firm offering high-value advisory services
        </p>
        <button className="performance-button">
          <p>사업실적</p>
          <ArrowSvg width={20} height={20} stroke="#FFF"/>
        </button>
      </div>
      <div className="performance-background-image">
        {[Per1, Per2, Per3, Per4].map((src, index) => (
          <img
            key={index}
            ref={(el) => {
              imagesRef.current[index] = el;
            }}
            src={src}
            width={120}
            style={{ opacity: 0, zIndex : 1}}
          />
        ))}
        {/* PerCenter 이미지 */}
        <img
          ref={perCenterRef}
          src={PerCenter}
          width={120}
          style={{ opacity: 1, position: "absolute", left: "50%", transform: "translateX(-50%)" }}
        />
      </div>
    </div>
  );
};

export default Performance;