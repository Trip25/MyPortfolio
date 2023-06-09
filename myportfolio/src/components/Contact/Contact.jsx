import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from 'emailjs-com'

const serviceID = process.env.REACT_APP_SERVICE_ID
const templateID = process.env.REACT_APP_TEMPLATE_ID
const public_key = process.env.REACT_APP_PUBLIC_KEY

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3cmmlos', 'template_lg4714c', form.current, 'fJGj5DXy-kEtODG0Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact_container'>
    {/* Email option */}
    <div className='contact_options'>
      <article className='contact_option'>
      <MdOutlineEmail className='contact_option_icon'/>
      <h4>Email</h4>
      {/* <h5>Send me an email</h5> */}
      <a href='mailto:'>Send a message</a>
    </article>
    {/* Add Linkedin*/}
    {/* <article className='contact_option'>
      {/* <FaLinkedin className='contact_option_icon'/> remmeber to import */}
      {/* <h4>Linkedin</h4>
      <h5>Send me a DM</h5>
      <a href='https://'>Send a message</a>
    </article> */} 

    {/* Maybe add whatapp? */}
    {/* <article className='contact_option'>
      <MdOutlineWhatsApp className='contact_option_icon'/>
      <h4>Whatsapp</h4>
      <h5>Send me a DM</h5>
      <a href='https://api.whatsapp.com/send?phone=+44'>Send a message</a>
    </article> */}
    </div>
{/* End of contact options */}
<form ref={form} onSubmit={sendEmail}>
<input type='text' placeholder='Your Full Name' name='name' required/>
<input type='email' placeholder='Your Email' name='email' required/>
<textarea name='message' placeholder='Your Message' rows='7' required></textarea>
<button type='submit'className='btn btn-primary'>Send Message</button>
</form>
    </div>
    
    </section>
  )
}

export default Contact