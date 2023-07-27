import React from 'react'
//import CV from assets folder once it is complete
import CV from '../../assets/TRIPTI_GURUNG_Resume07072023.pdf'

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