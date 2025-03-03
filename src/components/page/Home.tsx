import News from "./sections/News";
import Performance from "./sections/Performance";
import Expertise from "./sections/Expertise";
import Intro from "./sections/Intro";

export default function Home() {
  return (
    <main>
      <Intro/>
      <Expertise/>
      <News/>
      <Performance/>
    </main>
  )
}
