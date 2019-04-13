import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="resume">
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>University of Indonesia</h3>
                                    <p className="info">College Student in Information System <span>•</span> <em className="date">Agustus 2016 - Present</em></p>
                                    <p>
                                    I'm third year college student from University of Indonesia. 
                                    My major is Information System. I have passed the SBMPTN test in 2016. 
                                    I am a responsible person and have good leadership during group work. I am good at socializing with other friends.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Project Intern</h3>
                                    <p className="info">Project Manager <span>•</span> <em className="date">February 2019 - Present</em></p>
                                    <p>
                                    The project that I handle is an accounting information system. 
                                    In that project, I also became a software development engineer. 
                                    I can share my time as a project manager and software development engineer well.
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