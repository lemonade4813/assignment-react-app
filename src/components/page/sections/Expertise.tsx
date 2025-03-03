import ExpertiseText from "@components/page/segments/ExpertiseText";
import ExpertiseItem from "@components/page/segments/ExpertiseItem";
import { useEffect, useRef } from "react";
import { itemsInfo } from "@/util/expertiseItems";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const itemsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const itemsWrapper = itemsWrapperRef.current;
    const items = itemsRef.current;

    if (!container || !itemsWrapper) return;

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=100%",
      pin: true,
      anticipatePin: 1,
    });

    gsap.fromTo(
      itemsWrapper,
      { display: "flex", width : '200%'},
      {
        display: "flex",
        width: "100%",
        scrollTrigger: {
          trigger: itemsWrapper,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );

    items.forEach((item) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { flexGrow: 0 },
        {
          flexGrow: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top center",
            end: "bottom center",
            scrub: 1,  // 스크롤에 따라 부드럽게 변화
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="expertise-container" ref={containerRef}>
      <ExpertiseText />
      <div ref={itemsWrapperRef} style={{ display: "flex", height: "100vh"}}>
        {itemsInfo.map((item, index) => (
          <div className ="expertise-item"
            key={item.deptname}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
          >
            <ExpertiseItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}