import React from 'react'
import { ContactWrapper } from '../elements'

export const ContactForm = () => {
  return (
    <ContactWrapper>
    <form method="post" action="#">
      <label>
        <p>Name</p>
        <input type="text" name="name" id="name" />
      </label>
      <label>
        <p>Email</p>
        <input type="email" name="email" id="email" />
      </label>
      <label>
        <p>Subject</p>
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        <p>Message</p>
        <textarea name="message" id="message" rows="5" />
      </label>
      <p><button type="submit">Send</button></p>
    </form>
    </ContactWrapper>
    )
}
