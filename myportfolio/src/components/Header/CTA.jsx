import React from 'react'
//import CV from assets folder once it is complete
import CV from '../../assets/TRIPTI-GURUNG-Resume-20250123.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} className='btn' download>Download CV</a>
    {/* href='{CV} download insert once ready*/}
    <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA