import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14779.928582211713!2d87.08840843692974!3d22.164751666305246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d12560113b573%3A0xf1c267125956e403!2sRohini%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1634130649324!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 9749****17'} text2={'+91 9937****38 '} title={'Phone'}/>
                    <ContactItem icon={email} text1={'nabakumarsit2002@gmail.com'} text2={'nabakumarsit@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'XYZ, 067 Mallica Road, Jadavpur, WB'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
