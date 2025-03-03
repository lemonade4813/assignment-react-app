export default function ExpertiseText() {

  const title = "Our Expertise";
  const text1 = "깊이 있는 전문 지식으로";
  const text2 = "지속 가능한 미래를 설계합니다";
  
  return (
    <div>
      <p style={{color : "#808080", fontSize : '26px'}}>
        {title.split("").map((word, wordIndex) => (
          <span key={word} className="char" style={{ animationDelay: `${1.5 +wordIndex * 0.3}s` }}>
              {word === " " ? "\u00A0" : word}
          </span>
        ))}
      </p>
    
      <p style={{color : "#000", fontSize : '44px'}}>
        {text1.split("").map((word, wordIndex) => (
          <span key={word} className="char" style={{ animationDelay: `${3 + wordIndex * 0.3}s` }}>
              {word === " " ? "\u00A0" : word}
          </span>
        ))}
      </p>
      <p style={{color : "#000", fontSize : '44px'}}>
        {text2.split("").map((word, wordIndex) => (
          <span key={word} className="char" style={{ animationDelay: `${2 + wordIndex * 0.3}s` }}>
              {word === " " ? "\u00A0" : word}
          </span>
        ))}
      </p>
  </div>
  )
}
