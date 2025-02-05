import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer"


const Layout = ({ children, header }) => {
    return (
        <>
            <div className="font-sans">
                {header && <Navbar />}
                <div className="bg-white">{children}</div>
                <Footer />
            </div>
        </>
    )
}

export default Layout;