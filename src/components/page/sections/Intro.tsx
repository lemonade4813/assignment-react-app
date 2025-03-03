
import Video from '@/videos/mainvid.mp4';
import MotoText from '@components/page/segments/MotoText';

export default function Intro() {
  return (
    <div className='intro-container'>
        <video className="video" src={Video} autoPlay muted playsInline loop></video>
        <MotoText/>
    </div>
  )
}
