import React from 'react';

import image from '../../images/image.jpg';
import './About.css';

const About = () => {
    return (
        <div className = "about">
            <section className="my-5 pt-5 mt-5">
            <h2 className="text-secondary text-uppercase text-center mb-5" style={{ fontWeight: "bold" }}>about us</h2>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-5 w-50">
                            <img className = "img-fluid" src={image} alt=""/>
                        </div>
                        <div className="col-md-6 align-self-center about">
                            <p className="text-secondary">It is a non-governmental organization for welfare in the education field. It plays an important role in supporting the most vulnerable children to access their right to education through innovative ideas such as forming student groups and child-tracking systems, holding awareness workshops with parents to ensure that they send children to school. It also provides placement & apprenticeship opportunities to ITI, BTech, and diploma students for their bright future.
                            </p>
                            <button className="btn btn-secondary text-white">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;