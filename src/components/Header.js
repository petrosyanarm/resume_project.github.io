import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <div className={'header'}>
            {show ?
                <div className={"menu"} style={{pointerEvents:"all"}}>
                    <Link className={'menu_link'} to={'/'}>HOME</Link>
                    <Link className={'menu_link'} to={'/about'}>ABOUT US</Link>
                    <Link className={'menu_link'} to={'/resume'}>RESUME</Link>
                    <Link className={'menu_link'} to={'/portfolio'}>PORTFOLIO</Link>
                    <Link className={'menu_link'} to={'/contact'}>CONTACT ME</Link>
                </div> :
                <div className={"menu"} style={{opacity: 0, transition: "1s", transform: "translateX(17%)",pointerEvents:"none"}}>
                    <Link className={'menu_link'} to={'/'}>HOME</Link>
                    <Link className={'menu_link'} to={'/about'}>ABOUT US</Link>
                    <Link className={'menu_link'} to={'/resume'}>RESUME</Link>
                    <Link className={'menu_link'} to={'/portfolio'}>PORTFOLIO</Link>
                    <Link className={'menu_link'} to={'/contact'}>CONTACT ME</Link>
                </div>
            }
            <div className={'header_logo'}>
                <span className={'fs-5 fw-bold text-white'}>ALEXIO</span>
            </div>
            <div className={'menu_toggle'}>
                {show ? <i onClick={handleShow} style={{transform: ' rotate(180deg)', transition: '500ms'}}
                           className="fa fa-times" aria-hidden="true"></i>
                    : <i onClick={handleShow} style={{transform: ' scale(1,-1)', transition: '500ms'}}
                         className="fa fa-bars" aria-hidden="true"></i>}
            </div>
        </div>
    );
}

export default Header;