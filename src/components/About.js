import React from 'react';
import Header from "./Header";

function About(props) {
    return (
        <div className={'container-fluid about_part'}>
            <div className={'row'}>
                <div className={'col-xl-4 col-lg-4 about_img'}>
                    <div className={'about_fixed'}>
                        <div className={'about_me'}>
                            <h2 className={'text-white'}>ABOUT ME</h2>
                        </div>
                    </div>
                </div>
                <div className={'col-xl-8 col-lg-8 col-12 about_menu'}>
                    <Header/>
                    <div className={'about_text'}>
                        <div className={'page_title'}>
                            <div className={'title_box'}>
                                <span>WHO I AM</span>
                            </div>
                            <h2>ABOUT</h2>
                            <div className={'page_hr'}></div>
                        </div>
                        <div className={'about_img_text'}>
                            <img src="img/about_2.jpg"/>
                            <div className={'about_right_text'}>
                                <span className={'about_right_text_span'}>I'm Alexis Larten</span>
                                <p className={'about_right_text_p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className={'about_boxs'}>
                                    <div className={'about_box'}>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                        <div className={'about_box_text'}>
                                            <span>Development</span>
                                            <p className={'about_box_p'}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit, sed do eiusmod tempor incididunt.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={'about_box'}>
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                        <div className={'about_box_text'}>
                                            <span>Development</span>
                                            <p className={'about_box_p'}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit, sed do eiusmod tempor incididunt.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={'about_box'}>
                                        <i className="fa fa-paint-brush" aria-hidden="true"></i>
                                        <div className={'about_box_text'}>
                                            <span>Development</span>
                                            <p className={'about_box_p'}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit, sed do eiusmod tempor incididunt.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={'about_box'}>
                                        <i className="fa fa-mobile" aria-hidden="true"></i>
                                        <div className={'about_box_text'}>
                                            <span>Development</span>
                                            <p className={'about_box_p'}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit, sed do eiusmod tempor incididunt.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button>DOWNLOAD CV</button>
                            </div>
                        </div>
                        <div className={'about_footer'}>
                            <div className={'footer_line'}></div>
                            <div className={'footer_box'}>
                                <div className={'footer_box1'}>
                                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                                    <div>
                                        <h5>375</h5>
                                        <span>HAPPY CLIENTS</span>
                                    </div>
                                </div>
                                <div className={'footer_box1'}>
                                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                                    <div>
                                        <h5>375</h5>
                                        <span>HAPPY CLIENTS</span>
                                    </div>
                                </div>
                                <div className={'footer_box1'}>
                                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                                    <div>
                                        <h5>375</h5>
                                        <span>HAPPY CLIENTS</span>
                                    </div>
                                </div>
                                <div className={'footer_box1'}>
                                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                                    <div>
                                        <h5>375</h5>
                                        <span>HAPPY CLIENTS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;