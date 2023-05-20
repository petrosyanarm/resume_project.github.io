import React from 'react';
import Header from "./Header";

function Resume(props) {
    return (
        <div className={'container-fluid resume_part'}>
            <div className={'row'}>
                <div className={'col-xl-4 col-lg-4 resume_img'}>
                    <div className={'resume_fixed'}>
                        <div className={'resume_my'}>
                            <h2 className={'text-white'}>MY RESUME</h2>
                        </div>
                    </div>
                </div>
                <div className={'col-xl-8 col-lg-8 resume_menu'}>
                    <Header/>
                    <div className={'resume_page'}>
                        <div className={'page_title'}>
                            <div className={'resume_title_box'}>
                                <span>HISTORY</span>
                            </div>
                            <h2>MY RESUME</h2>
                            <div className={'page_hr'}></div>
                        </div>
                        <div className={'resume_text'}>
                            <div className={'row'}>
                                <div className={'col-md-6 resume_exp'}>
                                    <h4>Experience</h4>
                                    <div className={'resume_exp_box'}>
                                        <div className={'resume_exp_title'}>
                                            <div className={'resume_exp_icon'}>
                                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                            </div>
                                            <div className={'resume_exp_name'}>
                                                <h6>Google</h6>
                                                <span>OCT 2015 - OCT 2016</span>
                                            </div>
                                        </div>
                                        <div className={'resume_exp_text'}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            </p>
                                        </div>
                                    </div>
                                    <div className={'resume_exp_box'}>
                                        <div className={'resume_exp_title'}>
                                            <div className={'resume_exp_icon'}>
                                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                            </div>
                                            <div className={'resume_exp_name'}>
                                                <h6>Google</h6>
                                                <span>OCT 2015 - OCT 2016</span>
                                            </div>
                                        </div>
                                        <div className={'resume_exp_text'}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-6 resume_edu'}>
                                    <h4>Education</h4>
                                    <div className={'resume_exp_box'}>
                                        <div className={'resume_exp_title'}>
                                            <div className={'resume_exp_icon'}>
                                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                            </div>
                                            <div className={'resume_exp_name'}>
                                                <h6>Google</h6>
                                                <span>OCT 2015 - OCT 2016</span>
                                            </div>
                                        </div>
                                        <div className={'resume_exp_text'}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            </p>
                                        </div>
                                    </div>
                                    <div className={'resume_exp_box'}>
                                        <div className={'resume_exp_title'}>
                                            <div className={'resume_exp_icon'}>
                                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                            </div>
                                            <div className={'resume_exp_name'}>
                                                <h6>Google</h6>
                                                <span>OCT 2015 - OCT 2016</span>
                                            </div>
                                        </div>
                                        <div className={'resume_exp_text'}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'resume_skills_title'}>
                            <h5>MY SKILLS</h5>
                            <div className={'resume_skills_hr'}></div>
                        </div>
                        <div className={'resume_skills'}>
                            <div className={'row'}>
                                <div className={'col-md-6 resume_des_skills'}>
                                    <span className={'resume_des_skills_span'}>Design Skills</span>
                                    <div className={'resume_progress'}>
                                        <div className={'resume_des_skills_name'}>
                                            <span>COREL DRAW</span>
                                            <div>92%</div>
                                        </div>
                                        <div className={'resume_progress_bar_1'}>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className={'resume_progress'}>
                                        <div className={'resume_des_skills_name'}>
                                            <span>PHOTOSHOP</span>
                                            <div>84%</div>
                                        </div>
                                        <div className={'resume_progress_bar_2'}>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className={'resume_progress'}>
                                        <div className={'resume_des_skills_name'}>
                                            <span>ILLUSTRATOR</span>
                                            <div>88%</div>
                                        </div>
                                        <div className={'resume_progress_bar_3'}>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-6 resume_des_skills'}>
                                    <span className={'resume_des_skills_span'}>Coding Skills</span>
                                    <div className={'resume_progress'}>
                                        <div className={'resume_des_skills_name'}>
                                            <span>COREL DRAW</span>
                                            <div>92%</div>
                                        </div>
                                        <div className={'resume_progress_bar_1'}>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className={'resume_progress'}>
                                        <div className={'resume_des_skills_name'}>
                                            <span>PHOTOSHOP</span>
                                            <div>84%</div>
                                        </div>
                                        <div className={'resume_progress_bar_2'}>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className={'resume_progress'}>
                                        <div className={'resume_des_skills_name'}>
                                            <span>ILLUSTRATOR</span>
                                            <div>88%</div>
                                        </div>
                                        <div className={'resume_progress_bar_3'}>
                                            <div></div>
                                        </div>
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

export default Resume;