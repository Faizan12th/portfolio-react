import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e374d7e8-bb83-48b0-b90c-88ffc02723f0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perferendis unde sapiente! Perspiciatis adipisci cumque voluptatum omnis quos? Ipsa, praesentium.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>faizankhurshid@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>923459555720</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Wah, Punjab</p>
                        </div>
                    </div>
                </div>

                    <form onSubmit={onSubmit} className='contact-right'>
                        <label htmlFor="name">Your Name</label>
                        <input type="text"  placeholder='Enter your name' name='name'/>

                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email" placeholder='Enter your email'/>

                        <label htmlFor="message">Write your message here</label>
                        <textarea name="message" rows={8} placeholder='Enter your message'></textarea>

                        <button type='submit' className="contact-submit">Submit now</button>
                    </form>
            </div>
        </div>
    )
}

export default Contact
