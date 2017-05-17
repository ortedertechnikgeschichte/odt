import React, { Component } from 'react'
import emailRegex from 'email-regex'

import formHelpers from '../lib/forms'
import Form from './Form'
import LineInput from './LineInput'
import LineTextarea from './LineTextarea'

const ERROR = 'Something went wrong. Please try again.'
const SUCCESS = 'Thanks for contacting us!'

export default class ContactForm extends Component {
  constructor (props) {
    super(props)
    formHelpers(this)
  }

  state = {
    _subject: '',
    email: '',
    message: '',
    submit: 'Submit',
    errors: {}
  }

  inputs = ['_subject', 'email', 'message']
  trim = ['email']

  validations = {
    _subject: input => !input,
    email: input => !emailRegex({exact: true}).test(input),
    message: input => !input
  }

  onSubmit = event => {
    event.preventDefault()

    const payload = {}
    this.inputs.forEach(input => payload[input] = this.state[input])

    fetch('', {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(({ok}) => {
      this.setState({submit: ok ? SUCCESS : ERROR})
    }, (err) => {
      this.setState({submit: ERROR})
    })
  }

  render () {
    return <Form
      disabled={this.hasErrors()}
      onSubmit={this.onSubmit}
      submit={this.state.submit}
      trackingId='Submit contact form'
    >
      <LineInput
        error={this.state.errors._subject}
        name='_subject'
        placeholder='Reason for contact'
        value={this.state._subject}
        onChange={this.onChange}
        required
      />
      <LineInput
        error={this.state.errors.email}
        name='email'
        placeholder='Your email'
        value={this.state.email}
        onChange={this.onChange}
        required
      />
      <LineTextarea
        error={this.state.errors.message}
        name='message'
        placeholder='Your message'
        value={this.state.message}
        onChange={this.onChange}
        required
      />
    </Form>
  }
}
