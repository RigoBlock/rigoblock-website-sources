import React from 'react'
import Link from 'gatsby-link'
import TopBar from '../components/HomeTopBar'
import BlogPostsCareer from '../components/BlogPostsCareer'
import Footer from '../components/Footer'
import Branding from '../components/Branding'
import Infographic from '../img/infographic.jpg'
import Bubble, {
  BubbleLayer,
  BubbleCluster,
  BubbleLayerBoundary,
} from '../components/Bubble'
import Video3 from '../components/Video3'
import MouseIcon from '../components/MouseIcon'
import ExtensionSelectionTeam, { ExtensionSelectionTeamMembers } from '../components/ExtensionSelectionTeam'
import ExtensionSelectionAdvisors from '../components/ExtensionSelectionAdvisors'
import Manny from '!svg-react-loader?name=Logo!../img/Logo.svg'
import NewsletterSignup from '../components/NewsletterSignup'
import { Grid, Row, Col } from 'react-flexbox-grid';

export default function IndexPage() {
  return (
    <div className="HomeWrapper">
      <div className="Homepage">
        <div className="IntroPane">
          <TopBar />
          <HomepageHero />

          {/* <MouseIcon /> */}
        </div>
        <AboutProductPane />
        <GettingStartedTeamPane />
        <GettingStartedAdvisorsPane />
        <BlogPostsCareer />
      </div>
      <Footer />
    </div>
  )
}

function HomepageHero() {
  return (
    <BubbleLayerBoundary className="HomepageHero">
      <div className="inner">
        <Branding large slogan />
        <ul className="links">
          <li>
            <a
              href="https://medium.com/rigoblock"
              className="button dashing-icon expanded"
              target="_blank">
              <span className="text">Blog</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/RigoBlock/whitepaper/raw/master/RigoBlockPaper.pdf" className="button dashing-icon expanded">
              <i className="icon icon-document" />
              <span className="text">Whitepaper</span>
            </a>
          </li>
          <li>
            <a
              href="https://pool.rigoblock.com"
              className="button blue expanded"
              target="_blank">
              <span className="text">DApp</span>
            </a>
          </li>
        </ul>
        <Row style={{paddingTop: "100px"}}>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
                <NewsletterSignup />
              </Col>
            </Row>
          </Col>
        </Row>


      </div>
    </BubbleLayerBoundary>
  )
}

function AboutProductPane() {
  return (
    <div className="AboutProductPane">
      <BubbleLayerBoundary className="inner">
        <div className="note">
          <h2>We Build Software for Organizing The World's Value</h2>
          <p>
            The world's value is becoming tokenized.
            We have created a solid foundation for organizing pooled tokens.
            We are an emerging community of traders and developers at work to
            lower the barriers to entry to fund management.
          </p>
          <Link to="/about" className="button dashing-icon">
            <i className="icon icon-right" />
            <span className="text">Protocol Specifications</span>
          </Link>
        </div>
        <div className="shot-casing">
          <div className="shot" />
        </div>
      </BubbleLayerBoundary>
      <div className="AboutProductPane">
        <Video3 />
      </div>
    </div>
  )
}

function GettingStartedPane() {
  return (
    <div className="GetStartedPane">
      <Manny className="logo" />
      <h2 id="GetStarted">Get Started</h2>

      <div className="ChooseExtensionStep Step">
        <div className="intro">
          <h3>What kind of templates are you using?</h3>
        </div>
        <ExtensionSelection />
      </div>
    </div>
  )
}

function GettingStartedTeamPane() {
  return (
    <div className="GetStartedPane">
      <h2 id="GetStarted">Our Team</h2>

      <div className="ChooseExtensionStep Step">
        <ExtensionSelectionTeam />
        <ExtensionSelectionTeamMembers />
      </div>
    </div>
  )
}

function GettingStartedAdvisorsPane() {
  return (
    <div className="GetStartedPane">
      <h2 id="GetStarted">Our Advisors</h2>

      <div className="ChooseExtensionStep Step">
        <ExtensionSelectionAdvisors />
      </div>
    </div>
  )
}

/*
export default function IndexPage() {
  return (
    <div className="HomeWrapper">
      <div className="Homepage">
        <div className="IntroPane">
          <TopBar />
          <HomepageHero />
          <MouseIcon />
        </div>
        <AboutProductPane />
        <GettingStartedPane />
        <BlogPosts />
      </div>
      <Footer />
    </div>
  )
}
*/
