import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
// import SideBar from "./sidebar/Sidebar";

export default function Layout({children}){
    return(
        <>
            <Header />
             {children}
            {/* <Footer /> */}
        </>
    )
}