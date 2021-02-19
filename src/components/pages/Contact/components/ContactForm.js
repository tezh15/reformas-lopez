import React from 'react'
import { IconContext } from 'react-icons/lib'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'


function ContactForm() {
    return (

        <IconContext.Provider value={{ size: 30, }}>
            <div className="card" style={{marginLeft: 40}}>
            <div className="contactRightContainer">
                <div className="logoSection">
                    <img style={{ width: 130, height: 130, marginRight: 25 }} src="images/logo_4.png" alt="" />
                    <img style={{ width: 300, height: 150, paddingBottom: 25 }} src="images/logo_5.png" alt="" />
                </div>
                <div className="informationSection">
                    <div className="informationEmailSection">
                        <div style={{marginRight: 20}}>
                        < AiOutlineMail />
                        </div>
                        <div className="informationText"><a href="mailto:team@eterux.com">team@eterux.com </a></div>
                    </div>
                    <div className="informationEmailSection">
                        <div style={{marginRight: 20}}>
                        < AiOutlinePhone />
                        </div>
                        <div className="informationText">+57 317 502 97 14</div>
                    </div>
                    <div className="informationEmailSection">
                        <div style={{marginRight: 20}}>
                        < GoLocation />
                        </div>
                        <div className="informationText">Cali, Colombia</div>
                    </div>
                </div>
            </div>
            </div>

        </IconContext.Provider>
    )
}

export default ContactForm
