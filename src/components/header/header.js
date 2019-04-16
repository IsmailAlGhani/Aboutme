import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Activity</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I'm Ismail Al Ghani.</h1>
                            <h3>I'm a Jakarta based <span>College Student</span>, who is interested in <span>software development</span> and <span>user experience research</span>
                                . Let's <a className="smoothscroll" href="#about">start scrolling </a>
                                and know more <a className="smoothscroll" href="#about">about me</a>.</h3>
                            <hr />
                            <ul className="social">                                
                                <li><a href="https://twitter.com/mailcool"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.linkedin.com/in/IsmailAlGhani/"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://www.instagram.com/d_mail6/"><i className="fa fa-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}