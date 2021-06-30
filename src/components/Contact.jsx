import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const InputEvent = (event) => {
        const {name, value} = event.target
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname}`);
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput" className="form-label">
                                    Full Name
                                </label>
                                <input 
                                    type="text"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput" className="form-label">
                                    Email Address
                                </label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput" className="form-label">
                                    Phone
                                </label>
                                <input 
                                    type="number"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Mobile Number"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput" className="form-label">
                                    Message
                                </label>
                               <textarea
                                className="form-control"
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                id="exampleFormControlTextarea1"
                                rows="3"
                               >
                               </textarea>
                            </div>
                            <button className="btn btn-outline-primary" type="submit">Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;