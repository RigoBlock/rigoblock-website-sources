import React, { Component } from 'react'
import jsonp from 'jsonp'
import './NewsletterSignup.scss'

const action = 'https://rigoblock.us15.list-manage.com/subscribe/post?u=61d62dbd39a3052da7ec9fdfa&amp;id=37290603c2'
const getAjaxUrl = url => url.replace('/post?', '/post-json?')

export default class NewsletterSignup extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null
    }
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf('@') === -1) {
      this.setState({
        status: 'error'
      })
      return
    }
    const url = getAjaxUrl(action) + `&EMAIL=${encodeURIComponent(this.input.value)}`;
    this.setState(
      {
        status: 'sending'
      }, () => jsonp(url, {
        param: 'c'
      }, (err, data) => {
        if (err) {
          this.setState({status: 'error'})
        } else if (data.result !== 'success') {
          this.setState({status: 'error'})
        } else {
          this.setState({status: 'success'})
        }
      })
    )
  }
  render() {
    const { status } = this.state
    return (
      <form className={`NewsletterSignup ${status}`} action={action} method="post" noValidate>
        <label htmlFor="NewsletterSignup--text-field">Subscribe for updates</label>
        <div>
          <input
            id="NewsletterSignup--text-field"
            ref={node => (this.input = node)}
            type="email"
            defaultValue=""
            name="EMAIL"
            required={true}
            aria-required="true"
            placeholder='Email'
          />
          <button
            disabled={this.state.status === "sending" || this.state.status === "success"}
            onClick={this.onSubmit}
            type="submit"
          >Subscribe</button>
        </div>
        {status === "sending" && <p>Sending…</p>}
        {status === "success" && <p>Success!</p>}
        {status === "error" && <p>Enter email before submitting</p>}
        <a href="/legal" className="button dashing expanded">
          <span className="text">Legal</span>
        </a>
      </form>
    )
  }
}
