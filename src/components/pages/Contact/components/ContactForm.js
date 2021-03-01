import React from 'react'
import { IconContext } from 'react-icons/lib'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'


function ContactForm() {
    return (

        <IconContext.Provider value={{ size: 30, }}>
            <div className="card contactRightContainer">
                <div className="row mb-3">
                    <div className="col-md-4" style={{padding: 0}}>
                        <div className="logoSectionOne" >
                            <img style={{ width: 100, height: 100, marginRight: 25 }} src="images/logo_4.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4" style={{padding: 0}}>
                        <div className="logoSectionTwo">
                            <img style={{ width: 250, height: 120, paddingBottom: 25 }} src="images/logo_5.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="informationSection">
                            <div className="informationEmailSection">
                                <div style={{ marginRight: 20 }}>
                                    < AiOutlineMail />
                                </div>
                                <div className="informationText"><a href="mailto:team@eterux.com">team@eterux.com </a></div>
                            </div>
                            <div className="informationEmailSection">
                                <div style={{ marginRight: 20 }}>
                                    < AiOutlinePhone />
                                </div>
                                <div className="informationText">+57 317 502 97 14</div>
                            </div>
                            <div className="informationEmailSection">
                                <div style={{ marginRight: 20 }}>
                                    < GoLocation />
                                </div>
                                <div className="informationText">Cali, Colombia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </IconContext.Provider>
    )
}

export default ContactForm
