import React, { Component } from 'react';
export default class Portfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Works.</h1>
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt src="images/portfolio/code.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Coding</h5>
                                                    <p>Study</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt src="images/portfolio/console.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Console</h5>
                                                    <p>Web Development</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt src="images/portfolio/youtube.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Youtube</h5>
                                                    <p>Content</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-04" title>
                                            <img alt src="images/portfolio/cafe.png" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Cafe</h5>
                                                    <p>Hangout</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-code.png" alt />
                            <div className="description-box">
                                <h4>Algorithm</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                            </div>
                            <div className="link-box">
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
                            <div className="description-box">
                                <h4>Console</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                            </div>
                            <div className="link-box">
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-youtube.png" alt />
                            <div className="description-box">
                                <h4>Youtube</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                <span className="categories"><i className="fa fa-tag" />Branding</span>
                            </div>
                            <div className="link-box">
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>
                        <div id="modal-04" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-cafe.png" alt />
                            <div className="description-box">
                                <h4>Cafe</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                <span className="categories"><i className="fa fa-tag" />Hangout, Friendship</span>
                            </div>
                            <div className="link-box">
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}