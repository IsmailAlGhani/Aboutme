import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li><a href="https://twitter.com/mailcool"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.linkedin.com/in/IsmailAlGhani/"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://www.instagram.com/d_mail6/"><i className="fa fa-instagram" /></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>© Copyright 2019</li>
                                <li>Design by Ismail Al Ghani</li>
                            </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}