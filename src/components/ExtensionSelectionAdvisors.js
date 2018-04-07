import React from 'react'
import Link from 'gatsby-link'
import './ExtensionSelection.scss'

export default function ExtensionSelectionAdvisors({ className }) {
  return (
    <ul className={`ExtensionSelection ${className}`}>
      <li>
        <a
          href="https://www.linkedin.com/in/mikael-olofsson-9a865135/"
          target="_blank"
          className="Extension">
          <h4>Mikael Olofsson</h4>
          <p>Investor and Advisor. Co-Founder iXledger Technologies. Managing Partner Polymbios Investment Management.</p>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/alberto-robbiani-86a55ab5"
          target="_blank"
          className="Extension">
          <h4>Alberto Robbiani</h4>
          <p>
            Advisor Corporate Clients. Senior Client Advisor at Crossinvest. Previously Executive Director at UBS.
          </p>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/thesantoshpandey/"
          target="_blank"
          className="Extension">
          <h4>Santosh Pandey</h4>
          <p>
            Legal Advisor. Managing Partner at P&Y Law Offices. Managing Director at Western Legal Corporation Limited.
          </p>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/primoz-kordez-frm-9878b463/"
          target="_blank"
          className="Extension">
          <h4>Primoz Kordez</h4>
          <p>
            Blockchain Economics Advisor. Fintech Advisor at Cofound.it & Iconomi.
          </p>
        </a>
      </li>
    </ul>
  )
}
