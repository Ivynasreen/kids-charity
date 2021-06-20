import React from 'react';
import './HeaderMain.css';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2016/11/04145139/Diverse-group-of-children.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h1 className ="mb-3">They are the Future</h1>
                        <h5>Sponsor a child whose interests, and circumstances resonate and give him/her a chance at escaping poverty by getting a quality education.</h5>
                        <Link to ="/contact" class="btn btn-secondary mt-5">Contact Now</Link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://cms-tc.pbskids.org/parents/benefits-of-teaching-children-to-see-race.jpg?mtime=20201007085242" class="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h1 className ="mb-3">Helping and Caring</h1>
                        <h5>Nothing more is in the society without children love and care.</h5>
                        <Link to ="/contact" class="btn btn-secondary mt-5">Contact Now</Link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.cdnparenting.com/articles/2018/07/140863168-H.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h1 className ="mb-3">Give a child a start</h1>
                        <h5>We worry what the child will be tomorrow rather we forget about today!</h5>
                        <Link to ="/contact" class="btn btn-secondary mt-5">Contact Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;