import React, { useState } from 'react';


function Navbar() {

    const [state, setState] = useState(true);
    const [state2, setState2] = useState(true);
    const [state3, setState3] = useState(true);
    const [state4, setState4] = useState(true);
    const [state5, setState5] = useState(true);



    const toggle = () => {
        setState(!state);
    }

    const toggle2 = () => {
        setState2(!state2);
    }

    const toggle3 = () => {
        setState3(!state3);
    }

    const toggle4 = () => {
        setState4(!state4);
    }

    const toggle5 = () => {
        setState5(!state5);
    }

    return (
        <div>



            <div className="filters-aYWuA2" data-id="a9820f09-d2c2-451c-a134-c7ee43550ade">
                <div className="tabs-eAsFIj" data-id="68a3207b-714a-433d-b98d-d64b41c74b4c">
                    <div className="tab-1-tJdxXx" data-id="4ee53938-1f13-4e16-8759-31048ae2856a">
                        <div className="base-7mU6Ax" data-id="0d171b5f-27f4-4054-b9ef-452e75e87326"></div>
                        <div className="today-7mU6Ax" data-id="4434a4ac-72e3-4345-9cd7-10767c53df83">            
                        <button onClick={toggle} className={'toggle--button ' + (state ? 'toggle--close' : '')}>
                            {/* {state ? 'close' : 'open'} */}
                            <div style={{ "color": "var(--nobel)",
                            "font-family": "var(--font-family-quicksand)",
                            "font-size": "var(--font-size-l)",
                            "font-style": "normal",
                            "font-weight": "600"}}>Today</div>
                        </button></div>
                    </div>
                    <div className="tab-2-tJdxXx" data-id="f41601d9-1542-4e51-8cc6-a9f6e5e00f59">
                        <div className="base-WREXE6" data-id="8d3886c5-7d4a-4bd8-b92d-fb36ac64194f"></div>
                        <div className="week-WREXE6 quicksand-semi-bold-nobel-12px"
                            data-id="02271df1-d1ea-40e9-b5a9-334e20d7bf1e">                        
                            <button onClick={toggle2} className={'toggle--button2 ' + (state2 ? 'toggle--close' : '')}>
                            {/* {state ? 'close' : 'open'} */}
                            <div style={{ "color": "var(--nobel)",
                            "font-family": "var(--font-family-quicksand)",
                            "font-size": "var(--font-size-l)",
                            "font-style": "normal",
                            "font-weight": "600"}}>Week</div>
                        </button></div>
                    </div>
                    <div className="tab-3-tJdxXx" data-id="0f447eb8-879f-46bc-8d7a-83cb4063c06e">
                        <div className="base-5IU9UL" data-id="6c5f3e43-71c8-42f7-ab3e-decffdf89cc1"></div>
                        <div className="month-5IU9UL quicksand-semi-bold-nobel-12px"
                            data-id="80dd7f7f-6c51-4ebf-9705-6067e2255a81">                            
                            <button onClick={toggle3} className={'toggle--button3 ' + (state3 ? 'toggle--close' : '')}>
                            {/* {state ? 'close' : 'open'} */}
                            <div style={{ "color": "var(--nobel)",
                            "font-family": "var(--font-family-quicksand)",
                            "font-size": "var(--font-size-l)",
                            "font-style": "normal",
                            "font-weight": "600"}}>Month</div>
                        </button></div>
                    </div>
                    <div className="tab-4-tJdxXx" data-id="9525ea1b-3972-46c5-b63e-66d6d1a7748e">
                        <div className="base-hYvI0T" data-id="955cb452-61d9-4515-b46c-602a1227ac92"></div>
                        <div className="quarter-hYvI0T quicksand-semi-bold-nobel-12px"
                            data-id="7dc1d850-566c-46c5-a203-c0c9468e728a">                            
                            <button onClick={toggle4} className={'toggle--button4 ' + (state4 ? 'toggle--close' : '')}>
                            {/* {state ? 'close' : 'open'} */}
                            <div style={{ "color": "var(--nobel)",
                            "font-family": "var(--font-family-quicksand)",
                            "font-size": "var(--font-size-l)",
                            "font-style": "normal",
                            "font-weight": "600"}}>Quarter</div>
                        </button></div>
                    </div>
                    <div className="tab-5-tJdxXx" data-id="92453d97-17df-422c-923c-81fe0a841806">
                        <div className="base-9rEwGY" data-id="fd374d50-f94c-423d-9406-0d45e0f262f6"></div>
                        <div className="year-9rEwGY quicksand-semi-bold-nobel-12px"
                            data-id="cdcf24f6-64f9-4755-953b-c5dbf65e0317">                            
                            <button onClick={toggle5} className={'toggle--button5 ' + (state5 ? 'toggle--close' : '')}>
                            {/* {state ? 'close' : 'open'} */}
                            <div style={{ "color": "var(--nobel)",
                            "font-family": "var(--font-family-quicksand)",
                            "font-size": "var(--font-size-l)",
                            "font-style": "normal",
                            "font-weight": "600"}}>Year</div>
                        </button></div>
                    </div>
                </div>
                <div className="data-eAsFIj" data-id="7752bbbc-177e-48d9-bb2e-0b8337dd9b05">
                    <div className="base-9x8pf8" data-id="6c9c5c0e-092f-46fd-b4ba-4492538cb1fa"></div>
                    <div className="ic_today-9x8pf8" data-id="11fa4caf-4069-440f-8c9f-58934e5ebdbe"><img
                        className="icon-calendar-R07gCH" data-id="ae426fc1-f722-4e5a-808b-950663af3d55"
                        src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/icon@1x.png"
                        anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/icon@1x.png"
                        alt="icon-calendar" /></div>
                    <p className="x18-oct-25-oct-2020-9x8pf8 quicksand-semi-bold-nobel-12px"
                        data-id="160fd767-1053-42d0-8534-cf8df73059d9">18 Oct — 25 Oct 2020</p>
                </div>
            </div >
        <div className="top-right-menu-panel-aYWuA2" data-id="5b928050-cb67-44b3-9535-1d8eab68e063">
            <div className="admin-info-3wa9mJ" data-id="922072cd-2abd-4d00-a37b-b9d373ea845b">
                <div className="john-doe-qbEtsL" data-id="1d6ce1c7-9a1c-4660-a184-158688d1b915">Your Name</div>
                <div className="bell-qbEtsL" data-id="6b2cdd99-b36a-427f-9c51-c18acc47c216"><img className="path-sfhcs8"
                    data-id="4b2e1720-c6bd-49cf-936a-ab3d217b502c"
                    src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path@1x.png"
                    anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path@1x.png"
                    alt="Path" /><img className="path-16Z7Eu" data-id="9664342c-4ed0-4430-901b-0ceb62168029"
                        src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-1@1x.png"
                        anima-src="https://cdn.animaapp.com/projects/637632da40997fbfc00d473f/releases/637658b864e76627f727674d/img/path-1@1x.png"
                        alt="Path" /></div>
                <div className="ellipse-3-qbEtsL" data-id="e7e9bda3-3f0e-41ce-8427-e9ca95f8af69"></div>
                <div className="x1-qbEtsL" data-id="447f0b33-fb60-4fc0-9c18-e1d95e8927eb">1</div>
            </div>
            <div className="logo-3wa9mJ" data-id="9071ee1c-456d-42c1-84db-e367646c823a">
                <div className="ellipse-13-KEkLni" data-id="4806f1ac-0b8a-4cdd-a3fa-2a72166784d4"></div>
            </div>
        </div>
        </div >
    )
}

export default Navbar;