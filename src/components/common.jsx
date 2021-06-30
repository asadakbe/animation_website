import React from 'react';
import stuff from '../images/stuff.png'
import '../css/animated.css';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return(
        <>
            <section id="header" className="font d-flex align-items-center">
                <div className="container-fluid py-5 nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                    {props.name}
                                    <strong className="brand-name">Asad Akbar</strong> 
                                </h1>

                                <span className="my-3 navbar-text">
                                    we are the team of talented developer making websites
                                </span>
                                <div>
                                    <NavLink to={props.visit} href="" className="btn-get-started">{props.btnname}</NavLink>
                                </div>
                          
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img ">
                                <img  src={props.imgsrc} className="img-fluid animated" alt="Common img" />
                            </div>
                            </div>
                </div>
                    </div>
                        </div>
            </section>
        </>
    )
}

export default Common;