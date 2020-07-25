import React from 'react'
import { ContactWrapper } from '../elements'

export const ContactForm = () => {
  return (
    <ContactWrapper>
    <form method="post" action="#">
      <label>
        <input type="text" name="name" id="name" value="nom." />
      </label>
      <label>
        <input type="email" name="email" id="email" value="email." />
      </label>
      <label>
        <input type="text" name="subject" id="subject" value="sujet." />
      </label>
      <label>
        <textarea name="message" id="message" rows="5" value="message." />
      </label>
      <button type="submit" id="button"><p>envoyer.</p></button>
    </form>
    </ContactWrapper>
    )
}
