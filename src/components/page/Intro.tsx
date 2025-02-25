
import Header from '../Header';
import MotoText from '../MotoText';
import Video from '../../videos/mainvid.mp4';

export default function Intro() {
  return (
    <div>
        <Header/>
        <video className="video" src={Video} autoPlay muted playsInline loop></video>
        <MotoText/>
    </div>
  )
}
