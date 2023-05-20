import React from 'react';
import Header from "./Header";

function Contact(props) {
    return (
        <div className={'container-fluid contact_part'}>
            <div className={'row'}>
                <div className={'col-xl-4 col-lg-4 contact_img'}>
                    <div className={'contact_fixed'}>
                        <div className={'contact_my'}>
                            <h2 className={'text-white'}>CONTACT ME</h2>
                        </div>
                    </div>
                </div>
                <div className={'col-xl-8 col-lg-8 contact_menu'}>
                    <Header/>
                    <div className={'contact_page'}>
                        <div className={'page_title'}>
                            <div className={'contact_title_box'}>
                                <span>GET IN TOUCH</span>
                            </div>
                            <h2>CONTACT ME</h2>
                            <div className={'page_hr'}></div>
                        </div>
                        <div className={'form'}>
                            <div className={'row'}>
                                <div className={'col-xl-12 contact_form'}>
                                    <h6>SAY SOMETHING</h6>
                                    <form>
                                        <div className={'form_inputs'}>
                                            <input type={'text'} placeholder={'Name'}/>
                                            <input type={'email'} placeholder={'Email'}/>
                                        </div>
                                        <textarea placeholder={'Your Comment'}></textarea>
                                        <button>SEND MESSAGE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <section className={'contact_footer'}>
                            <div className={'row'}>
                                <div className={'col-md-4 contact_info'}>
                                    <div className={'contact_info_box'}>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <h6>Our Address</h6>
                                        <span>123 Stree New York City , USA</span>
                                        <span>750065.</span>
                                    </div>
                                </div>
                                <div className={'col-md-4 contact_info'}>
                                    <div className={'contact_info_box'}>
                                        <i className="fa fa-mobile" aria-hidden="true"></i>
                                        <h6>Our Address</h6>
                                        <span>Office: +004 444 444</span>
                                        <span>Office: +004 444 444</span>
                                    </div>
                                </div>
                                <div className={'col-md-4 contact_info'}>
                                    <div className={'contact_info_box'}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <h6>Our Address</h6>
                                        <span>info@domain.com</span>
                                        <span>contact@domain.com</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;