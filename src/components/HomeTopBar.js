import React from 'react'
import RbcLogo from '../img/RigoBlockLogo.png'
import './HomeTopBar.scss'

export default function HomeTopBar() {
  return (
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
  )
}
