import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from './component/Error404';


const Router = () => {
    const [route, setRoute] = useState({page: window.location.href.substring(window.location.href.lastIndexOf('/'))});


    const pushstateHandler = (e) => {
        setRoute(e.detail ? e.detail : {page : '/'});
    };

    const popstateHandler = (e) => {
        setRoute(e.state ? e.state : {page : '/'});
    };

    useEffect(() => {
        // clickHandler에서 발생시킨 Event를 Listen함.
        window.addEventListener('pushstate', pushstateHandler);
        window.addEventListener('popstate' , popstateHandler);

        return () => {
            window.removeEventListener('pushsate', pushstateHandler);
            window.removeEventListener('popstate' , popstateHandler);
        }

    }, []);

    let component = null;

    switch(route.page) {
        case '' :
        case '/' :
            component = <Main />;
            break;
        case '/guestbook' :
            component = <Guestbook />;
            break;
        case '/gallery':
            component = <Gallery />;
            break;
        default :
            component =<Error404 />;                    
    }

    return component;
};


export default function App() {

    const clickHandler = (e) => {
        e.preventDefault();

        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));

        window.history.pushState({page : url}, e.target.txt, url);
        //custom event를 발생시킴
        window.dispatchEvent(new CustomEvent('pushstate', {detail : {page : url}}));
        // window.dispatchEvent(new Event('pushstate'));
    }

    return (
        <div>
            <ul>
                <li><a href={'/'} onClick={clickHandler}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={clickHandler}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={clickHandler}>[Guestbook]</a></li>
            </ul>
            <Router click/>
        </div>
    )
}