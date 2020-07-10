import React, { Component } from 'react';
export default class Activity extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="activity">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Activity.</h1>
                            <div id="activity-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div className="columns activity-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt src="images/activity/code.jpg" />
                                            <div className="overlay">
                                                <div className="activity-item-meta">
                                                    <h5>Coding</h5>
                                                    <p>Study</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="columns activity-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt src="images/activity/console.jpg" />
                                            <div className="overlay">
                                                <div className="activity-item-meta">
                                                    <h5>Console</h5>
                                                    <p>Web Development</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="columns activity-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt src="images/activity/youtube.jpg" />
                                            <div className="overlay">
                                                <div className="activity-item-meta">
                                                    <h5>Youtube</h5>
                                                    <p>Content</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="columns activity-item">
                                    <div className="item-wrap">
                                        <a href="#modal-04" title>
                                            <img alt src="images/activity/cafe.jpg" />
                                            <div className="overlay">
                                                <div className="activity-item-meta">
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
                            <img className="scale-with-grid" src="images/activity/modals/m-code.jpg" alt />
                            <div className="description-box">
                                <h4>Algorithm</h4>
                                <p>I spend time on campus for coding. I like coding because it is exciting and makes me interested.</p>
                                <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                            </div>
                            <div className="link-box">
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/activity/modals/m-console.jpg" alt />
                            <div className="description-box">
                                <h4>Console</h4>
                                <p>I let go of studying on campus by playing games with friends. It made me happy and made me excited again to continue studying.</p>
                                <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                            </div>
                            <div className="link-box">
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/activity/modals/m-youtube.jpg" alt />
                            <div className="description-box">
                                <h4>Youtube</h4>
                                <p>Watching YouTube is also an entertainment while studying. Besides that, YouTube is also useful as a source of my learning.</p>
                                <span className="categories"><i className="fa fa-tag" />Branding</span>
                            </div>
                            <div className="link-box">
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>
                        <div id="modal-04" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/activity/modals/m-cafe.jpg" alt />
                            <div className="description-box">
                                <h4>Cafe</h4>
                                <p>Cafe is the best place for me to unwind and meet friends. Besides that, Cafe is a good place for me to work productively.</p>
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