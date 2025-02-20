import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import {useNavigate} from 'react-dom'


export default function Guestbook() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(()=> { 
            // window.location.href = '/gallery';            
        }, 3000); 
    }, [])

    return (
        <>
            <ul>
                <li><Link to='/'>[Main]</Link></li>
                <li><Link to='/guestbook'>[Guestbook]</Link></li>
                <li><Link to='/gallery'>[Gallery]</Link></li>
            </ul>

            <ul>
                <li><NavLink className={'ehqlehql'} to={'/'}>[Main]</NavLink></li>
                <li><NavLink className={'rptmxm'} to={'/guestbook'}>[Guestbook]</NavLink></li>
                <li><NavLink className={'roffjfl'} to={'/gallery'}>[Gallery]</NavLink></li>
            </ul>

            <div>
            <h1>Guestbook</h1>
            </div>
        </>
    );
}
    