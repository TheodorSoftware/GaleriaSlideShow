import React from "react"
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './rootPage.scss'

const RootPage = () => {
    return(
        <React.Fragment>
            <div className="layout">
                <Navbar> </Navbar>
                <div className="separator"></div>
                <div className="layout__child">
                    <Outlet> </Outlet>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RootPage;