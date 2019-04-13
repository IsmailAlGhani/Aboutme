import React, { Component } from 'react';
export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/Coba.png" alt />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>My name is Ismail Al Ghani. I am college student from Faculty Computer Science, University of Indonesia. 
                                My major is Information System. I'm interest to Software Development and User Experience Research. 
                                I have learnt 2 framework front-end developer. Those are Bootstrap and ReactJS. 
                                I have learnt 3 framework back-end developer. Those are Django, Spring Boot and CodeIgniter. 
                                I have learned web developing in college and i'm interested with those.
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Ismail Al Ghani</span><br />
                                        <span>Komp. PLN Durentiga Pancoran<br />
                                            Jakarta Selatan, DKI Jakarta 12760 IDN
                                        </span><br />
                                        <span>089649720428</span><br />
                                        <span>ismailalghani@gmail.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="file/Portfolio.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}