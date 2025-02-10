import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import data from './assets/json/data';

function Tabbox(props) {
    return (
        <div className={"tab-box"}>
            <Tabs tabs={data}/>
            <TabView />
        </div>
    );
}

export default Tabbox;