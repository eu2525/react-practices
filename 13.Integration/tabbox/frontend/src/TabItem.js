import React from 'react';

function TabItem({name, active}) {
    const [select, setSelect] = useState(active);

    return (
        <li className={active ? "active" : ""}
            onClick={() => {
                setSelect(!select);
            }}>
            {name}
        </li>
    );
}

export default TabItem;
