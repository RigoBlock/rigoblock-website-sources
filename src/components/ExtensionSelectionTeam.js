import React from 'react'
import Link from 'gatsby-link'
import DrupalLogo from '../img/drupal.png'
import TwigLogo from '../img/twig.png'
import HtmlLogo from '../img/html.png'
import GabPic from '../img/gab.png'
import HannaPic from '../img/hanna.jpg'
import DavidPic from '../img/david.jpg'
import './ExtensionSelection.scss'

export default function ExtensionSelectionTeam({ className }) {
  return (
    <ul className={`ExtensionSelection ${className}`}>
      <li>
        <a
          href="https://www.linkedin.com/in/gabrielerigo"
          target="_blank"
          className="Extension">
          <img src={GabPic} />
          <h4>Gabriele Rigo</h4>
          <p>
            Smart Contract R&D. Previously treasurer @1BN+ USD Global Macro Hedge Fund
            and Head of Investment @25BN+ USD Asset Management Company.
            MSc Finance from Bocconi & HSG.
          </p>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/hanna-keskin-992263bb"
          target="_blank"
          className="Extension">
          <img src={HannaPic} />
          <h4>Hanna Keskin</h4>
          <p>
            Operations & PR. Business Administration at University of Applied Sciences Lugano.
            Previously apprentice at Palo Alto SA, Auction Bidder at Spink Switzerland. Fluent in 5 Languages.
          </p>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/favadavid"
          target="_blank"
          className="Extension">
          <img src={DavidPic} />
          <h4>David Fava</h4>
          <p>UX & UI Lead, Unix Systems administrator. Previously founder @ cloud hosting company. Partner BLC Network. MSc International Economics from University of Trieste. </p>
        </a>
      </li>
      <li>
        <a className="Extension">
          <h4>Paolo Longato</h4>
          <p>Alpha Tester</p>
        </a>
      </li>
      <li>
        <a className="Extension">
          <h4>Matteo Petrani</h4>
          <p>Experience Designer</p>
        </a>
      </li>
    </ul>
  )
}
