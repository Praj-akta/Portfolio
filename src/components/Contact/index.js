import React, {useState} from 'react';
import wifi from '../../images/wifi.png';
import mailImg from '../../images/mail.png';
import phoneImg from '../../images/phone.png';
import linkedinImg from '../../images/linkedin.png';
import locationImg from '../../images/location.png';
import battery from '../../images/phone-battery.png';
import './index.scss';

function Contact() {
    const [selectedContact, setContactValue] = useState(1);

    const contactIcons = [
        {id: 1, imgSrc: phoneImg, imgClass:"phone-img"},
        {id: 2, imgSrc: mailImg},
        {id: 3, imgSrc: linkedinImg},
        {id: 4, imgSrc: locationImg, imgClass:"location-img"}
    ];

    const contactList = [
        {
            id: 1,
            title: "Hello, you can reach me at:",
            value: "+919819856272"
        },
        {
            id: 2,
            title: "We can connect through the below mail id:",
            value: "prajaktalimje13@gmail.com"
        },
        {
            id: 3,
            title: "You can check my Linked-in profile here:",
            value: "https://www.linkedin.com/in/prajakta-l-159b91126"
        },
        {
            id: 4,
            title: "I reside in:",
            value: "Kalwa, Thane - Maharashtra, 400605"
        }
    ];

    return (
        <div className="contact-page" id="contact">
            <div className="content-header"> Contact Details </div>
            <div className="content-header__design">
                <div /> 
                <div />
                <div />
            </div>    
            <div id="mobile">
                <div id="mobile-header">
                    <div id="circle" />
                    <div id="line" />
                </div>
                <div id="display">
                    <div id="display__content">
                        <div id="status-bar">
                            <div id="wifi">
                                <div className="signal" />
                                <div className="signal" />
                                <div className="signal" />
                                <div className="signal" />
                                <div className="signal" />
                                <img src={wifi} alt="wifi" />
                            </div>
                            <div id="time">
                                7.24 AM
                            </div>
                            <div id="battery">
                                100% 
                                <img src={battery} alt="battery" />
                            </div>
                        </div>
                        <div id="contact-list">
                            {
                                contactList.map(({ id, title, value }, index) => {
                                    return (
                                        id === selectedContact &&
                                        <div key={index} id="contact-list__selected-value">
                                            <div id="title"> {title} </div>
                                            {
                                                selectedContact !== 4
                                                ? (
                                                    <a href={selectedContact === 1 ? `tel:${value}`
                                                        : selectedContact === 2 ? `mailto:${value}`
                                                        : value}
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        {value}
                                                    </a>
                                                ) : (
                                                    <div id="address"> {value} </div>
                                                )
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div id="contact-icons">
                            {
                                contactIcons.map(({ id, imgSrc, imgClass }, index) => {
                                    return (
                                        <img 
                                            key={index}
                                            alt="icons" 
                                            src={imgSrc} 
                                            id={imgClass}
                                            className={selectedContact === id
                                                ? "bounce-class" : ""}
                                            onClick={_ => setContactValue(id)}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div id="mobile-home-btn" />
            </div>     
        </div>
    )
}

export default Contact;