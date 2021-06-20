import React from 'react';

const Contact = () => {
    return (
            <section className="contact my-5 py-5">
                <div className="container">
                    <div>
                        <h1 className="text-secondary text-center mb-5">Contact Us</h1>
                        <h5 className=" text-center mb-5">For any enquiries or information, drop a mail to kidscharity@gmail.com or fill the form below</h5>
                    </div>
                    <div className="col-md-9 mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address" />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <textarea name="" className="form-control" cols="30" rows="10" placeholder="Your Message*"></textarea>
                            </div>
                            <br></br>
                            <div className="form-group text-center">
                                <button type="button" className="btn btn-secondary"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


    );
};

export default Contact;