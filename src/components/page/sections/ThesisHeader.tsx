import ThesisImg1 from "@/assets/topImage.png"
import { useLocation } from "react-router-dom"
export default function ThesisHeader() {


  const location = useLocation();

  console.log(location.pathname)

  return (
    <section className="thesis-header-container">
      <img src={ThesisImg1} className="thesis-header-image"/>
      <ul className="thesis-header-nav">
        <li>사업실적</li>
        <li className={location.pathname === '/thesis' ? "thesis-header-menuitem" : ""}>발표논문</li>
        <li>NEWS</li>
      </ul>
    </section>
  )
}
