import React from 'react'
import Page from '../components/Page'
import Link from 'gatsby-link'

export default function AboutPage() {
  const tree = [
    { to: '/', title: 'Home', below: [] },
    { to: '/about', title: 'About RigoBlock', below: [], active: true },
    { to: '/legal', title: 'RigoBlock Legal', below: [], active: true },
  ]
  return (
    <Page
      title="About RigoBlock"
      description="All about the RigoBlock protocol"
      menu={tree}
    >
      {/* What it is */}
      <p>
        RigoBlock is an open source protocol that lets you create and run a fund on the Ethereum blockchain.
        The funds operate in an autonomous way, controlled by a private key or by another smart contract.
        The RigoBlock protocol is built in a modular and abstracted way, so that developers can bring their own "asset management version" to the protocol as long as they follow some basic guidelines.
        We have created the first two classes of funds: Vault and Drago.
        A Vault allows for safe Ether hot-storage.
        A Drago allows for trading on decentralized exchanges.
        Users can create and run as many funds as they want.
        RigoBlock is an open and permissonless protocol, with no fees.
      </p>
      <h2>Where it all began</h2>
      <p>
        In 2016, we
        started working on the early code for funds in Solidity, with the goal of creating a factory of funds
        (an asset management company) which would have low operating costs and allow to sharply reduce the barriers
        to entry for the smaller traders.
        We then moved towards abstracting our Solidity software and creating an open protocol.
        In May 2017, we
        {' '}
        <a href="https://medium.com/@gabrielerigo/decentralized-hedge-fund-pre-beta-bc70d9142281" target="_blank">
          launched our early alpha on an Ethereum test network.
        </a>
        {' '}
        We have been working on improving our Protocol and creating Proof-of-Performance,
        our algorithm for rewarding fund performances.
        Thanks to the Rigo token being built on top of the RigoBlock protocol we can:{' '}

      </p>
      <ul>
        <li>
          establish a meritocratic and incentives-based framework for traders;
        </li>
        <li>
          separate the fee logic from the funds, so that our protocol has no fees;
        </li>
        <li>
          create an incentives mechanism on top of our token;
        </li>
        <li>
          lower the costs for funds and better align the interests of fund investors, managers, and the Rigo token holders.
        </li>
      </ul>
      <p>
        We could not find a framework for fund infrastructure which was decentralized, scalable, abstracted and generalized enough,
        so we built one!
      </p>

      <h2>RigoBlock's Philosophy</h2>
      <p>
        RigoBlock is a protocol on the Ethereum blockchain, which lowers the
        barriers to entry to asset management for any trader.
        It has been built with scalability and decentralization in mind since day 1.
        If you do not find a functionality on our platform, you can request
        one through our RBIPs on github, or you can "bring your own asset management"
        and the Rigo token holders will be able to approve it and put it in
        production alongside our existing versions.
      </p>
      <h2>Credits</h2>
      <p>
        We thank the work of {' '}
        <a href="http://lastcallmedia.com/" target="_blank">LastCallMedia</a> as our primary
        influence for the creation of this website.{' '}
      </p>
    </Page>
  )
}
