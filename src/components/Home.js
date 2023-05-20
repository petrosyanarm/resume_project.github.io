import React from 'react';
import Header from "./Header";
import Web from "./Web";

function Home(props) {
    return (
        <div className={'container-fluid home_part'}>
            <div className={'row'}>
                <div className={'col-xl-4 col-lg-4 home_img'}>
                    <img className={'img-fluid'} src='img/home.png'/>
                </div>
                <div className={'col-xl-8 col-lg-8 home_menu'}>
                    <Header/>
                    <div className={'home_menu_text'}>
                        <span className={'menu_text_span1 fw-bold'}>HELLO, THERE</span>
                        <h1>I'M ALEXIS LARTEN</h1>
                        <Web/>
                        <button>DOWNLOAD CV</button>
                    </div>
                    <div className={'home_icons'}>
                        <ul className={'social_icons'}>
                            <li><a href={'https://www.facebook.com/'}>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a></li>
                            <li><a href={'https://www.facebook.com/'}>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a></li>
                            <li><a href={'https://www.facebook.com/'}>
                                <i className="fa fa-google-plus" aria-hidden="true"></i>
                            </a></li>
                            <li><a href={'https://www.facebook.com/'}>
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;