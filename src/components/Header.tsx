import Logo from '../assets/logo2.png';

export default function Header() {
    
    return(
      <div className="header-container">
      <div className="mainmenu-wrapper">
        <h1>
          <img src={Logo} alt="페이지 로고 이미지" width={118} />
        </h1>
        <span className='menu-item'>WHO WE ARE</span>
        <span className='menu-item'>WHAT WE CAN</span>
        <span className='menu-item'>WHAT WE DO</span>
        <button className='contact-button'>CONTACT</button>
      </div>
      <div className='dropdown-menu'>
        <div className='detail-item-wrapper'>
          <div className='detail-item-group'>
            <span className='detail-item'>CAIT VALUE</span>
            <span className='detail-item'>CEO 메시지</span>
            <span className='detail-item'>연혁</span>
          </div>
          <div className='detail-item-group'>
            <span className='detail-item'>컨설팅부</span>
            <span className='detail-item'>글로벌연구센터</span>
            <span className='detail-item'>정책연구부</span>
            <span className='detail-item'>기술개발부</span>
          </div>
          <div className='detail-item-group'>
            <span className='detail-item'>사업실적</span>
            <span className='detail-item'>발표논문</span>
            <span className='detail-item'>NEWS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
