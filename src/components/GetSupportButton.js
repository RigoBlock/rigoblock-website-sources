import React from 'react'
import GithubIcon from 'react-icons/lib/go/mark-github'
import './GetSupportButton.scss'

export default function GetSupportButton() {
  return (
    <a
      className="GetSupportButton"
      href="https://github.com/rigoblock"
      target="_blank"
    >
      <GithubIcon className="icon" />
      <span className="text">View Our Code on Github</span>
    </a>
  )
}
