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
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                        massa.
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                        felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede
                                        mollis pretium.
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
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                        massa.
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                        felis,
                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede
                                        mollis pretium.
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