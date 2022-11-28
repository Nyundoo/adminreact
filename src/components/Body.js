import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Acounting from '../Pages/Acounting';
import Analytics from '../Pages/Analytics';
import Dashboard from '../Pages/Dashboard';
import Report from '../Pages/Reports';
import Settings from '../Pages/Settings';
import Users from '../Pages/Users';


function Body() {
    return (
        <div>

            <div className="container-center-horizontal">
                <div className="dashboard screen" data-id="8466debd-6727-48b7-941d-f30160de92bb">

                    {/* <Dashboard /> */}

                    <Navbar />

                    <Router>
                        <div className='Body'>
                            <Sidebar />
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/acounting" element={<Acounting />} />
                                    <Route path="/analytics" element={<Analytics />} />
                                    <Route path="/reports" element={<Report />} />
                                    <Route path="/settings" element={<Settings />} />
                                    <Route path="/users" element={<Users />} />
                                </Routes>
                        </div>
                    </Router>



                </div>
            </div>
            <script src="launchpad-js/launchpad-banner.js" async=""></script>
            <script defer="" src="https://animaapp.s3.amazonaws.com/static/restart-btn.min.js"></script>
            <div id="anima-interface" data-turbo-permanent="true" className="idle">

                <div id="anima-comment-popover" className="popover top" role="tooltip" style={{ "left": "-205px", "top": "-220px" }}>
                    <div className="arrow" style={{ "margin-left": "128px" }}></div>
                    <div className="popover-content" style={{ "align-items": "center" }}>
                        <div style={{ "display": "flex", "flex-direction": "column", "height": "100%", "padding": "20px" }}>
                            <h3
                                style={{ "font-size": "18px", "margin-bottom": "10px", "font-weight": "500", "line-height": "26px", "font-family": "Roslindale" }}>
                                Leave feedback and collaborate
                            </h3>
                            <p style={{ "font-size": "12px", "margin-bottom": "20px", "font-weight": "400", "line-height": "20px" }}>
                                Login to your account to leave comments. Don't have an account? Sign up for free!
                            </p>
                            <a href="art" target="_blank" rel="noopener noreferrer" className="btn">Add comment</a>
                        </div>

                        <div style={{ "display": "flex", "align-items": "center", "justify-content": "center", "padding-right": "20px" }}>
                            <img src="https://animaapp.s3.amazonaws.com/static/comment-illustration.svg" alt="art" />
                        </div>
                    </div>
                </div>
                <div id="anima-code-popover" className="popover top" role="tooltip" style={{ "left": "-205px", "top": "-220px" }}>
                    <div className="arrow" style={{ "margin-left": "168px" }}></div>
                    <div className="popover-content" style={{ "align-items": "center" }}>
                        <div style={{ "display": "flex", "flex-direction": "column", "height": "100%", "padding": "20px;" }}>
                            <h3
                                style={{ "font-size": "18px", "margin-bottom": "10px", "font-weight": "500", "line-height": "26px", "font-family": "Roslindale" }}>
                                Get clean code you’ll love with Anima
                            </h3>
                            <p style={{ "font-size": "12px", "margin-bottom": "20px", "font-weight": "400", "line-height": "20px" }}>
                                Login and easily export HTML, React or Vue of this prototype.
                                Don’t have an account? Sign up for free!
                            </p>
                            <a href="art" target="_blank" rel="noopener noreferrer" className="btn">
                                Get code
                            </a>
                        </div>

                        <img src="https://animaapp.s3.amazonaws.com/static/code-illustration.svg" alt="art" />
                    </div>
                </div>
                <div className="omniview-anima-action-links" id="actions-wrap">
                    <div className="omniview-anima-action-links">
                        <div id="page-nav" className="link navigation" style={{ "display": "none" }}>
                            <svg id="homepage-icon" className="home-icon" width="24" height="24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.151 11a.25.25 0 01-.167-.436l4.349-3.913a.25.25 0 01.334 0l4.349 3.913a.25.25 0 01-.167.436H8.15zM16 12H9v4a1 1 0 001 1h5a1 1 0 001-1v-4z"
                                    fill="artfff"></path>
                            </svg>

                            <svg className="icon" id="arrow-left" width="24" height="24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18l-6-6 6-6" stroke="artfff" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>

                            <span id="page-num"></span>

                            <svg className="icon" id="arrow-right" width="24" height="24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>

                        <a className="link" id="comment-link" href="art" target="_blank" style={{ "display": "none" }}>
                            <span className="text">Comment</span>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.301 15.137a.551.551 0 01.199-.55c.314-.23.554-.554.718-.965A6.015 6.015 0 014 10 6.006 6.006 0   0110.001 4 6.006 6.006 0 0116 10.001 6.006 6.006 0 019.999 16a5.98 5.98 0 01-3.095-.86 3.165 3.165 0 01-1.65.438 3.6  3.6 0 01-.57-.044c-.191-.03-.34-.186-.383-.397z"
                                    fill="artfff"></path>
                            </svg>
                        </a>

                        <a className="link" id="code-link" href="art" target="_blank" style={{ "display": "none" }}>
                            <span className="text">Get Code</span>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 15.667a1 1 0 01-.707-1.708l3.626-3.625-3.626-3.626a1 1 0 111.415-1.415l4.333 4.333a1 1 0 010 1.414l-4.333 4.333a.993.993 0 01-.707.294zM7.333 5a1 1 0 01.707 1.708l-3.626 3.625 3.627 3.626a1 1 0 11-1.415 1.415L2.293 11.04a1 1 0 010-1.415l4.333-4.333A.992.992 0 017.333 5z"
                                    fill="artfff"></path>
                            </svg>
                        </a>

                        <div className="restart" id="restart-btn" style={{ "display": "none" }}>
                            <svg style={{ "margin-right": "6px" }} fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 11.817A5.017 5.017 0 01.994 6.811c0-.207.169-.375.375-.375s.375.168.375.375A4.265 4.265 0 006 11.067a4.265 4.265 0 004.256-4.256A4.265 4.265 0 006 2.555a.376.376 0 01-.375-.376c0-.206.169-.374.375-.374a5.017 5.017 0 015.006 5.006A5.017 5.017 0 016 11.817z"
                                    fill="artfff"></path>
                                <path
                                    d="M6.75 4.237a.37.37 0 01-.263-.112l-1.65-1.65a.363.363 0 010-.525L6.487.3c.15-.15.375-.15.525 0 .15.15.15.375 0 .525L5.625 2.212 7.012 3.6c.15.15.15.375 0 .525-.056.075-.15.112-.262.112z"
                                    fill="artfff"></path>
                            </svg>
                            Restart
                        </div>
                    </div>
                </div>
            </div>
            <div id="anima-watermark" style={{ "display": "none" }} className="idle"><a id="anima-watermark-link" href="art" target="_blank" style={{ "right": "20px", "left": "auto", "padding": "6px" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" id="anima-logo-icon" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.09293 3.00001H16.5327C16.5484 2.99976 16.5638 3.00351 16.5776 3.01092C16.5913 3.01832 16.603 3.02913 16.6114 3.04231C16.6198 3.0555 16.6247 3.07061 16.6256 3.08622C16.6265 3.10182 16.6233 3.1174 16.6165 3.13146C15.5441 5.29706 13.9276 7.14699 11.9253 8.50009C8.69117 10.6822 5.43436 10.9075 4.09389 10.9196C4.08165 10.9198 4.06949 10.9176 4.05811 10.9131C4.04672 10.9086 4.03636 10.9019 4.02761 10.8933C4.01887 10.8848 4.01192 10.8745 4.00718 10.8633C4.00244 10.852 4 10.8399 4 10.8276V3.09198C4 3.07982 4.00241 3.06778 4.00709 3.05656C4.01177 3.04534 4.01863 3.03516 4.02728 3.02661C4.03592 3.01805 4.04617 3.0113 4.05744 3.00673C4.06871 3.00217 4.08077 2.99988 4.09293 3.00001Z"
                        fill="artFF6250"></path>
                    <path
                        d="M6.77772 17.4446C8.31182 17.4446 9.55545 16.201 9.55545 14.6669C9.55545 13.1328 8.31182 11.8892 6.77772 11.8892C5.24363 11.8892 4 13.1328 4 14.6669C4 16.201 5.24363 17.4446 6.77772 17.4446Z"
                        fill="artFFDF90"></path>
                    <path
                        d="M12.4559 17.2799C11.6701 16.9799 11.2522 16.1151 11.5185 15.3496L13.6153 9.3656C13.884 8.60003 14.7387 8.22302 15.5245 8.52299C16.3103 8.82344 16.7282 9.68772 16.4619 10.4538L14.365 16.4377C14.0964 17.2033 13.2417 17.5808 12.4559 17.2799Z"
                        fill="art3366FF"></path>
                </svg>
                <span className="text" style={{ "display": "none" }}>Made with Anima</span>
            </a>
            </div>
            <div data-turbo-permanent="true" id="override-box-hover" className="box-highlight hover"
                style={{ "width": "0px", "height": "0px", "display": "none", "transform": "translate3d(0px, 0px, 0px)", "--width": "470px", "border-radius": "20px" }}>
                <div className="box-wrapper">
                    <div className="tag-box" style={{ "--tag-box-width": "auto", "--tag-box-left": "15px", "--tag-box-top": "-20px" }}>
                        <div className="tag-name">div</div>
                        <div className="tag-component-name" style={{ "visibility": "hidden" }}></div>
                    </div>
                </div>
            </div>
            {/* <div data-turbo-permanent="true" id="override-box-fixed" className="box-highlight fixed is_root_screen is_component"
                style={{ "width": "var(--width)", "height": "1080px", "display": "block", "transform": "translate3d(0px, 0px, 0px)", "--width": "1890px" }}>
                <div className="box-wrapper">
                    <div className="tag-box" style={{ "--tag-box-width": "auto", "--tag-box-left": "0px", "--tag-box-top": "-20px" }}>
                        <div className="tag-name">div</div>
                        <div className="tag-component-name" style={{ "visibility": "hidden" }}></div>
                    </div>
                </div>
            </div> */}
            <div id="hotspots_wrapper"></div>
            <div id="t_preload_links">
                <link href="/dashboard" rel="prefetch" />
            </div>
        </div>
    )
}

export default Body;