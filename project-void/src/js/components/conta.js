import React from 'react'

export default () => {

    return(
      <div className="conta">
      <h2>Send us a message</h2>
    <div className="container">
      <form >
      <label>
        Name:
        <input type="text" name="name" placeholder="Your name"/>
      </label>
      <label>
        Email Id:
        <input type="email" name="email_id" placeholder="Your email id"/>
      </label>
      <label>
        Your message for us:
        <input type="text" name="message" placeholder="Your message"/>
      </label>
        <input type="button" value="Send Email" class="button" />
      </form>
      </div>
    </div>
    )
}
