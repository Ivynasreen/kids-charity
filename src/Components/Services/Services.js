import React from 'react';

const Services = () => {
    return (
        <div className = "services">
            <h1 className="text-secondary text-uppercase text-center mb-5" style={{ fontWeight: "bold" }} >Our Services</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://frontiersinblog.files.wordpress.com/2020/04/frontiers-psychology-childrens-preference-causal-information-storybooks.jpg" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title text-center">SUPPORT</h5>
                            <p class="card-text">Supports the vulnerable children to access their right to education .</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://i0.wp.com/www.additudemag.com/wp-content/uploads/2016/11/School_ADHD-LD_Elementary-School-Basics_Article-896_Teacher-and-children-in-Classroom-1.jpg?resize=1280%2C720px&ssl=1" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title text-center">WORKSHOP</h5>
                            <p class="card-text">Holding awareness workshops with parents for sending their children to school.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh3.googleusercontent.com/UDETQYrX9qeqehQq0a8k3TW5acly4IiGA01wC2Db9FfSY5nVN3c_VBrPPDlEqPTIpIiIRyqiEFTeeWpqOd2OvYcOeoVtI_gyy_UuVZKUCTsIzbVKx9bDkNU2q7XuooTs-llvcwAV" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title text-center">PLACEMENT</h5>
                            <p class="card-text">Providing placement and apprenticeship opportunities to ITI, BTech, and diploma students for their bright future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;