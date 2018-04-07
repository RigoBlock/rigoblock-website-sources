import React from 'react'
import RbcLogo from '../img/RigoBlockLogo.png'
import './HomeTopBar.scss'
import { SocialIcon } from 'react-social-icons'
import { Grid, Row, Col } from 'react-flexbox-grid';


function LearnMore() {
  return (

    <div className="learn-more">
      <div className="social">
        <SocialIcon
          className="social-icon"
          url="https://www.facebook.com/RigoBlocks"
          target="_blank" />
        <SocialIcon
          className="social-icon"
          url="https://twitter.com/rigoblock"
          target="_blank" />
        <SocialIcon
          className="social-icon"
          url="https://www.linkedin.com/company/rigoblock"
          target="_blank" />
      </div>
      <p className="text" />
      <a
        href="https://gitter.im/rigoblock-drago/Lobby"
        className="button dashing expanded"
        target="_blank">
        <span className="text">Join our community on Gitter</span>
      </a>
    </div>
  )
}

export default function HomeTopBar() {
  return (
      <Row between="xs" className="topBarContainer">
        <Col xs={4} >
          <div className="HomepageTopBar">
            <a
              className="logo"
              href="https://rigoblock.com"
              title="Visit RigoBlock"
            >
              <img src={RbcLogo} alt="RigoBlock Logo" />
            </a>
            <a className="maintained" href="https://rigoblock.com">
              RigoBlock
            </a>
          </div>
        </Col>
        <Col xs={8}>
        <Row between="xs">
          <Col  xs={6} className="socialIcons">
            <SocialIcon
              className="social-icon"
              url="https://www.facebook.com/RigoBlocks"
              target="_blank" />
            <SocialIcon
              className="social-icon"
              url="https://twitter.com/rigoblock"
              target="_blank" />
            <SocialIcon
              className="social-icon"
              url="https://www.linkedin.com/company/rigoblock"
              target="_blank" />
          </Col>
          <Col xs={6}>
            <a
              href="https://t.me/rigoblockprotocol"
              className="button dashing expanded"
              target="_blank">
             
              <span style={{fontSize: "0.8rem"}}>Join our Telegram!</span>
              {/* <img className="icon" src="/static/telegram-logo-2.png"/> */}
              
            </a>
          </Col>
          </Row>
        </Col>
      </Row>

    // <div className="HomepageTopBar">
    //   <a
    //     className="logo"
    //     href="https://rigoblock.com"
    //     title="Visit RigoBlock"
    //   >
    //     <img src={RbcLogo} alt="RigoBlock Logo" />
    //   </a>
    //   <a className="maintained" href="https://rigoblock.com">
    //     RigoBlock
    //   </a>
    //   <LearnMore />
    // </div>
  )
}
