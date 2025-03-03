import React from "react";
const text = "지속 가능한 미래와 고객의 비즈니스 성공을 위한 혁신적인 환경 솔루션을 제공합니다";

export const MotoText: React.FC = () => {
  return (

    <div className="moto-wrapper">
      {text.split("").map((char, index) => (
        <span key={index} className="moto" style={{ animationDelay: `${index * 0.1}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
 
  );
};

export default MotoText;