import React from 'react'
import DesigningMannequin from '../img/blog-posts/designing-mannequin.png'
import ComponentTheming from '../img/blog-posts/component-theming.png'
import IntroducingMannequin from '../img/blog-posts/introducing-mannequin.jpg'
import './BlogPosts.scss'

export default function BlogPostsCareer() {
  return (
    <div className="BlogPosts">

      <h2>Join our network</h2>

      <ul>

        <li>
          <a href="mailto:admin@rigoblock.com">
            <span className="tag">Frontend Developer</span>
            <span className="title">
              You are experienced with React and ES6-ES8.
              You are interested in decentralized architectures and technologies.
              You will get a horizontally structured, goal-oriented decentralized organization.
            </span>
          </a>
        </li>

        <li>
          <a href="mailto:admin@rigoblock.com">
            <span className="tag">Solidity Developer</span>
            <span className="title">
              You can deliver exceptional solidity code and think outside of the box.
              You will get a horizontally structured, goal-oriented decentralized organization.
            </span>
          </a>
        </li>

        <li>
          <a href="mailto:admin@rigoblock.com">
            <span className="tag">Community Manager</span>
            <span className="title">
              You will be in charge of our community and improve communication on our social channels.
              You can produce outstanding quality content.
              You will get a horizontally structured, goal-oriented decentralized organization.
            </span>
          </a>
        </li>

      </ul>

    </div>
  )
}
