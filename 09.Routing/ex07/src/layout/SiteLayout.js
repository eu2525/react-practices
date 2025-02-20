import React from 'react';
import * as styles from '../assets/scss/layout/Contents.scss';
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import 


function SiteLayout({children}) {
    return (
        <>
            <Header />
            <div className={styles.Content}>
                {children}
            </div>
            <Navigation />
            <Footer />
        </>
        
    );
}

export default SiteLayout;