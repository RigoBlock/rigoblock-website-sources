import React from 'react'
import Branding from './Branding'
import NewsletterSignup from './NewsletterSignup'
import GetSupportButton from './GetSupportButton'

import { SocialIcon } from 'react-social-icons'

import './Footer.scss'

const today = new Date()

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="shift-up-by-half">
        <GetSupportButton />
      </div>
      <div className="inner">
        <LearnMore />
        <NewsletterSignup />
        <Branding />
        <small className="copyright">RigoBlock Intl. &copy; {today.getFullYear()}&nbsp;/&nbsp; 
        <a href="/legal">
          <span className="text">Legal</span>
        </a>
        </small>
      </div>
    </footer>
  )
}


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

/*
<h2>Learn More</h2>
<a href="/about" className="button dashing expanded">
  <span className="text">Protocol Specifications</span>
</a>
<a href="https://medium.com/rigoblock" className="button dashing expanded">
  <span className="text">Blog</span>
</a>


function LearnMore() {
  return (
    <div className="learn-more">
      <a className="button dashing expanded">
        <SocialIcon url="https://www.facebook.com/RigoBlocks" />
        <SocialIcon url="https://twitter.com/rigoblock" />
        <SocialIcon url="https://www.linkedin.com/company/rigoblock" />
        <SocialIcon url="https://medium.com/rigoblock" />
      </a>
      <a href="https://gitter.im/rigoblock-drago/Lobby" className="button dashing expanded">
        <span className="text">Join our community on Gitter</span>
      </a>
    </div>
  )
}
*/
