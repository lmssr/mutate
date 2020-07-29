import React from 'react'
import { ContactWrapper } from '../elements'

export const ContactForm = () => {
  return (
    <ContactWrapper>
    <form method="post" action="https://formspree.io/xwkragwv">
      <label>
        <input type="text" name="name" id="name" placeholder="nom." />
      </label>
      <label>
        <input type="email" name="email" id="email" placeholder="email." />
      </label>
      <label>
        <input type="text" name="subject" id="subject" placeholder="sujet." />
      </label>
      <label>
        <textarea name="message" id="message" rows="5" placeholder="message." />
      </label>
      <button type="submit" id="button"><p>envoyer.</p></button>
    </form>
    </ContactWrapper>
    )
}
