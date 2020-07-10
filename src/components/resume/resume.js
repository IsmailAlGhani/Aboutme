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
                                    <p className="info">College Student in Computer Science <span>•</span> <em className="date">Agustus 2016 - Present</em></p>
                                    <p>
                                    I'm last year college student from University of Indonesia. 
                                    My major is Information System. 
                                    I am a responsible person and have good leadership during group work. I am good at socializing with other friends.
                                    I am interested in becoming a Software Engineer, Data Scientist, and Data Analyst. 
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
                                    <h3>Project Try Out Online Mabit NF</h3>
                                    <p className="info">Front End Engineer<span>•</span> <em className="date">February 2020 - Juni 2020</em></p>
                                    <p>
                                    I handle a front-end website for student in Try Out Mabit NF. 
                                    In that project, I maintain front-end website and developed features. 
                                    I learn user preferences about website design and how to encourage user use a website.
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Skydu Intern</h3>
                                    <p className="info">Front End Engineer<span>•</span> <em className="date">Juni 2019 - Agustus 2019</em></p>
                                    <p>
                                    I handle a front-end for student in Skydu Learning Management System. 
                                    In that intern, I maintain front-end website for student and developed new features. 
                                    I learn a culture in startup and agile atmosphere in that startup.
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Project Intern</h3>
                                    <p className="info">Project Manager <span>•</span> <em className="date">February 2019 - May 2019</em></p>
                                    <p>
                                    The project that I handle is an accounting information system. 
                                    In that project, I also became a software development engineer. 
                                    I can share my time as a project manager and software development engineer well.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>This is a skill that I gained during my studies.</p>
                            <div className="bars">
                                <div className="six columns main-col">
                                    <ul className="skills">
                                        <li><span className="bar-expand python" /><em>Python</em></li>
                                        <li><span className="bar-expand java" /><em>Java</em></li>
                                        <li><span className="bar-expand php" /><em>PHP</em></li>
                                        <li><span className="bar-expand css" /><em>CSS</em></li>
                                        <li><span className="bar-expand html5" /><em>HTML5</em></li>
                                        <li><span className="bar-expand reactjs" /><em>ReactJS</em></li>
                                        <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                                        <li><span className="bar-expand bootstrap" /><em>Bootstrap</em></li>
                                    </ul>
                                </div>
                                <div className="six columns main-col">
                                    <ul className="skills">
                                        <li><span className="bar-expand sql" /><em>SQL</em></li>
                                        <li><span className="bar-expand mongodb" /><em>MongoDB</em></li>
                                        <li><span className="bar-expand anaconda" /><em>Anaconda</em></li>
                                        <li><span className="bar-expand pandas" /><em>Pandas</em></li>
                                        <li><span className="bar-expand matplotlib" /><em>Matplotlib</em></li>
                                        <li><span className="bar-expand sklearn" /><em>Scikit Learn</em></li>
                                        <li><span className="bar-expand numpy" /><em>NumPy</em></li>
                                        <li><span className="bar-expand scipy" /><em>SciPy</em></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}