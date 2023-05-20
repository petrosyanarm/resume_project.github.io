import React from 'react';
import Carousel from "nuka-carousel";

function Karusel(props) {
    return (
        <Carousel wrapAround={true}
                  slidesToScroll={2}
                  slidesToShow={2}
                  autoplay={true}
                  autoplayInterval={2000}
                  defaultControlsConfig={{
                      containerClassName:'containerClassName',
                      nextButtonClassName: 'next_btn',
                      prevButtonClassName: 'prev_btn',
                      pagingDotsClassName: 'paging_dots',
                      pagingDotsStyle: {
                          fill: '#767676',
                      }
                  }}
        >
            <div className={'portfolio_footer_box1'}>
                <div className={'portfolio_footer_box_text'}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.</p>
                </div>
                <div className={'portfolio_footer_box_img'}>
                    <img src={'img/portfolio_avatar.jpg'}/>
                    <div className={'portfolio_footer_box_img_title'}>
                        <h6>Salma Hayek</h6>
                        <span>CEO</span>
                    </div>
                </div>
            </div>
            <div className={'portfolio_footer_box2'}>
                <div className={'portfolio_footer_box_text'}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.</p>
                </div>
                <div className={'portfolio_footer_box_img'}>
                    <img src={'img/portfolio_avatar.jpg'}/>
                    <div className={'portfolio_footer_box_img_title'}>
                        <h6>Salma Hayek</h6>
                        <span>CEO</span>
                    </div>
                </div>
            </div>
            <div className={'portfolio_footer_box3'}>
                <div className={'portfolio_footer_box_text'}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.</p>
                </div>
                <div className={'portfolio_footer_box_img'}>
                    <img src={'img/portfolio_avatar.jpg'}/>
                    <div className={'portfolio_footer_box_img_title'}>
                        <h6>Salma Hayek</h6>
                        <span>CEO</span>
                    </div>
                </div>
            </div>
            <div className={'portfolio_footer_box4'}>
                <div className={'portfolio_footer_box_text'}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.</p>
                </div>
                <div className={'portfolio_footer_box_img'}>
                    <img src={'img/portfolio_avatar.jpg'}/>
                    <div className={'portfolio_footer_box_img_title'}>
                        <h6>Salma Hayek</h6>
                        <span>CEO</span>
                    </div>
                </div>
            </div>
            <div className={'portfolio_footer_box5'}>
                <div className={'portfolio_footer_box_text'}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.</p>
                </div>
                <div className={'portfolio_footer_box_img'}>
                    <img src={'img/portfolio_avatar.jpg'}/>
                    <div className={'portfolio_footer_box_img_title'}>
                        <h6>Salma Hayek</h6>
                        <span>CEO</span>
                    </div>
                </div>
            </div>
            <div className={'portfolio_footer_box6'}>
                <div className={'portfolio_footer_box_text'}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.</p>
                </div>
                <div className={'portfolio_footer_box_img'}>
                    <img src={'img/portfolio_avatar.jpg'}/>
                    <div className={'portfolio_footer_box_img_title'}>
                        <h6>Salma Hayek</h6>
                        <span>CEO</span>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}

export default Karusel;