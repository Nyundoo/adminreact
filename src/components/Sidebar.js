import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <div className="left-menu-aYWuA2" style={{ width: isOpen ? "168px" : "50px" }} data-id="8bec0ff9-d6cc-4d08-b722-fd54a346aa6c">
                <div className="rectangle-63-x1tD94" data-id="3737c7fb-e0ec-46f7-988d-88f0be28de0e"></div>
                {/* <div className="active-x1tD94" data-id="eee312db-788a-4097-8a1c-2b69cb78110f">
                    <div className="rectangle-59-NR0KoT" data-id="e72bffc9-44f3-490b-a6ba-a1f33db3bac0"></div>
                    <div className="rectangle-60-NR0KoT" data-id="d2e4a5b6-ed90-4960-9b3b-5a8285c98d3f"></div>
                </div> */}
                <div className="menu-text-x1tD94" style={{ display: isOpen ? "block" : "none" }} data-id="289de3dd-e0a1-4936-98fa-b0e672efb7ba">
                    <div className="dashboard-lgbkOw" data-id="016edba1-a03d-41b6-a1cd-4332727643e5"><NavLink to='dashboard' activeClassName="active">Dashboard</NavLink></div>
                    <div className="reports-lgbkOw ubuntu-normal-astronaut-blue-11px"
                        data-id="e1cf143d-0caa-4136-9c54-eb0498cca656"><NavLink to='reports' activeClassName="active">Reports</NavLink></div>
                    <div className="analytics-lgbkOw ubuntu-normal-astronaut-blue-11px"
                        data-id="e43e9a4b-408d-4ae4-9697-33732933c2fb"><NavLink to='analytics' activeClassName="active">Analytics</NavLink></div>
                    <div className="users-lgbkOw ubuntu-normal-astronaut-blue-11px"
                        data-id="1aa4f3f1-703c-4e9e-9fda-2e0a2f269d4d"><NavLink to='users' activeClassName="active">Users</NavLink></div>
                    <div className="accounting-lgbkOw ubuntu-normal-astronaut-blue-11px"
                        data-id="9b871d64-0974-4794-b03e-b7647cd0be32"><NavLink to='acounting' activeClassName="active">Accounting</NavLink></div>
                    <div className="settings-lgbkOw ubuntu-normal-astronaut-blue-11px"
                        data-id="cffd97f5-2bde-4573-a469-2c38be43af4c"><NavLink to='settings' activeClassName="active">Settings</NavLink></div>
                </div>
                <div className="menu-icons-x1tD94" data-id="4210dd0d-4489-4fca-89e1-b51042c8de07">
                    <a href="dashboard"><div className="dash-dxEaLj" data-id="4f5f179b-710d-40f4-ba22-d1ef523e9de9"><img className="path-181-twmzaS"
                        data-id="f6aa1a50-7299-4130-bdc0-365fbdbe242f"
                        src="./path-181@1x.png"
                        anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-181@1x.png"
                        alt="Path 181" /></div></a>
                    <a href="users"><div className="user-dxEaLj" data-id="9610da0a-8a67-4070-8b91-7bd14e678553"><img className="path-179-Ehns8b"
                        data-id="0781f87d-1919-4149-a902-d0f380bf102f"
                        src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-179-1@1x.png"
                        anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-179-1@1x.png"
                        alt="Path 179" /><img className="path-180-Ehns8b" data-id="69927efc-a764-4d0c-8a33-783f07443778"
                            src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-180-1@1x.png"
                            anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-180-1@1x.png"
                            alt="Path 180" /></div></a><a href="acounting"><img className="accounts-dxEaLj"
                                data-id="e39d7604-bb84-425a-910d-1ff061cfa2fc"
                                src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/accounts@1x.png"
                                anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/accounts@1x.png"
                                alt="Accounts" /></a>
                    <a href="settings"><div className="setting-dxEaLj" data-id="9363deae-58d3-4a51-adeb-410bcd6a46cd"><img
                        className="path-212-Z5WHPf" data-id="8d4372a3-df3c-4c63-b3f8-68d5dbd18d1f"
                        src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-212@1x.png"
                        anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-212@1x.png"
                        alt="Path 212" /><img className="path-213-Z5WHPf" data-id="eddbc996-8452-4ad3-a062-f97c31b3042d"
                            src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-213@1x.png"
                            anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-213@1x.png"
                            alt="Path 213" /></div></a>
                    <a href="reports"><div className="bar-chart-dxEaLj" data-id="ad5ca691-b2a2-4cca-af34-e505394a9310"><img
                        className="icon-bar_chart-eFMoxj" data-id="d4be2233-4a7f-4255-af7b-ceeb734e5f3c"
                        src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-231-1@1x.png"
                        anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-231-1@1x.png"
                        alt="icon-bar_chart" />
                        <div className="ellipse-14-eFMoxj" data-id="a2f7f80a-5e99-4a81-851f-2722637b126c"></div><img
                            className="path-232-eFMoxj" data-id="671533a5-1044-413d-ae1b-9076cd3303bc"
                            src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-232-1@1x.png"
                            anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-232-1@1x.png"
                            alt="Path 232" />
                    </div></a>
                    <a href="analytics">
                        <div className="analytics-dxEaLj" data-id="b9c79ff2-7d30-432f-b37f-d10c17dc58a6"><img
                            className="path-233-NO3YTI" data-id="a206347f-57d7-4436-87f2-2a04ff9e1941"
                            src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-233-1@1x.png"
                            anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-233-1@1x.png"
                            alt="Path 233" /><img className="path-234-NO3YTI" data-id="83e26e17-34ad-4eb4-8a1d-31c9ff35edc6"
                                src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-234-1@1x.png"
                                anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-234-1@1x.png"
                                alt="Path 234" /><img className="path-235-NO3YTI" data-id="95065cea-aebe-461c-8108-9b3bbc9bf913"
                                    src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-235-1@1x.png"
                                    anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-235-1@1x.png"
                                    alt="Path 235" /></div></a>
                </div>
                <div className="logo-title-x1tD94" style={{ display: isOpen ? "block" : "none" }} data-id="14bdd5bc-6cd9-4988-9fab-808744353bb3">
                    <div className="your-title-Xlx8a9"  data-id="33706f79-8275-4790-9c9b-11df0949eb6f"><span
                        className="span0-zkFL6J">Your</span><span className="span1-zkFL6J">Title</span></div><img
                        className="approval-Xlx8a9" data-id="c97e6e92-a559-4252-8112-4cc59f3f62db"
                        src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/approval-1@1x.png"
                        anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/approval-1@1x.png"
                        alt="approval" />
                </div>


                
            </div>


            <div className="minimize-menu-icon-aYWuA2" style={{ left: isOpen ? "190px" : "25px" }} data-id="0caf81b4-4de7-4012-85fd-12e6599b1c36" onClick={toggle}><img
                className="line-25-3xzXKX" data-id="09fd10f2-c936-4cc5-b749-dce676fe60b2"
                src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/line-25@1x.png"
                anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/line-25@1x.png"
                alt="Line 25" /><img className="line-26-3xzXKX" data-id="a4f3bbe0-0c05-4ba6-aab4-fe72ea76a411"
                    src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/line-25@1x.png"
                    anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/line-25@1x.png"
                    alt="Line 26" /><img className="line-27-3xzXKX" data-id="a21a3761-d2d2-4530-b6f7-bea3fc24b85a"
                        src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/line-25@1x.png"
                        anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/line-25@1x.png"
                        alt="Line 27" /></div>
        </div>
    )
}

export default Sidebar;