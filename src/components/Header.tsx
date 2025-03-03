import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/logo2.png';
import { useState } from 'react';
import ResHeaderMenuSvg from '@/assets/resHeaderMenu.svg?react';
import CloseSVg from '@/assets/close.svg?react';

export default function Header() {
    
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
      <>
      {/* 반응형 헤더영역 */}
      <div className="responsive-header-container">
        <div className="responsive-header-logo-menu">
          <h1>
            <img src={Logo} alt="페이지 로고 이미지" className='logo-image' onClick={() => navigate('/')} />
          </h1>
            {!isMenuOpen ? 
                <ResHeaderMenuSvg 
                    width={30} 
                    height={30} 
                    stroke='red'
                    fill='#d3d3d3'
                    onClick={() => setIsMenuOpen(prev =>  !prev)}
                /> :
                <CloseSVg 
                    width={30} 
                    height={30}
                    onClick={() => setIsMenuOpen(prev =>  !prev)}
                />
            }
        </div>
        <div className={isMenuOpen ? 
            'responsive-menu-item-wrapper' : 
            'responsive-menu-item-wrapper-hidden'
        }>
          <span className='responsive-menu-item'>WHO WE ARE</span>
          <span className='responsive-menu-item'>WHAT WE CAN</span>
          <span className='responsive-menu-item'>WHAT WE DO</span>
          <span className='responsive-menu-item'>문의하기</span>
        </div>
      </div>

      <div className="header-container">
        <div className="mainmenu-wrapper">
          <h1>
            <img src={Logo} alt="페이지 로고 이미지" className='logo-image' onClick={() => navigate('/')} />
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
              <span className='detail-item' onClick={() => navigate('/thesis')}>발표논문</span>
              <span className='detail-item'>NEWS</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
