import React from 'react';
import * as styles from '../assets/scss/component/About.scss';
import {SiteLayout} from '../layout';

export default function About() {
    return (
        <SiteLayout>
            <div className={styles.About}>
                <h2>About</h2>
            </div>
        </SiteLayout>
    );
}