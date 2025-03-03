import CompImg from "@/assets/logo2.png"

export default function Footer() {
  return (
    <footer className="footer">
        <img src={CompImg} width={120}/>
        <span>개인정보처리방침</span>
        <address>
        사업자명: 홍길동  |  대표자명: 홍길동  |  팩스: 02-1234-5678  |  주소: 서울 서초구 서초대로77길 39, 10층  |  대표전화: 010-1234-5678  |  사업자등록번호: 123-45-67890  |  </address>
    </footer>
  )
}
