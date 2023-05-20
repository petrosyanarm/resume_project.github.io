import React, {useState} from 'react';
import Header from "./Header";
import Carousel from "nuka-carousel";
import Karusel from "./Karusel";

function Portfolio(props) {
    const [todo,setTodo]=useState([
        {
            id: 1,
            img: "./img/portfolio_1.jpg",
            name: "Portfolio Template",
            title: "Classic Work",
            status: true
        },
        {
            id: 2,
            img: "./img/portfolio_2.jpg",
            name: "Portfolio Template",
            title: "Invaluable Work",
            status: false,
            status1:true
        },
        {
            id: 3,
            img: "img/portfolio_3.jpg",
            name: "Portfolio Template",
            title: "Critical Work",
            status: true,
            status1:true
        },
        {
            id: 4,
            img: "img/portfolio_4.jpg",
            name: "Portfolio Template",
            title: "Perfect Work",
            status: false
        },
        {
            id: 5,
            img: "img/portfolio_5.jpg",
            name: "Portfolio Template",
            title: "Invaluable Work",
            status: true,
            status1:true
        },
        {
            id: 6,
            img: "img/portfolio_6.jpg",
            name: "Portfolio Template",
            title: "Beautiful Work",
            status: false
        }
    ])
    const [filtered,setFiltered]=useState(todo)
    function todoFilter(status) {
        if (status==="all"){
            setFiltered(todo)
            console.log(filtered)
        }else{
            let newTodo=[...todo].filter(item=> item.status === status)
            setFiltered(newTodo)
            console.log(filtered)
        }
    }

    function todoFilter1(status1) {
        if (status1==="all"){
            setFiltered(todo)
            console.log(filtered)
        }else{
            let newTodo=[...todo].filter(item=> item.status1 === status1)
            setFiltered(newTodo)
            console.log(filtered)
        }
    }

    return (
        <div className={'container-fluid portfolio_part'}>
            <div className={'row'}>
                <div className={'col-xl-4 col-lg-4 portfolio_img'}>
                    <div className={'portfolio_fixed'}>
                        <div className={'my_projects'}>
                            <h2 className={'text-white'}>MY PROJECTS</h2>
                        </div>
                    </div>
                </div>
                <div className={'col-xl-8 col-lg-8 portfolio_block'}>
                    <Header/>
                    <div className={'portfolio_title'}>
                        <div className={'page_title'}>
                            <div className={'portfolio_title_box'}>
                                <span>LATEST WORK</span>
                            </div>
                            <h2>MY PROJECTS</h2>
                            <div className={'page_hr'}></div>
                        </div>
                    </div>
                    <div className={'projects_ul'}>
                        <button onClick={()=>todoFilter('all')}>ALL</button>
                        <button onClick={()=>todoFilter(true)}>PHOTOSHOP</button>
                        <button onClick={()=>todoFilter(false)}>WEBSITE</button>
                        <button onClick={()=>todoFilter1(true)}>APPS</button>
                    </div>
                    <div className={'projects'}>
                        {filtered.map((item) => (
                            <div className={'project'} key={item.id}>
                                <img className={'project_img'} src={item.img}/>
                                <span className={'fw-bold'}>{item.name}</span>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className={'portfolio_footer_title'}>
                        <h5>WHAT PEOPLE SAY?</h5>
                        <div className={'resume_skills_hr'}></div>
                    </div>
                    <div className={'portfolio_footer'}>
                        <div className={'row'}>
                           <Karusel/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;